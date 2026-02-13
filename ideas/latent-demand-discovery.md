# Latent Demand Discovery

Latent demand discovery is the idea that [agent](../concepts/agent.md)-native applications can discover what features to build by observing what users ask the agent to do, inverting traditional product development from imagine-build-validate into build a capable foundation, observe, and formalize.

## Details

When an application gives an agent atomic [tools](../concepts/tools.md) and parity with the UI, users inevitably ask for things the developer did not anticipate. The agent either composes tools to accomplish the request or fails, revealing a gap. Both outcomes are signal: successful unanticipated requests indicate patterns worth optimizing with domain-specific tools or dedicated prompts, and failed requests expose missing tools or parity gaps that constrain the agent's usefulness.

Over time, the developer can add domain tools for common patterns (making them faster and more reliable), create dedicated prompts for frequent requests (making them more discoverable), and remove tools that are not being used. The agent becomes a research instrument for understanding what users actually need, grounded in observed behavior rather than upfront feature speculation.

This changes the product development feedback loop. Traditional development requires imagining what users want, building it, and seeing if the guess was right. Agent-native development starts with a capable foundation and learns from what emerges, with the agent mediating between user intent and system capability.

## Counterarguments

- Observing what users ask an agent to do conflates demand with curiosity. Users experiment with novel interfaces, and the requests an agent receives during early adoption may not reflect sustained needs. Formalizing features based on exploratory usage risks building for novelty rather than durable demand.
- The signal quality depends on the agent being capable enough to attempt (or clearly fail at) the requested task. If the agent silently produces poor results rather than clearly failing, the developer gets a false positive - apparent success that masks an unmet need rather than revealing one.
- This approach favors incremental feature discovery within the existing tool space. It is less effective at surfacing needs that require fundamentally new tools or capabilities the agent cannot approximate by composing existing primitives.

## Confidence

**Medium.** A clean corollary of agent-native applications with a useful inversion of the product development feedback loop. The concept is sound as a heuristic, but depends on the agent being capable enough to produce meaningful signal, which limits applicability to mature agent-native systems with sufficiently capable underlying models.

## External references

- https://every.to/guides/agent-native
