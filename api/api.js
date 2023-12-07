const express = require('express');
const router = express.Router();
const dbConnection = require('./dbConn.js')

router.get('/db', async (req, res) => {
  dbConnection.run(
    'MATCH (n {uploader: "EA"}) RETURN n'
  ).then(results => {
    console.log(results)
    res.json(results)
  })
});


module.exports = router;