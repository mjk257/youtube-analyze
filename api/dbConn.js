const neo4j = require('neo4j-driver')

const driver = neo4j.driver("bolt://localhost:7687")
const dbConnection = driver.session()

module.exports = dbConnection;
