# Context

Context is the set of information an [LLM](./llm.md) application provides alongside a request (instructions, conversation history, retrieved documents, [tool](./tools.md) outputs, metadata) that the model can use to produce an answer. Context is assembled into a [prompt](./prompt.md) and must fit within the model's [context size](./context-size.md). [Context engineering](./context-engineering.md) is the practice of selecting, structuring, and maintaining this information for reliable model performance.

## Details

Because context is the primary input the model reasons over, it is an attack surface for [context poisoning](../threats/context-poisoning.md): an attacker who can modify context sources (workspace files, memory stores, retrieved documents) can influence model behavior indirectly.

## Examples

- System and developer instructions that define the assistant's role.
- A chat transcript and a short running summary of prior turns (see [prompt compaction](./prompt-compaction.md)).
- Retrieved passages ([RAG](./rag.md)) and citations.
- Tool results (for example, database rows or API responses).
- PDF files and images.

## Synonyms

model context, input context
