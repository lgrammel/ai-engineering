# Agent-Native Applications

Agent-native applications are the idea that software can be architected with [agents](../concepts/agent.md) as first-class citizens, where [tools](../concepts/tools.md) are atomic primitives and features are outcomes described in [prompts](../concepts/prompt.md) - achieved by an agent operating in a loop - rather than logic encoded in application code.

## Details

The architecture rests on five principles. Parity requires that the agent can achieve anything the user can do through the UI, through tools or combinations of tools. Granularity means tools are atomic primitives rather than workflow bundles; judgment about what to do belongs in the agent's reasoning, not baked into tool implementations. Composability follows from atomic tools and parity: new features can be created by writing new prompts without code changes. Emergent capability arises when agents compose tools in ways the developer did not anticipate, revealing latent demand (see [latent demand discovery](./latent-demand-discovery.md)). Improvement over time comes from accumulated context (state persists across sessions via context files) and prompt refinement at developer and user levels, without shipping code.

This inverts conventional application development. Instead of coding decision logic and having the agent execute it, the developer provides atomic tools and describes desired outcomes in prompts. The agent pursues those outcomes with judgment, handling edge cases and unexpected situations in the loop rather than requiring pre-coded branches. Changing behavior means editing prompts, not refactoring code. [Skills](../concepts/skill.md) are a natural fit: each skill is a prompt-based feature the [agent runtime](../concepts/agent-runtime.md) injects when relevant.

Domain-specific tools emerge from observed usage patterns rather than upfront design: start with pure primitives (bash, file operations, basic storage), observe what the agent actually needs, and add domain tools deliberately for vocabulary anchoring, guardrails, or efficiency. Domain tools represent one conceptual action from the user's perspective, but the underlying primitives remain available for edge cases. Operations can graduate from agent-orchestrated loops to optimized code when performance demands it, while preserving the agent's ability to trigger the optimized path and fall back to primitives.

Common approaches that fall short of agent-native include agent-as-router (using the agent only to dispatch to pre-built functions), request/response thinking (single-turn execution without a loop), workflow-shaped tools (bundling judgment into tool implementations), defensive tool design (over-constraining inputs in ways that prevent unanticipated compositions), and coding all edge-case handling into application logic rather than letting the agent handle them with judgment.

## Counterarguments

- Delegating judgment to the agent on every request trades predictability for flexibility. For production systems where consistent, auditable behavior matters (finance, healthcare, compliance), non-deterministic agent judgment is a liability rather than a feature. Many domains require that the same input always produces the same output, which agent loops cannot guarantee.
- The framing of coded edge-case handling as an anti-pattern ignores that deterministic branches are often a regulatory or business requirement, not a limitation of imagination. "Let the agent handle it" is not an acceptable answer when the handling must be documented, repeatable, and legally defensible.
- Atomic tools with full parity create a large, unsecured action space. The more capable the agent becomes (approaching full UI parity), the larger the [tool misuse](../threats/tool-misuse.md) and [prompt injection](../threats/prompt-injection.md) attack surface. The "defensive tool design" that the note dismisses as an anti-pattern is often a deliberate security constraint.

## Confidence

**Low.** The five principles are well-articulated as a design philosophy, but the counterarguments around predictability requirements, regulatory compliance, and the security implications of full tool parity substantially limit applicability. The note does not clearly delineate which use cases benefit from agent-native architecture versus which require deterministic, auditable behavior, making the idea overbroad as stated.

## External references

- https://every.to/guides/agent-native
