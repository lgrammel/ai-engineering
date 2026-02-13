# Agent UX

Agent UX is the idea that software libraries and [tools](../concepts/tools.md) designed for AI [agents](../concepts/agent.md) benefit from being shaped around "desire paths" - observing what agents naturally try to do and making those patterns work, rather than relying solely on documentation.

## Details

In practice, this means watching how agents attempt to use an API, CLI, or library (including [hallucinated](../concepts/hallucination.md) commands, flags, and function names), then implementing whatever they repeatedly try. An interface that matches agent expectations needs less documentation loaded into [context](../concepts/context.md), saving [tokens](../concepts/token.md) at [inference](../concepts/inference.md) time.

This has a dual-use relationship with [hallucination exploitation](../threats/hallucination-exploitation.md): the same predictability that lets a tool author make hallucinated interfaces real also lets an attacker register hallucinated package names and serve compromised artifacts. The underlying phenomenon - that model outputs are consistent enough to anticipate - is neutral; the intent determines whether it is a design technique or an attack vector.

## Examples

- A CLI tool whose subcommands, flags, and aliases were iteratively added based on what agents hallucinated when trying to use it, until nearly every agent guess is correct.
- A software library whose function names, parameter orders, and module structure mirror the conventions agents expect from similar well-known libraries.
- Naming a tool's operations to match the verbs and patterns agents already use for similar tasks (e.g., mirroring git's command structure).

## Counterarguments

- Designing interfaces around what agents hallucinate optimizes for current model biases rather than good interface design. As models improve and hallucination patterns shift, interfaces shaped by today's model quirks may become misaligned with tomorrow's agent expectations, creating maintenance debt.
- The approach may entrench the conventions of dominant models. If most agents hallucinate git-like commands because of training data distribution, tools that adopt those conventions lock in an ecosystem shaped by the training data of a few frontier models rather than by interface quality.
- Hallucination-driven design is only feasible when model outputs are consistent enough to form stable desire paths. For less common tools or domains where model behavior is unpredictable, the signal-to-noise ratio of hallucinated patterns may be too low to guide useful design decisions.

## Confidence

**Medium.** The desire-path principle is practical and actionable for tool designers today. The dual-use insight (same predictability enables both good UX and hallucination exploitation) is sharp. However, the approach may be transient - if model hallucination patterns shift significantly across generations, interfaces shaped by today's model quirks may need rework.

## External references

- https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b
