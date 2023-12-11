const express = require("express");
const router = express.Router();
const dbConnection = require("./dbConn.js");

router.get("/db", async (req, res) => {
    dbConnection.run('MATCH (n {uploader: "EA"}) RETURN n').then((results) => {
        res.json(results);
    });
});

router.post("/db", async (req, res) => {
    let ranges = [];
    let where = "";
    let query = Object.entries(req.body).reduce(
        (a, [k, v]) => (v ? ((a[k] = v), a) : a),
        {}
    );
    for (const [key, value] of Object.entries(query)) {
        if (Array.isArray(value)) {
            ranges.push(
                "(n." +
                    key +
                    " > " +
                    value[0] +
                    " AND n." +
                    key +
                    " < " +
                    value[1] +
                    ")"
            );
            delete query[key];
        }
    }
    if (ranges.length > 0) {
        where = "WHERE " + ranges.join(" AND ");
    }
    dbConnection
        .run(
            "MATCH (n " +
                JSON.stringify(query).replace(/"([^"]+)":/g, "$1:") +
                ") " +
                where +
                " RETURN n"
        )
        .then((results) => {
            res.json(results);
        });
});

router.post("/db/pagerank", async (req, res) => {
    dbConnection
        .run(
            "CALL gds.pageRank.stream('videos') YIELD nodeId, score RETURN gds.util.asNode(nodeId), score ORDER BY score DESC LIMIT " +
                req.body.pageRank
        )
        .then((results) => {
            res.json(results);
        });
});

module.exports = router;
