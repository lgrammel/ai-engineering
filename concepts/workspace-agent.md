# Workspace Agent

An [agent](./agent.md) that operates on a longer-lived workspace state (typically a filesystem in a local or remote [sandbox](./sandbox.md)) and uses tools to read/write files, run commands (e.g. shell), and inspect outputs as it iterates.

Workspace agents are common in IDE and coding workflows where multi-step tasks depend on accumulating changes in a repository or project directory over time. A [coding agent](./coding-agent.md) is a specialized workspace agent focused on software engineering tasks.

Because workspace agents operate on persistent project state, they are natural hosts for [skills](./skill.md) -- modular instruction sets stored alongside the workspace (e.g., in project directories) that the agent runtime discovers and loads into context when relevant. Their write access to persistent state also makes them susceptible to [persistence attacks](../threats/persistence-attacks.md) where a compromised session plants artifacts that survive beyond the current run.

## Examples

- An IDE-integrated agent that edits project files and runs tests/linters via shell commands.
- A remote sandboxed coding agent that clones a repo, makes commits, and executes build steps.
