import pandas as pd
import networkx as nx

# Import data from raw_data
df_list = [pd.read_csv("raw_data/" + file + ".txt", sep="\t", header=None) for file in range(0, 4)]
df = pd.concat(df_list)

# Combine related_ids into one column
df[9] = df[[9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28]].values.tolist() 

# Remove extra columns
df = df[[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]]

# Add column names
columns = ['video_id', 'uploader', 'age', 'category', 'length', 'views', 'rate', 'ratings', 'comments', 'related_ids'] 
df.columns = columns

# Remove missing data
df = df.dropna()

# Create edge list dataframe
df1 = df.explode('related_ids')
edges = df1[['video_id', 'related_ids']]

# Remove related ids to create node attribute dataframe
df = df[['video_id', 'uploader', 'age', 'category', 'length', 'views', 'rate', 'ratings', 'comments']]

# Create networkx graph from edge list dataframe
nx_G = nx.from_pandas_edgelist(edges, source='video_id', target='related_ids')

# Add node attributes from node attribute dataframe
node_attr = df.set_index('video_id').to_dict('index')
nx.set_node_attributes(nx_G, node_attr)

# Write networkx graph to graphml for importing to neo4j
nx.write_graphml(nx_G, 'youtube_graph.graphml')