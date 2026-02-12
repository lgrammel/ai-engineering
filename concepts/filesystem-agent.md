# Filesystem Agent

An [agent](./agent.md) that operates on a persistent filesystem (local or inside a remote [sandbox](./sandbox.md)) and uses [tools](./tools.md) to read/write files, run [shell](./shell-tool.md) commands, and inspect outputs as it iterates.

## Details

Filesystem agents are common in IDE and coding workflows where multi-step tasks depend on accumulating changes in a repository or project directory over time. A [coding agent](./coding-agent.md) is a specialized filesystem agent focused on software engineering tasks. Their iterative access to project files and search tools makes filesystem agents a natural fit for [agentic RAG](./agentic-rag.md), where retrieval queries are refined across multiple tool-loop iterations.

When multiple filesystem agents share the same repository, git provides coordination primitives (branches, commits, merges) that let them collaborate without explicit message passing - each agent reads and writes the checked-out filesystem while git mediates their interactions (see [repository as agent workspace](../ideas/repository-as-agent-workspace.md)).

Because filesystem agents operate on persistent project state, they are natural hosts for [skills](./skill.md) - modular instruction sets stored alongside the workspace (e.g., in project directories) that the agent runtime discovers and loads into context when relevant. This creates a self-modifying dynamic: the agent can read and modify files that influence its own behavior, including skill files, configuration files, and `.env` files. A compromised workspace can alter the agent's instructions, and a compromised agent can alter the workspace in ways that persist beyond the current session. Their write access to persistent state makes filesystem agents susceptible to [persistence attacks](../threats/persistence-attacks.md) where a compromised session plants artifacts that survive beyond the current run.

## Examples

- An IDE-integrated agent that edits project files and runs tests/linters via [shell](./shell-tool.md) commands.
- A remote sandboxed coding agent that clones a repo, makes commits, and executes build steps.

## Synonyms

workspace agent
