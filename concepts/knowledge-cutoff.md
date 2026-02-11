# Knowledge Cutoff

A knowledge cutoff is the date boundary beyond which a model has no knowledge derived from [training](./training.md) data. Information about events, publications, or changes that occurred after the cutoff is absent from the model's weights.

## Details

The cutoff is determined by the data collection window used during [pretraining](./pretraining.md). Continued pretraining or [fine-tuning](./fine-tuning.md) on newer data can shift the boundary for specific domains but does not broadly extend the model's general knowledge. Queries that fall beyond the cutoff are a common source of [hallucination](./hallucination.md), because the model may generate plausible-sounding but outdated or fabricated answers rather than acknowledging ignorance.

[RAG](./rag.md), [grounding](./grounding.md), and [web search tools](./web-search-tool.md) are the primary mitigations: by [retrieving](./retrieval.md) current information and injecting it into the [context](./context.md) at [inference](./inference.md) time, applications can supply the model with knowledge it lacks from training. [Inference providers](./inference-provider.md) typically publish each model's cutoff date so that application developers can assess whether retrieval augmentation is needed for their use case.

## Examples

- A model with a January 2025 cutoff cannot answer questions about events that occurred in March 2025 from its weights alone.
- A [coding agent](./coding-agent.md) suggesting deprecated API patterns because its training data predates a library's breaking release.
- A RAG-augmented assistant that retrieves current documentation to compensate for its model's outdated training data.

## Synonyms

training cutoff, training data cutoff, knowledge cutoff date
