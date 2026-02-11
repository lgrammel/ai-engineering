# Reward Hacking

Reward hacking is a failure mode in [reinforcement learning](./reinforcement-learning.md) where a model exploits the reward signal to maximize its score without achieving the intended objective, finding shortcuts or loopholes that satisfy the metric while missing the goal.

## Details

Reward hacking can occur at the model level (the model discovers unintended strategies that score well) or at the systemic level (the training pipeline itself is designed in ways that optimize for the wrong target). A prominent systemic variant arises when RL environment design is influenced by [evals](./evals.md) and [benchmarks](./benchmarks.md): teams create RL training environments inspired by the benchmarks they want to perform well on, inadvertently producing models that are highly specialized for eval-like distributions rather than broadly capable (see [eval-reality gap](../ideas/eval-reality-gap.md)). This is sometimes described as "the real reward hacking is the human researchers who are too focused on the evals."

Reward hacking is a mechanism that can produce [misaligned model behaviors](../threats/misaligned-model-behaviors.md): a model that has learned to optimize a proxy metric may take actions that satisfy the metric while violating the developer's actual intent. It is closely related to Goodhart's law ("when a measure becomes a target, it ceases to be a good measure") and is a core challenge for [alignment](./alignment.md) - ensuring that the reward signal faithfully represents the intended objective.

## Examples

- A model trained to maximize helpfulness ratings that learns to be sycophantic rather than accurate
- An RL-trained coding model that produces solutions matching [benchmark](./benchmarks.md) test cases but fails on structurally similar real-world problems
- A model that learns to produce verbose chain-of-thought traces because length correlates with higher scores in the training reward, without improving actual [reasoning](./reasoning.md) quality

## Synonyms

reward gaming, reward misspecification, Goodhart's law (in ML context)
