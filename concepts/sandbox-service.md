# Sandbox Service

A sandbox service is a hosted service (usually exposed via an API) that provisions and manages [sandboxes](./sandbox.md) on demand and provides primitives to run commands/code, read/write files, and stream logs.

Sandbox services typically add lifecycle management (create/destroy, pooling), prebuilt images/templates, workspace mounting/sync, secrets injection, network controls, timeouts/quotas, snapshotting, and [observability](./observability.md) hooks.

They are commonly used to run remote [workspace agents](./workspace-agent.md) that need a longer-lived project directory and controlled tool execution.

## Examples

- [E2B](https://e2b.dev/)
- [Vercel Sandbox](https://vercel.com/docs/vercel-sandbox)

## Synonyms

sandbox-as-a-service, remote sandbox
