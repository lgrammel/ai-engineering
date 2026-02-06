# Context Engineering

Context engineering is the practice of selecting, structuring, and maintaining the [context](./context.md) given to an [LLM](./llm.md) so it reliably performs the desired task within a fixed [context size](./context-size.md).

It includes prompt/template design, retrieval and ranking, summarization and memory, formatting of tool outputs, redaction of sensitive data (to reduce [exfiltration](./exfiltration.md) risk), and provenance cues that help the model distinguish instructions from untrusted content (a key mitigation for [prompt injection](./prompt-injection.md)).

## Examples

- RAG pipelines that retrieve and compress relevant passages before generating.
- Summarizing a long chat history into a short "state" block.
- Putting tool outputs in a strict schema and separating them from instructions.

## Synonyms

context management
