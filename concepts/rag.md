# RAG

RAG (retrieval-augmented generation) is a pattern that enhances [LLM](./llm.md) outputs by [retrieving](./retrieval.md) relevant documents or passages from an external source and including them in the model's [context](./context.md) before generation.

## Details

Rather than relying solely on knowledge encoded in the model's weights during [training](./training.md), RAG systems [chunk](./chunking.md) source documents, convert them to [embeddings](./embedding.md) with an [embedding model](./embedding-model.md), store them in a retrieval backend ([vector database](./vector-database.md), search index, database, or API), and at [inference](./inference.md) time query that backend and inject the results into the [prompt](./prompt.md). This supplies the model with up-to-date or domain-specific information without [fine-tuning](./fine-tuning.md), overcoming the model's [knowledge cutoff](./knowledge-cutoff.md). RAG is one of the most common approaches to [grounding](./grounding.md) - anchoring outputs in verifiable sources rather than relying solely on parametric knowledge. RAG is a core technique in [context engineering](./context-engineering.md): the [retrieval](./retrieval.md), ranking, and formatting of passages directly affects output quality and fits within the model's [context size](./context-size.md). A standard RAG pipeline is a common example of an [AI workflow](./ai-workflow.md) - a fixed sequence of retrieve, optionally [rerank](./reranking.md), then generate. Production RAG pipelines commonly use [hybrid search](./hybrid-search.md) to broaden candidate retrieval and [reranking](./reranking.md) to refine which passages actually enter the prompt. In [agentic RAG](./agentic-rag.md), retrieval becomes part of an [agent](./agent.md) tool loop: the model dynamically decides what to retrieve, when, and whether to refine or re-retrieve based on intermediate results, replacing the fixed workflow with iterative, decision-driven retrieval.

RAG reduces [hallucination](./hallucination.md) when retrieved content is relevant and consistent, but does not eliminate it - the model can still misinterpret, ignore, or fabricate beyond retrieved content. RAG can also increase hallucination when retrieved context is irrelevant, contradictory, or low-quality: the model may confabulate more aggressively when attempting to reconcile conflicting signals from retrieved passages than it would without retrieval at all. Retrieval quality (see [retrieval](./retrieval.md), [reranking](./reranking.md)) is therefore a prerequisite for RAG to improve factual accuracy, not just a performance optimization. [Grounding](./grounding.md) strategies (verifying outputs against retrieved sources) help catch remaining errors. The indexed corpus is a trust boundary: anyone who can write to the corpus (add, modify, or delete documents) can influence model outputs, because retrieved documents enter the [prompt](./prompt.md) as [context](./context.md). This makes the corpus an attack surface for [context poisoning](../threats/context-poisoning.md), and indirect [prompt injection](../threats/prompt-injection.md) through documents stored in the corpus is the most common attack vector against RAG systems.

## Examples

- A support chatbot that retrieves relevant help articles before answering a user question.
- A coding agent that searches a codebase for relevant files and includes them in context before generating a change.
- A legal research tool that retrieves statute text and case excerpts to ground its analysis.

## Synonyms

retrieval-augmented generation, retrieval augmented generation
