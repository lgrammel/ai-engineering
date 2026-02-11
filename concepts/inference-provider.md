# Inference Provider

An inference provider is an organization that runs [LLMs](./llm.md) to generate outputs ([inference](./inference.md)) and exposes them via an API or hosted service. It may serve its own [LLMs](./llm.md) or third-party [LLMs](./llm.md).

## Details

Inference providers sit between [model developers](./model-developer.md) (who create model weights) and application developers (who integrate models into end-user products). They typically handle API access, scaling, rate limiting, and billing. Provider APIs commonly expose [sampling parameters](./sampling-parameters.md), [structured output](./structured-output.md) constraints, [streaming](./streaming.md), and [prompt caching](./prompt-caching.md). Pricing is typically per-[token](./token.md) with different rates for input and output, making provider choice a key factor in [inference cost](./inference-cost.md).

Note: many organizations are both [model developers](./model-developer.md) and inference providers; these are roles, not mutually exclusive categories.

## Examples

- OpenAI
- Anthropic
- Google (Gemini API)
- AWS Bedrock
- Together AI
- Fireworks AI
