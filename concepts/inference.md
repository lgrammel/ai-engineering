# Inference

Inference is running a trained [LLM](./llm.md) on inputs to produce outputs (for example generating [tokens](./token.md) from a prompt), without updating the LLM's weights.

In typical text generation, the input text is converted to tokens by a [tokenizer](./tokenizer.md), the model produces a distribution over possible next tokens, and generated tokens are decoded back into text. [Sampling parameters](./sampling-parameters.md) control how tokens are selected from this distribution at generation time.

In production, inference is commonly provided via an API by an [inference provider](./inference-provider.md) or run on self-hosted infrastructure; it is distinct from [training](./training.md), which changes the model to alter behavior (for example via [fine-tuning](./fine-tuning.md)).

## Examples

- Calling a chat completion API to generate an answer from a prompt
- Running a local [LLM](./llm.md) to generate text for an [agent](./agent.md)

## Synonyms

serving, model serving
