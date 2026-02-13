# Retrieval

Retrieval is the process of finding and fetching relevant information from external data sources so it can be included in an [LLM's](./llm.md) [context](./context.md) at [inference](./inference.md) time, supplying knowledge that is absent from or unreliable in the model's weights.

## Details

A retrieval pipeline typically has three stages: candidate generation, ranking, and result formatting. Candidate generation casts a wide net using fast, approximate methods - [embedding](./embedding.md)-based nearest-neighbor search from a [vector database](./vector-database.md), keyword search (BM25), or [hybrid search](./hybrid-search.md) that combines both. Ranking narrows the candidates: a [reranking](./reranking.md) step rescores them with a higher-quality model so that only the most relevant items proceed. Result formatting prepares the selected items for inclusion in the [prompt](./prompt.md) - truncating, reordering, or adding metadata - to fit within the model's [context size](./context.md).

Retrieval is the core mechanism behind [RAG](./rag.md), which augments generation by injecting retrieved passages into context. It is also central to [grounding](./grounding.md) (anchoring outputs in verifiable sources), [agent memory](./agent-memory.md) (recalling past interactions by semantic similarity), and knowledge-cutoff mitigation (supplying information the model lacks from [training](./training.md)). In [agentic RAG](./agentic-rag.md), retrieval becomes iterative: an [agent](./agent.md) issues multiple retrieval calls, reformulates queries, and decides when results are sufficient.

Retrieval quality is a key lever in [context engineering](./context-engineering.md). Poor retrieval - missing relevant documents or surfacing irrelevant ones - directly degrades generation quality regardless of model capability. The data sources feeding retrieval are also an attack surface: [context poisoning](../threats/context-poisoning.md) can manipulate model outputs by injecting or modifying documents in the retrieval backend.

## Examples

- A [RAG](./rag.md) pipeline that embeds a user query, retrieves the top 50 [chunks](./chunking.md) from a [vector database](./vector-database.md), reranks them, and passes the top 5 into the prompt.
- A [coding agent](./coding-agent.md) that searches a codebase by file name and content to gather relevant source files before generating a change.
- A [web search tool](./web-search-tool.md) that queries an external search engine and returns snippets for inclusion in context.
- An [agent memory](./agent-memory.md) system that retrieves past conversation summaries by semantic similarity to the current query.

## Synonyms

information retrieval, knowledge retrieval
