# Prompt Compaction

Prompt compaction is the process of reducing the [token](./token.md) count of a [prompt](./prompt.md) while preserving the information the [LLM](./llm.md) needs to perform its task, typically to stay within [context size](./context-size.md) limits or to reduce [latency](./latency.md) and cost.

## Details

As conversations, tool outputs, and retrieved documents accumulate, the assembled [context](./context.md) can approach or exceed a model's context window. Prompt compaction addresses this by condensing or removing content before it is sent to the model. Common techniques include summarizing earlier conversation turns into a shorter state block, dropping or truncating old messages, compressing [RAG](./rag.md) passages to their key claims, and replacing verbose tool outputs with structured summaries. These techniques are a core part of [context engineering](./context-engineering.md).

Compaction introduces a fidelity-efficiency tradeoff: aggressive compression reduces token usage and [latency](./latency.md) but risks losing details the model needs, which can degrade answer quality or cause the model to [hallucinate](./hallucination.md) missing facts. The choice of what to compact and how aggressively depends on the task -- a multi-turn coding agent may need precise earlier outputs while a chatbot can tolerate coarser summaries.

Architectural alternatives to compaction include [context isolation](./context-isolation.md) (giving each [subagent](./subagent.md) a fresh, scoped context) and offloading information to [agent memory](./agent-memory.md) for retrieval on demand rather than carrying it in every prompt. [Prompt caching](./prompt-caching.md) is a complementary optimization: it reduces the compute cost of repeated prefixes but does not reduce token count.

## Examples

- Summarizing a long chat history into a short "state of the conversation" block prepended to the latest user message.
- Truncating tool call results (e.g., limiting file contents to the first N lines) before injecting them into context.
- Using an LLM call to distill a set of retrieved documents into a condensed passage before the main generation step.
- Replacing a full chain-of-thought trace from a previous [reasoning](./reasoning.md) step with only its final conclusion.

## Synonyms

context compaction, prompt compression, context compression, conversation summarization
