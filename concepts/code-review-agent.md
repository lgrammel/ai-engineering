# Code Review Agent

A [coding agent](./coding-agent.md) specialized for automated review of code changes, typically pull requests. Code review agents analyze diffs, detect bugs and style violations, organize changes for readability, and surface relevant context from the broader codebase.

## Details

Code review agents become increasingly important as cloud [coding agents](./coding-agent.md) generate more pull requests in parallel - the bottleneck shifts from writing code to reviewing it. Automated review helps prevent rubber-stamping or accumulating review debt by catching common issues before a human reviewer sees the change, serving as a mitigation against [approval fatigue exploitation](../threats/approval-fatigue-exploitation.md). A code review agent can run on the same cloud infrastructure as the coding agent that produced the change, creating a feedback loop where generated code is automatically screened before human review.

## Examples

- Devin Review, which performs automated PR analysis and provides codebase-aware feedback.
- AI-powered review bots that comment on pull requests with bug detection, security checks, and style suggestions.
- An agent that reorganizes diffs logically and allows reviewers to ask questions about changes with full codebase context.
