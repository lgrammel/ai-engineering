# Tool Execution Approval

Tool execution approval is a [human-in-the-loop](./human-in-the-loop.md) safety mechanism in [agent](./agent.md) systems where certain [tool](./tools.md) calls require explicit human confirmation before the [agent runtime](./agent-runtime.md) executes them, inserting a human review step into the agent's autonomous loop.

## Details

Approval gates are typically configured by risk level: low-risk or read-only tool calls (e.g., file reads, searches) may proceed automatically, while high-risk actions (e.g., file deletions, code execution, external API calls, financial transactions) are paused and presented to a human reviewer. The reviewer can approve, reject, or modify the proposed action before execution continues.

Tool execution approval is a primary defense against [tool misuse](../threats/tool-misuse.md) and [prompt injection](../threats/prompt-injection.md)-driven attacks, because it gives a human the opportunity to catch harmful tool calls before they take effect. However, it reduces agent autonomy and throughput, and its effectiveness degrades under [human approval fatigue exploitation](../threats/human-approval-fatigue-exploitation.md) attacks that exploit reviewer fatigue or cognitive overload.

A common calibration heuristic crosses stakes (low/high) with reversibility (easy/hard): low-stakes reversible actions (e.g., organizing files) can be auto-applied, low-stakes irreversible actions (e.g., publishing to a feed) warrant a quick confirmation, high-stakes reversible actions (e.g., code changes) benefit from a suggest-then-apply flow, and high-stakes irreversible actions (e.g., sending emails, financial transactions) require explicit approval.

## Examples

- An IDE-based [coding agent](./coding-agent.md) that requires user confirmation before executing shell commands or writing to files outside the current project.
- An agent runtime that automatically approves read-only database queries but pauses for human review before any write or delete operations.
- A deployment agent that requires explicit approval before pushing changes to production.

## Synonyms

tool approval, action confirmation, human approval gate
