# Sandbox

A sandbox is an isolated execution environment for running code (often model-generated or user-supplied) with controlled access to the host system: filesystem/workspace, network, secrets, and compute.

## Details

In [agent](./agent.md) systems, a sandbox is where tools run ([shell](./shell-tool.md) commands, [code execution tools](./code-execution-tool.md), file edits) so the agent can operate on a filesystem (often as a [filesystem agent](./filesystem-agent.md)) without giving it full host privileges.

Typical controls: per-sandbox filesystem (ephemeral or mounted workspace), read/write allowlists, network egress rules, CPU/memory/time limits, process isolation, and audit logs. These controls are a key mitigation for [unauthorized code execution](../threats/unauthorized-code-execution.md) and help limit the blast radius of [tool misuse](../threats/tool-misuse.md) and [persistence attacks](../threats/persistence-attacks.md).

## Sandbox services

A sandbox service is a hosted service (usually exposed via an API) that provisions and manages sandboxes on demand and provides primitives to run commands/code, read/write files, and stream logs. Sandbox services typically add lifecycle management (create/destroy, pooling), prebuilt images/templates, workspace mounting/sync, secrets injection, network controls, timeouts/[quotas](./quota-management.md), snapshotting, and [observability](./observability.md) hooks. They are commonly used to run remote [filesystem agents](./filesystem-agent.md) that need a longer-lived project directory and controlled tool execution.

## Examples

- Docker-based local sandboxes
- Firecracker microVMs
- WASM runtimes
- In-memory language interpreters
- [E2B](https://e2b.dev/) (sandbox service)
- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox) (sandbox service)

## Synonyms

execution sandbox, agent sandbox, sandbox-as-a-service, remote sandbox
