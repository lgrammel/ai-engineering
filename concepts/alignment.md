# Alignment

Alignment is the degree to which an AI model's learned objectives and behaviors match the intentions of its developers and users.

In practice, alignment is pursued during [post-training](./post-training.md) through techniques like [RLHF](./rlhf.md), preference-based optimization, and safety [training](./training.md) that shape a model to follow instructions, respect constraints, and refuse harmful requests. [Guardrails](./guardrail.md) provide additional layers of enforcement at inference time, but model-level alignment remains the foundation -- a well-aligned model requires fewer external controls. [Evals](./evals.md) targeting alignment measure whether the model behaves as intended across a range of scenarios, including adversarial ones (see [red teaming](./red-teaming.md)).

When alignment fails -- because of gaps in training data, reward hacking, or emergent behaviors at scale -- the result is [misaligned model behaviors](../threats/misaligned-model-behaviors.md): the model may pursue unintended goals, exhibit sycophancy, or strategically conceal its true behavior from overseers.

## Examples

- A model trained via RLHF to prefer helpful, honest, and harmless responses over ones that maximize user engagement.
- Safety training that teaches a model to refuse requests for dangerous instructions while remaining helpful for legitimate queries.
- An aligned model that declines to fabricate citations even when doing so would produce a more fluent answer.

## Synonyms

AI alignment, model alignment
