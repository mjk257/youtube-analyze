# Getting Started with YouTube Analyze

This repository was made for my final project for CSDS 234 Structured and Unstructured Data at CWRU.

## Data Ingestion

Install dependencies using `pip install -r requirements.txt` in the data directory.
Run the `data/data_ingestion.py` script. This will generate a file called `youtube_graph.graphml`
Move the new file into the import folder in a Neo4j DBMS. This can be found by clicking on the ellipsis
for the DBMS, clicking 'Open folder', and then clicking 'Import'.
Run the following Cypher queries:

`CALL apoc.import.graphml('youtube_graph.graphml', {storeNodeIds: true})`

`MATCH (n) SET n :VIDEO RETURN n`

`CALL gds.graph.project('videos', 'VIDEO', 'RELATED')`

## Query Engine

Run the following commands in the root directory:

`npm install`

`npm run build`

`node api/server.js`

Visit the application at http://localhost:5000

## How to use the Query Engine

The query engine has 2 main tabs: Query and PageRank.
The query tab is the default mode, containing a form.
Desired values to match in the database can be typed in,
or the icon can be pressed to toggle between range mode where
2 values can be entered for a lower and upper bound to filter by.

The second mode, PageRank, will return the top k ranked nodes based on
the user input using the PageRank algorithm.
