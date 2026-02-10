# Embedding Model

An embedding model maps inputs (text, images, or other modalities) to dense numerical vectors (embeddings) in a shared vector space, where semantic similarity between inputs corresponds to proximity between their vectors.

Embedding models are distinct from generative [LLMs](./llm.md): rather than producing text token by token, they produce a fixed-dimensional vector that captures the meaning of the input. They are typically encoder-based models (often derived from the [transformer architecture](./transformer-architecture.md)) [trained](./training.md) or [fine-tuned](./fine-tuning.md) with contrastive or similarity objectives so that related inputs cluster together in the vector space.

Embedding models are foundational to [RAG](./rag.md) pipelines, where they power the retrieval step: documents are embedded and stored in a vector database, and queries are embedded at [inference](./inference.md) time to find the most similar documents via nearest-neighbor search. They are also used for semantic search, classification, clustering, and duplicate detection.

## Examples

- A text embedding model that encodes documents and queries into 1024-dimensional vectors for similarity search in a [RAG](./rag.md) pipeline.
- A multimodal embedding model that maps both images and text descriptions into a shared vector space for cross-modal retrieval.
- An embedding model fine-tuned on domain-specific data (e.g., legal or medical text) to improve retrieval quality in a specialized application.

## Synonyms

embedding, text embedding model, vector embedding model
