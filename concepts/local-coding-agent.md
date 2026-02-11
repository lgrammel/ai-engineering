# Local Coding Agent

A [coding agent](./coding-agent.md) that runs within a developer's local environment - typically an IDE or terminal - sharing the same filesystem, shell, and tools as the developer.

## Details

Local coding agents typically operate through a [copilot interface](./copilot-interface.md) in a pair-programming model: the developer and agent share a single environment, with the developer steering edits, approving changes, and providing real-time feedback. This tight feedback loop makes local agents well-suited for work requiring human judgment - architectural decisions, complex debugging, ambiguous requirements, and exploratory coding.

Because the agent shares the developer's environment, it has immediate access to the local codebase, installed dependencies, and running processes. This eliminates setup friction but limits the agent to one developer's session at a time and requires that developer to have a working local environment configured.

## Examples

- Cursor agents (inline and background) operating on a local project inside the IDE.
- Claude Code, a CLI-based agent that works directly on the developer's machine.
- Windsurf, an IDE with integrated local coding agent capabilities.

## Synonyms

desktop coding agent, IDE coding agent, local agent
