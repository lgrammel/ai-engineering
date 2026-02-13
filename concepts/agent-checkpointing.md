# Agent Checkpointing

Capturing a snapshot of an [agent's](./agent.md) execution state - typically filesystem contents, conversation history, and tool outputs - at a point in time, enabling resume, rollback, or forking from that snapshot.

## Details

Checkpointing is distinct from [agent memory](./agent-memory.md), which persists selected information across sessions; a checkpoint preserves the full execution context at a specific moment. [Agent runtimes](./agent-runtime.md) manage the state being checkpointed, while [sandbox services](./sandbox.md) often provide the underlying snapshotting primitives (filesystem snapshots, container state capture).

A key application is trajectory forking: branching from a checkpoint to test alternative tool calls, prompts, or recovery strategies without restarting from scratch. This supports iterative debugging (fork from the last good step, fix, and resume), A/B evaluation of agent strategies on identical state, and production recovery (roll back to a known-good checkpoint after a bad tool execution).

For multi-step tasks, checkpointing can be combined with task-level progress tracking - recording individual subtask status (pending, in-progress, completed, failed, skipped) - so that a resumed session knows which steps were completed and can continue from the first incomplete task rather than replaying the entire sequence.

## Examples

- Snapshotting an agent's workspace filesystem and conversation history after each tool call, allowing rollback if a subsequent step corrupts files.
- Forking from a checkpoint to test two different code-generation approaches on the same repository state.
- An [agent hosting platform](./agent-hosting-platform.md) preserving checkpoints across version migrations so in-flight tasks resume cleanly on updated agent code.
