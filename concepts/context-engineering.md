# Context Engineering

Context engineering is the practice of selecting, structuring, and maintaining the [context](./context.md) given to an [LLM](./llm.md) so it reliably performs the desired task within a fixed [context size](./context-size.md).

## Details

It includes prompt/template design, retrieval and ranking (see [RAG](./rag.md)), [in-context learning](./in-context-learning.md) example selection, [prompt compaction](./prompt-compaction.md) and [memory](./agent-memory.md), formatting of tool outputs, redaction of sensitive data (to reduce [data exfiltration](../threats/data-exfiltration.md) risk), and provenance cues that help the model distinguish instructions from untrusted content (a key mitigation for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md)).

In [multi-agent systems](./multi-agent-system.md), context engineering extends to designing what crosses [context isolation](./context-isolation.md) boundaries: choosing which information a parent agent passes to a [subagent](./subagent.md) and how the subagent's result is formatted before re-entering the parent's context.

## Examples

- RAG pipelines that retrieve and compress relevant passages before generating.
- Summarizing a long chat history into a short "state" block.
- Putting tool outputs in a strict schema and separating them from instructions.
- [Skills](./skill.md) that inject task-specific instructions into an agent's context only when relevant, keeping the base prompt lean.
- Curating the task description and inputs passed across a [context isolation](./context-isolation.md) boundary to a [subagent](./subagent.md), balancing focus against information loss.

## Synonyms

prompt engineering, context management
