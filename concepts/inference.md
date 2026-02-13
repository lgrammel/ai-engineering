# Inference

Inference is running a trained [LLM](./llm.md) on inputs to produce outputs (for example generating [tokens](./token.md) from a prompt), without updating the LLM's weights.

## Details

In typical text generation, the input text is converted to tokens by a [tokenizer](./tokenizer.md), the model produces a distribution over possible next tokens, and generated tokens are decoded back into text. [Sampling parameters](./sampling-parameters.md) control how tokens are selected from this distribution at generation time. APIs can optionally return [logprobs](./logprobs.md) for generated tokens, exposing the model's probability assignments for downstream use such as confidence estimation and classification.

In standard generation, compute per token is roughly fixed - the model does one forward pass per output token. Test-time compute (also called test-time scaling) is a strategy where the model spends additional inference-time compute to improve output quality, typically by generating intermediate [reasoning](./reasoning.md) steps (chain-of-thought) before producing the final answer. Models trained for this approach (often called reasoning models) produce extended reasoning traces that can be substantially longer than the visible response, making [inference cost](./inference-cost.md) and [latency](./latency.md) variable and dependent on problem difficulty. This creates a direct tradeoff between compute budget and output quality at inference time, managed in practice through [model routing](./model-routing.md), reasoning effort parameters, or token budgets that cap how much thinking a model can do per request.

In production, inference is commonly provided via an API by an [inference provider](./inference-provider.md) or run on self-hosted infrastructure using [open-weight models](./open-weight-model.md); it is distinct from [training](./training.md), which changes the model to alter behavior (for example via [fine-tuning](./fine-tuning.md)).

## Examples

- Calling a chat completion API to generate an answer from a prompt
- Running a local [LLM](./llm.md) to generate text for an [agent](./agent.md)

## Synonyms

serving, model serving (these terms sometimes refer more broadly to the infrastructure of hosting and operating models, not just the forward pass)
