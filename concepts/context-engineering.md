# Context Engineering

Context engineering is the practice of selecting, structuring, and maintaining the [context](./context.md) given to an [LLM](./llm.md) so it reliably performs the desired task within a fixed [context size](./context-size.md).

It includes prompt/template design, retrieval and ranking (see [RAG](./rag.md)), [in-context learning](./in-context-learning.md) example selection, summarization and [memory](./agent-memory.md), formatting of tool outputs, redaction of sensitive data (to reduce [data exfiltration](../threats/data-exfiltration.md) risk), and provenance cues that help the model distinguish instructions from untrusted content (a key mitigation for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md)).

## Examples

- RAG pipelines that retrieve and compress relevant passages before generating.
- Summarizing a long chat history into a short "state" block.
- Putting tool outputs in a strict schema and separating them from instructions.
- [Skills](./skill.md) that inject task-specific instructions into an agent's context only when relevant, keeping the base prompt lean.

## Synonyms

prompt engineering, context management
