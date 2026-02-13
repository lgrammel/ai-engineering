# Agent Hosting Platform

A hosted platform for deploying, running, and managing [agents](./agent.md) in production - handling containerized deployment, task lifecycle, versioning, filesystem orchestration, and operational concerns (secrets, logs, environments) so teams ship agents without building custom infrastructure.

## Details

Agent hosting platforms manage the operational lifecycle of the [agent runtime](./agent-runtime.md), which is the software layer executing the agent loop. They build on [sandbox services](./sandbox.md), which provide isolated execution environments. Where a sandbox service provisions an environment and an inference provider handles model calls, an agent hosting platform manages deployment, version management, task routing, filesystem mounting, and production tooling (rollbacks, preview environments, [observability](./observability.md)).

Common capabilities include containerized agent packaging (typically Docker), event-based task lifecycle handlers (create/event/complete), per-task filesystem configuration with read/write controls, in-flight task migration across agent versions, [agent checkpointing](./agent-checkpointing.md), built-in messaging layers with persistence and streaming, and multi-tenant namespace isolation for B2B use cases.

## Examples

- [Terminal Use](https://www.terminaluse.com/) - purpose-built hosting for long-running agents that need filesystem access, with namespace-based multi-tenancy and Vercel AI SDK integration.
- General-purpose compute platforms (Modal, Render, Railway) adapted for agent workloads with container orchestration and persistent storage.

## Synonyms

agent hosting, agent deployment platform
