# Agentic RAG

Agentic RAG is a [RAG](./rag.md) pattern where an [agent](./agent.md) controls the retrieval process through [tool](./tools.md) calls, dynamically deciding what to search for, which sources to query, and whether to refine or re-retrieve based on intermediate results, rather than following a fixed retrieve-then-generate pipeline.

## Details

In standard RAG, retrieval is a single-shot pipeline: a query enters, matching passages come back, and the model generates from them. In agentic RAG, retrieval is one of several [tools](./tools.md) available in the [agent](./agent.md) loop - the [LLM](./llm.md) can issue multiple retrieval calls, reformulate queries, combine results from different sources, or decide retrieval is unnecessary for a given step. This makes retrieval adaptive: the agent can evaluate whether initial results are sufficient, drill deeper into a specific area, or pivot to a different source entirely.

Agentic RAG is a natural fit for [workspace agents](./workspace-agent.md) (e.g., a coding agent searching a codebase iteratively) and [multi-agent systems](./multi-agent-system.md) where specialized retriever [subagents](./subagent.md) handle different knowledge domains. The tradeoff is higher [latency](./latency.md) and cost from multiple LLM calls, plus the broader threat surface of agents: retrieved content feeding back into the loop creates opportunities for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md).

## Examples

- A coding agent that searches a codebase, reads results, then searches again with refined queries based on what it found.
- A research assistant that queries multiple databases and decides when it has enough context to answer.
- A support agent that retrieves from a knowledge base, checks the answer against policy docs, and re-retrieves if the first results are insufficient.
