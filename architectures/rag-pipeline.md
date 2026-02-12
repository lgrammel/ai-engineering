# RAG Pipeline

A fixed [AI workflow](../concepts/ai-workflow.md) that [retrieves](../concepts/retrieval.md) relevant documents from an indexed corpus and includes them in an [LLM's](../concepts/llm.md) [context](../concepts/context.md) before a single generation call, following a retrieve-then-generate sequence with no [agent](../concepts/agent.md) loop.

## Details

This architecture is a specific instance of an [AI workflow](../concepts/ai-workflow.md): a fixed sequence of retrieve, optionally [rerank](../concepts/reranking.md), then generate. An offline indexing pipeline [chunks](../concepts/chunking.md) source documents, converts them to [embeddings](../concepts/embedding.md) with an [embedding model](../concepts/embedding-model.md), and stores them in a retrieval backend ([vector database](../concepts/vector-database.md), search index, or database). At query time, the system embeds the user's input, retrieves matching documents (often via [hybrid search](../concepts/hybrid-search.md)), optionally [reranks](../concepts/reranking.md) the results, and assembles them into the [prompt](../concepts/prompt.md) alongside system instructions before a single [LLM](../concepts/llm.md) call.

The architecture extends a [Single Generation Call](./single-generation-call.md) by adding an automated [retrieval](../concepts/retrieval.md) system that selects what enters context. The developer controls system instructions but not which specific documents are retrieved for a given query - that is determined by the retrieval pipeline and the contents of the corpus. This introduces a trust boundary absent in single generation: the indexed corpus. Anyone who can write to the corpus (add, modify, or delete documents) can influence model outputs indirectly, because retrieved documents enter the prompt as context. Indirect [prompt injection](../threats/prompt-injection.md) through documents stored in the corpus is the most common attack vector against [RAG](../concepts/rag.md) systems.

[Guardrails](../concepts/guardrail.md) in this architecture include input/output classifiers, [structured output](../concepts/structured-output.md) constraints, retrieval quality controls (filtering, relevance thresholds), and [context engineering](../concepts/context-engineering.md) to separate retrieved content from system instructions.

## Trust boundaries

The indexed corpus is the key trust boundary: anyone who can write to the corpus can influence what the model generates, because retrieved documents enter the prompt as [context](../concepts/context.md). The [retrieval](../concepts/retrieval.md) pipeline ([embedding](../concepts/embedding.md), search, [reranking](../concepts/reranking.md)) acts as a filter that determines which documents from the corpus reach the model - retrieval quality directly controls context quality. The generation step has the same trust model as a [Single Generation Call](./single-generation-call.md), but with reduced developer control over what enters context: retrieval is automated based on the query, not hand-curated. The user's query influences what gets retrieved, creating an indirect path from user input to context selection.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in the user query or in retrieved documents can override intended instructions; indirect injection through indexed documents is the primary attack vector
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs, potentially compounded by irrelevant or contradictory retrieved context
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs, amplified by the perceived authority of grounded responses
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior
- [Context poisoning](../threats/context-poisoning.md) - malicious or manipulated documents in the indexed corpus that alter model outputs when retrieved

## Examples

- An enterprise knowledge base Q&A endpoint that retrieves help articles and generates answers in a single turn.
- A legal research tool that retrieves statute text and case excerpts to [ground](../concepts/grounding.md) a single analysis.
- A documentation search system that retrieves relevant pages and summarizes them for the user.
