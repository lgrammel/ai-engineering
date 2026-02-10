# RAG

RAG (retrieval-augmented generation) is a pattern that enhances [LLM](./llm.md) outputs by retrieving relevant documents or passages from an external source and including them in the model's [context](./context.md) before generation.

Rather than relying solely on knowledge encoded in the model's weights during [training](./training.md), RAG systems [chunk](./chunking.md) source documents, convert them to [embeddings](./embedding.md) with an [embedding model](./embedding-model.md), store them in a retrieval backend ([vector database](./vector-database.md), search index, database, or API), and at [inference](./inference.md) time query that backend and inject the results into the [prompt](./prompt.md). This lets the model ground its answers in up-to-date or domain-specific information without [fine-tuning](./fine-tuning.md), overcoming the model's [knowledge cutoff](./knowledge-cutoff.md). RAG is a core technique in [context engineering](./context-engineering.md): the retrieval, ranking, and formatting of passages directly affects output quality and fits within the model's [context size](./context-size.md).

RAG reduces but does not eliminate [hallucination](./hallucination.md) -- the model can still misinterpret, ignore, or fabricate beyond retrieved content. [Grounding](./grounding.md) strategies (verifying outputs against retrieved sources) help catch remaining errors. Because retrieval sources are part of the model's context, they are also an attack surface for [context poisoning](../threats/context-poisoning.md): an attacker who can inject or modify documents in the retrieval backend can influence model outputs indirectly.

## Examples

- A support chatbot that retrieves relevant help articles before answering a user question.
- A coding agent that searches a codebase for relevant files and includes them in context before generating a change.
- A legal research tool that retrieves statute text and case excerpts to ground its analysis.

## Synonyms

retrieval-augmented generation, retrieval augmented generation
