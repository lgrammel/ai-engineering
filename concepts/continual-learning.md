# Continual Learning

Continual learning is a [training](./training.md) paradigm where a model learns incrementally from new data or experiences over time, updating its weights rather than being trained once and frozen.

## Details

This is distinct from [in-context learning](./in-context-learning.md) (which adapts behavior within a single context window without weight updates) and from [agent memory](./agent-memory.md) (which persists information across sessions in external stores without changing model weights). Continual learning changes what the model knows at the weight level, enabling it to accumulate skills and domain knowledge through ongoing experience.

A key challenge in continual learning is catastrophic forgetting: updating weights on new data can degrade previously learned capabilities. In practice, continual learning occupies a middle ground between [pretraining](./pretraining.md) (broad, one-time training on large data) and [fine-tuning](./fine-tuning.md) (narrow, one-time adaptation), adding a temporal dimension where the model improves through sustained interaction with its deployment environment.

## Examples

These examples illustrate the continual learning paradigm; in practice, most production LLMs are still trained in discrete runs rather than updated continuously, due to catastrophic forgetting and infrastructure constraints.

- A deployed model that updates its weights based on user feedback and corrections over weeks of operation
- An [agent](./agent.md) that accumulates domain expertise through on-the-job experience, becoming increasingly effective in its specific role
- A model that learns new tool APIs and conventions as they are released, without requiring full retraining

## Synonyms

online learning, lifelong learning, incremental learning
