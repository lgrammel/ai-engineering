# Reinforcement Learning

Reinforcement learning (RL) is a [training](./training.md) paradigm where a model learns to select actions that maximize cumulative reward through trial-and-error interaction with an environment, rather than learning from labeled examples.

## Details

In the context of [LLMs](./llm.md), RL is primarily applied during [post-training](./post-training.md) to shape model behavior using reward signals. [RLHF](./rlhf.md) uses a reward model trained on human preference data, and is a core mechanism for [alignment](./alignment.md) and [instruction following](./instruction-following.md). RL has also been used to train [reasoning](./reasoning.md) capabilities, where the reward signal comes from verifiable outcomes (e.g., correct answers to math or code problems) rather than human preferences. RL environment design introduces significant degrees of freedom: choosing which tasks and distributions to train on shapes what the model learns, and environments inspired by [evals](./evals.md) can inadvertently produce [reward hacking](./reward-hacking.md).

## Synonyms

RL
