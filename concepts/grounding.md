# Grounding

Grounding is the practice of anchoring an [LLM's](./llm.md) outputs in verifiable external sources -- retrieved documents, tool results, database records, or other factual references -- rather than relying solely on the model's parametric knowledge.

Grounding is the primary mitigation for [hallucination](./hallucination.md): by conditioning generation on retrieved evidence (as in [RAG](./rag.md)) and validating outputs against source material, systems can detect and reduce fabricated content. In [agent](./agent.md) systems, grounding also applies to [tool](./tools.md) call arguments -- verifying that identifiers, URLs, and parameters correspond to real entities before execution, which is a key defense against [hallucination exploitation](../threats/hallucination-exploitation.md).

Grounding is not binary: it ranges from loose (providing relevant [context](./context.md) and hoping the model uses it) to strict (requiring every claim to cite a retrieved source and rejecting uncited outputs).

## Examples

- A RAG system that retrieves passages and instructs the model to only answer based on retrieved content.
- Validation of tool call arguments (package names, URLs, record IDs) against known-good registries before execution.
- A citation-required mode where the model must reference specific source documents for each claim.

## Synonyms

output grounding, grounded generation
