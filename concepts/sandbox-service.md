# Sandbox Service

Also called: sandbox-as-a-service, remote sandbox.

A hosted service (usually exposed via an API) that provisions and manages sandboxes on demand and provides primitives to run commands/code, read/write files, and stream logs.

Sandbox services typically add lifecycle management (create/destroy, pooling), prebuilt images/templates, workspace mounting/sync, secrets injection, network controls, timeouts/quotas, snapshotting, and observability hooks.

Why it matters: enables safer, scalable tool execution for agents (including workspace access and filesystem tools) without running untrusted code directly on your own application servers.

Examples: E2B, Vercel Sandbox.
