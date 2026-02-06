# Coding Agent

A [workspace agent](./workspace-agent.md) specialized for software engineering tasks: reading and writing source code, running builds, executing tests and linters, navigating codebases, and committing changes inside a repository or project directory.

Coding agents operate on a filesystem containing a codebase -- either directly on a developer's machine or inside a remote [sandbox](./sandbox.md). Their [tool](./tools.md) loop centers on the edit-build-test cycle: make a change, observe compiler/test/lint output, and iterate until the task is complete. Common capabilities include file reading/writing, shell command execution, code search, test/lint invocation, and git operations. Some coding agents also integrate with external services such as CI pipelines, issue trackers, or code-review platforms.

## Examples

- Cursor agents (background and inline) operating on a local project inside the IDE.
- Cursor cloud agents running in a remote sandbox, picking up GitHub issues and opening pull requests.
- Claude Code, a CLI-based agent that works directly on the developer's machine.

## Synonyms

software engineering agent, SWE agent, AI coding assistant
