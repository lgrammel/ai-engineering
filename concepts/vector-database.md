# Vector Database

A vector database is a storage system optimized for indexing and querying high-dimensional vectors (embeddings) via approximate nearest-neighbor (ANN) search, enabling fast similarity retrieval over large collections.

In a typical [RAG](./rag.md) pipeline, documents are split into chunks, each chunk is converted to a vector by an [embedding model](./embedding-model.md), and the resulting vectors are stored in a vector database. At query time, the user's input is embedded and the database returns the most similar vectors (and their associated text) using ANN algorithms such as HNSW (hierarchical navigable small world) or IVF (inverted file index). Distance metrics (cosine similarity, dot product, Euclidean distance) determine how similarity is measured. Many vector databases also support hybrid search, combining vector similarity with keyword or metadata filters to improve retrieval precision.

Vector databases serve as the retrieval backend for [RAG](./rag.md) and are commonly used as the persistence layer for [agent memory](./agent-memory.md) (storing and retrieving memory entries by semantic similarity). They are distinct from [embedding models](./embedding-model.md), which produce the vectors; the database handles storage, indexing, and querying of those vectors.

## Examples

- A RAG system that stores document-chunk embeddings in a vector database and retrieves the top-k most relevant chunks for each user query.
- An agent memory store where past conversation summaries are embedded and retrieved by similarity to the current context.
- A hybrid search query that filters by document metadata (e.g., date range, source) before ranking by vector similarity.

## Synonyms

vector store, vector search database, embedding database, similarity search engine
