# Agent Runtime

An agent runtime is the software layer that executes an [agent](./agent.md) loop around an [LLM](./llm.md): it assembles inputs from state/[context](./context.md), interprets model outputs (messages and [tool](./tools.md) calls), runs tools, updates state, and stops when a termination condition is met.

Agent runtimes often handle orchestration concerns such as tool routing, retries, concurrency, memory/persistence, timeouts/cancellation, and integration with a [sandbox](./sandbox.md) and [observability tools](./observability-tools.md).

## Examples

- A local agent runner embedded in an IDE that can edit files and run shell commands (a [workspace agent](./workspace-agent.md)).
- A hosted service that executes agent workflows and manages tool credentials and rate limits.
- An agent framework/runtime library that provides a state machine, tool calling, and checkpointing.

## Synonyms

agent runner, agent orchestrator, agent engine
