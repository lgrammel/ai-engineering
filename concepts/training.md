# Training

Training is the process of learning or updating a model's parameters (weights) from data by optimizing an objective (loss), typically using gradient-based methods such as backpropagation.

In [LLM](./llm.md) systems, training commonly optimizes next-[token](./token.md) prediction over sequences produced by a [tokenizer](./tokenizer.md).

Training includes large-scale [pretraining](./pretraining.md) as well as [post-training](./post-training.md) phases such as [fine-tuning](./fine-tuning.md) and preference-based alignment; the result of training is an [LLM](./llm.md) that can later be run during [inference](./inference.md). Capabilities like [tool](./tools.md) calling and [instruction following](./instruction-following.md) are established or refined during training.

## Examples

- [Pretraining](./pretraining.md) an [LLM](./llm.md) on large corpora to learn general language patterns
- Instruction fine-tuning a base model to improve [instruction following](./instruction-following.md) (for example a specific format or policy)
- [Fine-tuning](./fine-tuning.md) on [tool](./tools.md)-call datasets to teach structured tool calling (generating well-formed calls and incorporating results)

## Synonyms

model training
