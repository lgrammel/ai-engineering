# Embedding

An embedding is a dense numerical vector that represents the semantic meaning of an input (text, image, or other modality) in a continuous vector space, where proximity between vectors reflects similarity between the inputs they represent.

## Details

Embeddings are produced by [embedding models](./embedding-model.md) and typically have a fixed dimensionality (e.g., 256, 1024, or 3072 dimensions) regardless of input length. The key property is that semantically related inputs map to nearby points in the vector space, enabling similarity comparisons via distance metrics such as cosine similarity, dot product, or Euclidean distance. This geometric relationship makes embeddings the foundation of nearest-neighbor [retrieval](./retrieval.md): given a query embedding, the most relevant items are those whose embeddings are closest in the vector space.

In [RAG](./rag.md) pipelines, source documents are [chunked](./chunking.md), each chunk is converted to an embedding, and the resulting vectors are stored in a [vector database](./vector-database.md). At query time, the user input is embedded and compared against stored embeddings to retrieve the most relevant chunks. Embeddings also underpin [agent memory](./agent-memory.md) retrieval (finding past interactions by semantic similarity), classification, clustering, duplicate detection, and recommendation systems.

Embedding quality depends on the [embedding model](./embedding-model.md) used and how well it was [trained](./training.md) for the target domain. Mismatched models (e.g., a general-purpose model applied to specialized legal text) produce embeddings that may not capture domain-specific distinctions.

## Examples

- A 1536-dimensional vector representing the sentence "How do I reset my password?" that sits close to vectors for similar support questions.
- Document-chunk embeddings stored in a [vector database](./vector-database.md) and retrieved by cosine similarity to answer user queries in a RAG system.
- Embeddings of product descriptions clustered to discover groups of similar items without predefined categories.

## Synonyms

vector embedding, dense embedding, semantic embedding, vector representation
