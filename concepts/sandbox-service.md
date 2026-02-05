# Sandbox Service

Synonyms: sandbox-as-a-service, remote sandbox.

A hosted service (usually exposed via an API) that provisions and manages [sandboxes](./sandbox.md) on demand and provides primitives to run commands/code, read/write files, and stream logs.

Sandbox services typically add lifecycle management (create/destroy, pooling), prebuilt images/templates, workspace mounting/sync, secrets injection, network controls, timeouts/quotas, snapshotting, and [observability](./observability-tools.md) hooks.

Examples: E2B, Vercel Sandbox.
