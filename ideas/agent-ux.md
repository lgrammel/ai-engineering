# Agent UX

Agent UX is the idea that software libraries and [tools](../concepts/tools.md) designed for AI [agents](../concepts/agent.md) benefit from being shaped around "desire paths" - observing what agents naturally try to do and making those patterns work, rather than relying solely on documentation.

## Details

In practice, this means watching how agents attempt to use an API, CLI, or library (including [hallucinated](../concepts/hallucination.md) commands, flags, and function names), then implementing whatever they repeatedly try. An interface that matches agent expectations needs less documentation loaded into [context](../concepts/context.md), saving [tokens](../concepts/token.md) at [inference](../concepts/inference.md) time.

This has a dual-use relationship with [hallucination exploitation](../threats/hallucination-exploitation.md): the same predictability that lets a tool author make hallucinated interfaces real also lets an attacker register hallucinated package names and serve compromised artifacts. The underlying phenomenon - that model outputs are consistent enough to anticipate - is neutral; the intent determines whether it is a design technique or an attack vector.

## Examples

- A CLI tool whose subcommands, flags, and aliases were iteratively added based on what agents hallucinated when trying to use it, until nearly every agent guess is correct.
- A software library whose function names, parameter orders, and module structure mirror the conventions agents expect from similar well-known libraries.
- Naming a tool's operations to match the verbs and patterns agents already use for similar tasks (e.g., mirroring git's command structure).

## External references

- https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b
