# Reranking

Reranking is a second-stage retrieval step that rescores an initial set of candidate results using a more expensive, higher-quality model to improve the final ranking before results are passed to an [LLM](./llm.md).

## Details

In a typical [RAG](./rag.md) pipeline, the first stage retrieves a broad set of candidates quickly - via [embedding](./embedding.md)-based nearest-neighbor search from a [vector database](./vector-database.md), keyword search (BM25), or [hybrid search](./hybrid-search.md). These first-stage retrievers are fast but approximate: bi-encoder [embedding models](./embedding-model.md) encode query and document independently, so they cannot model fine-grained interactions between them. A reranker (typically a cross-encoder model) then takes each (query, candidate) pair as joint input and produces a relevance score that captures token-level interactions between the query and the document. Because the reranker processes every candidate pair individually, it is too slow to run over the full corpus but highly effective when applied to a short list (e.g., top 20-100 candidates from the first stage).

Reranking improves precision at the top of the results list, which directly affects output quality in RAG systems where only a handful of passages fit within the model's [context size](./context-size.md). It is a core component of [context engineering](./context-engineering.md): choosing which retrieved passages actually enter the prompt.

## Examples

- A RAG pipeline retrieves the top 50 chunks by vector similarity, then a cross-encoder reranker rescores them and passes the top 5 to the LLM.
- A search system combines BM25 and semantic results via [hybrid search](./hybrid-search.md), then applies a reranker to merge and refine the final ranking.
- A coding agent retrieves candidate code files by embedding search, then reranks them with a model trained on code-relevance judgments before including them in context.

## Synonyms

re-ranking, second-stage retrieval, cross-encoder reranking
