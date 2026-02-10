# Agent Memory

Agent memory is the mechanism by which an [agent](./agent.md) persists information across sessions or beyond the scope of a single [context](./context.md) window, allowing it to recall prior interactions, learned facts, or user preferences in future runs.

Memory is distinct from context (which is assembled per request): memory is written to a durable store (database, file, vector store, or dedicated memory service) during one session and retrieved into context during a later session. The [agent runtime](./agent-runtime.md) typically manages memory read/write operations, and [context engineering](./context-engineering.md) determines how recalled memories are selected, ranked, and formatted before injection into the [prompt](./prompt.md).

Because memory persists across sessions and is typically treated as trusted input, it is a specific attack surface for [context poisoning](../threats/context-poisoning.md) (an attacker writes malicious entries that influence future agent behavior) and [persistence attacks](../threats/persistence-attacks.md) (compromised memory survives session resets). Mitigations include input validation before writes, periodic auditing of memory stores, and treating recalled memories as untrusted content.

## Examples

- An agent that stores a summary of each conversation and loads relevant summaries at the start of new sessions.
- A coding agent that remembers project-specific conventions and preferences across work sessions.
- A customer-support agent that recalls a user's prior issues and resolutions.

## Synonyms

long-term memory, persisted memory, agent persistence
