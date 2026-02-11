# Chunking

Chunking is the process of splitting documents or other content into smaller segments (chunks) so they can be individually converted to [embeddings](./embedding.md), indexed, and [retrieved](./retrieval.md) in a [RAG](./rag.md) pipeline.

## Details

[Embedding models](./embedding-model.md) have input length limits, and retrieval quality depends on each indexed unit carrying focused, coherent information. Chunking bridges the gap between arbitrarily long source documents and the fixed-size vectors stored in a [vector database](./vector-database.md). Chunk size also affects generation: chunks included in the [context](./context.md) at [inference](./inference.md) time consume [tokens](./token.md) and must fit within the model's [context size](./context-size.md).

Common strategies include fixed-size chunking (splitting by [token](./token.md) or character count), semantic chunking (splitting at paragraph, section, or sentence boundaries), recursive chunking (applying progressively finer splits until a target size is reached), and overlapping windows (repeating a portion of text across adjacent chunks to preserve boundary context). Smaller chunks improve retrieval precision but lose surrounding context; larger chunks preserve context but dilute relevance signals and consume more of the generation budget.

## Examples

- Splitting a knowledge base article into 512-token fixed-size chunks with 64-token overlap for embedding and retrieval.
- Using markdown headings to split a technical document into section-level chunks that each cover a coherent subtopic.
- Recursively splitting a long PDF first by section, then by paragraph, until every chunk falls below a target token count.

## Synonyms

text chunking, document chunking, text splitting
