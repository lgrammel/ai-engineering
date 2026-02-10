# Generalization

Generalization is a model's ability to perform correctly on inputs, tasks, or distributions not seen during [training](./training.md), rather than merely reproducing patterns from its training data.

## Details

Current [LLMs](./llm.md) generalize differently from humans, with surprising breadth in some transfer domains but pronounced brittleness in others. A model can score well on hard [evals](./evals.md) while failing at basic real-world tasks that require flexible application of the same underlying skills -- for example, alternating between two bugs when asked to fix code. This gap between benchmark performance and robust real-world capability is distinct from raw ability: the model may possess the knowledge but lack the reliable, context-independent transfer that characterizes human competence.

Humans exhibit robust generalization even in domains without evolutionary priors (math, coding), suggesting that human learning relies on some fundamental mechanism beyond large-scale data exposure. [Pretraining](./pretraining.md) achieves breadth through sheer data volume -- the model has seen so many patterns that coverage partially substitutes for transfer, though this coverage also enables forms of compositional generalization that are not yet well understood. [Reinforcement learning](./reinforcement-learning.md) can further narrow generalization when RL environments are designed to target specific [benchmarks](./benchmarks.md), producing models that are highly specialized rather than broadly capable (see [reward hacking](./reward-hacking.md)). Fragile generalization is also a core challenge for [alignment](./alignment.md): a model's ability to learn and reliably optimize human values depends on generalizing those values to novel situations.

## Examples

- A model that achieves superhuman scores on competitive programming [benchmarks](./benchmarks.md) but cannot reliably maintain a real codebase
- A model that correctly solves math problems from benchmark distributions but fails on structurally similar problems with unfamiliar framing
- A human teenager learning to drive in 10 hours, generalizing from minimal experience to a vast range of road situations
