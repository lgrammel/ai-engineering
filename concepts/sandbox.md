# Sandbox

An isolated execution environment for running code (often model-generated or user-supplied) with controlled access to the host system: filesystem/workspace, network, secrets, and compute.

In [agent](./agent.md) systems, a sandbox is where tools run (shell commands, [code execution tools](./code-execution-tool.md), file edits) so the agent can operate on a workspace (often as a [workspace agent](./workspace-agent.md)) without giving it full host privileges.

Typical controls: per-sandbox filesystem (ephemeral or mounted workspace), read/write allowlists, network egress rules, CPU/memory/time limits, process isolation, and audit logs. These controls are a key mitigation for [unauthorized code execution](../threats/unauthorized-code-execution.md) and help limit the blast radius of [tool misuse](../threats/tool-misuse.md).

## Examples

- Docker-based local sandboxes
- Firecracker microVMs
- WASM runtimes
- In-memory language interpreters

## Synonyms

execution sandbox, agent sandbox
