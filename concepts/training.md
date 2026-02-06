# Training

Training is the process of learning or updating a model's parameters (weights) from data by optimizing an objective (loss), typically using gradient-based methods such as backpropagation.

In [LLM](./llm.md) systems, training commonly optimizes next-[token](./token.md) prediction over sequences produced by a [tokenizer](./tokenizer.md).

Training includes large-scale [pretraining](./pretraining.md) as well as further training such as [fine-tuning](./fine-tuning.md); the result of training is an [LLM](./llm.md) that can later be run during [inference](./inference.md).

## Examples

- [Pretraining](./pretraining.md) an [LLM](./llm.md) on large corpora to learn general language patterns
- Instruction fine-tuning a base model to follow a specific format or policy

## Synonyms

model training, optimization
