# Vector Database

A vector database is a storage system optimized for indexing and querying high-dimensional vectors ([embeddings](./embedding.md)) via approximate nearest-neighbor (ANN) search, enabling fast similarity [retrieval](./retrieval.md) over large collections.

## Details

In a typical [RAG](./rag.md) pipeline, documents are split into segments by a [chunking](./chunking.md) strategy, each chunk is converted to an [embedding](./embedding.md) by an [embedding model](./embedding-model.md), and the resulting embeddings are stored in a vector database. At query time, the user's input is embedded and the database returns the most similar vectors (and their associated text) using ANN algorithms such as HNSW (hierarchical navigable small world) or IVF (inverted file index). Distance metrics (cosine similarity, dot product, Euclidean distance) determine how similarity is measured. Many vector databases also support [hybrid search](./hybrid-search.md), combining vector similarity with keyword or metadata filters to improve retrieval precision.

Vector databases serve as the retrieval backend for [RAG](./rag.md) and are commonly used as the persistence layer for [agent memory](./agent-memory.md) (storing and retrieving memory entries by semantic similarity). Results from vector database queries are often passed through a [reranking](./reranking.md) stage that rescores candidates using a more expensive cross-encoder model for higher precision. Vector databases are distinct from [embedding models](./embedding-model.md), which produce the [embeddings](./embedding.md); the database handles storage, indexing, and querying of those vectors.

## Examples

- A RAG system that stores document-chunk [embeddings](./embedding.md) in a vector database and retrieves the top-k most relevant chunks for each user query.
- An agent memory store where past conversation summaries are embedded and retrieved by similarity to the current context.
- A hybrid search query that filters by document metadata (e.g., date range, source) before ranking by vector similarity.

## Synonyms

vector store, vector search database, embedding database, similarity search engine
