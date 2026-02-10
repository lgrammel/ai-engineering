# Coding Agent

A [workspace agent](./workspace-agent.md) specialized for software engineering tasks: reading and writing source code, running builds, executing tests and linters, navigating codebases, and committing changes inside a repository or project directory.

Coding agents operate on a filesystem containing a codebase -- either directly on a developer's machine or inside a remote [sandbox](./sandbox.md). Their [tool](./tools.md) loop centers on the edit-build-test cycle: make a change, observe compiler/test/lint output, and iterate until the task is complete. Common capabilities include file reading/writing, shell command execution, code search, test/lint invocation, and git operations. Some coding agents also integrate with external services such as CI pipelines, issue trackers, or code-review platforms.

Coding agents are commonly extended with [skills](./skill.md) -- reusable instruction sets that teach the agent project-specific conventions, workflows, or domain knowledge. Skills let teams codify practices like code-review checklists, deployment procedures, or API design patterns so the agent applies them consistently. Because coding agents have broad write access and install dependencies, they are particularly susceptible to [supply chain compromise](../threats/supply-chain-compromise.md) (malicious packages or tools) and [persistence attacks](../threats/persistence-attacks.md) (backdoors planted in source code or CI configuration).

## Examples

- Cursor agents (background and inline) operating on a local project inside the IDE.
- Cursor cloud agents running in a remote sandbox, picking up GitHub issues and opening pull requests.
- Claude Code, a CLI-based agent that works directly on the developer's machine.

## Synonyms

software engineering agent, SWE agent, AI coding assistant
