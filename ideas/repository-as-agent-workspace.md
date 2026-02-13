# Repository as Agent Workspace

A git repository is a natural shared workspace for multiple [agents](../concepts/agent.md), where each agent operates on the checked-out filesystem as a [filesystem agent](../concepts/filesystem-agent.md) and git provides the coordination primitives - branches, commits, merges, diffs, pull requests - for their collaboration.

## Details

Today's [coding agents](../concepts/coding-agent.md) already treat repositories this way: one agent writes code on a branch, a review agent reads the diff, a security agent scans for vulnerabilities, a documentation agent updates docs to match changed APIs, and CI agents run tests. Each agent reads and writes the same repository, but git mediates their interactions through commits and branches rather than through explicit message passing or an orchestration layer. This makes the repository a form of [multi-agent system](../concepts/multi-agent-system.md) where coordination happens implicitly through artifacts rather than through direct inter-agent communication.

Git's existing primitives map well to multi-agent coordination concerns. Branches provide isolation so agents can work in parallel without stepping on each other. Commits create atomic checkpoints that other agents can review or build on. Pull requests serve as handoff points where one agent's output becomes another's input, with human review as an optional gate. Merge conflicts surface when agents make incompatible changes, and git's diff and blame tools give any agent (or human) visibility into what changed and who changed it. This artifact-based coordination is lower-friction than explicit message protocols because agents do not need to know about each other - they only need to know the repository.

The shift from single-agent to multi-agent repository use surfaces new challenges. Ordering and sequencing matter: a security agent scanning a branch before a coding agent has finished its changes produces incomplete results. Conflict resolution becomes more complex when multiple agents push changes to overlapping files. Trust boundaries blur because one agent's committed code, config changes, or dependency updates become part of another agent's context - a vector for cross-agent [context poisoning](../threats/context-poisoning.md) and [persistence attacks](../threats/persistence-attacks.md). [Agent checkpointing](../concepts/agent-checkpointing.md) and branch-based isolation help contain blast radius, but the fundamental challenge is that shared mutable state (the repository) creates implicit coupling between otherwise independent agents.

## Examples

- A coding agent opens a feature branch, a linting agent auto-fixes style issues on the same branch, and a review agent evaluates the combined diff before a human merges.
- A security agent continuously scans the main branch for vulnerabilities, while separate coding agents work on feature branches, with findings fed back as issues that other agents pick up.
- A documentation agent monitors merged pull requests and automatically updates API docs and changelogs based on code changes it reads from the repository.
- Multiple cloud [coding agents](../concepts/coding-agent.md) work on separate issues in parallel on isolated branches of the same repository, with an orchestration layer managing merge order and conflict resolution.
- A [dark software factory](./dark-software-factory.md) where implementation agents, test agents, and validation agents all operate on the same repository, with branches and commits serving as the handoff mechanism between writing code, running scenarios, and reporting satisfaction metrics.

## Counterarguments

- Git was designed for human collaboration patterns: infrequent commits, meaningful commit messages, linear review workflows. Agent-scale operations (thousands of micro-commits, parallel branch explosions, machine-generated diffs) may strain git's data model, performance characteristics, and tooling in ways that degrade rather than enhance coordination.
- Implicit coordination through shared mutable state is a known source of complexity in distributed systems. The note frames artifact-based coordination as "lower-friction" than explicit protocols, but decades of distributed systems experience suggest that implicit coupling through shared state produces harder-to-diagnose failures than explicit message passing. The absence of an orchestration layer is a feature only until coordination failures become difficult to trace.
- The trust model assumes that commit provenance is sufficient for security. In practice, a committed file carries no reliable signal about whether it was produced by a trusted agent, a compromised agent, or a [prompt injection](../threats/prompt-injection.md) payload that propagated through a code review agent. Git's authorship metadata is easily spoofed and does not provide the authentication guarantees that multi-agent trust requires.

## Confidence

**High.** Already emerging in practice with coding agents, linting agents, and review agents operating on shared repositories. The counterarguments about git scalability and implicit coupling are real engineering challenges but do not invalidate the pattern itself, which is observable in current production workflows.
