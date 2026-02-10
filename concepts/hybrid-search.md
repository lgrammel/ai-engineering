# Hybrid Search

Hybrid search is a retrieval strategy that combines two or more search methods -- typically semantic (vector) search and lexical (keyword) search -- and merges their results to improve both recall and precision over either method alone.

## Details

Semantic search uses [embeddings](./embedding.md) from an [embedding model](./embedding-model.md) to find results that are conceptually similar to the query, even when exact keywords differ. Lexical search (commonly BM25) matches on exact terms and handles specific identifiers, rare words, and precise phrases that embedding models may underrepresent. Hybrid search runs both in parallel and fuses their ranked result lists using algorithms such as reciprocal rank fusion (RRF) or weighted linear combination. Many modern [vector databases](./vector-database.md) support hybrid search natively, combining ANN vector queries with keyword or metadata filters in a single operation.

Hybrid search is particularly valuable as the first-stage retriever in [RAG](./rag.md) pipelines because it broadens the candidate set before a [reranking](./reranking.md) step narrows it down. Lexical matching catches results that embedding search misses (e.g., exact error codes, product IDs, or domain-specific acronyms), while semantic matching catches paraphrases and conceptual matches that keyword search misses.

## Examples

- A RAG pipeline that retrieves candidate chunks via both BM25 and cosine similarity against a [vector database](./vector-database.md), fuses the results with RRF, then passes the top candidates to a [reranker](./reranking.md).
- A support system where users search by error codes (best matched lexically) and natural-language descriptions (best matched semantically) in the same query.
- A legal research tool that combines exact statute-number matching with semantic retrieval over case law summaries.

## Synonyms

hybrid retrieval, hybrid vector search
