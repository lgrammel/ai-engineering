# Skill Repository

A directory or registry that aggregates, indexes, and distributes [skills](./skill.md) for [AI agents](./agent.md). Skill repositories allow developers to discover, share, and install community-authored or vendor-provided skills across multiple [agent runtimes](./agent-runtime.md) and [coding agents](./coding-agent.md) using a single installation command.

## Details

Skill repositories typically track installation counts, surface trending or popular skills through leaderboards, and organize entries by category (e.g., frontend best practices, deployment, testing, marketing). Skills are often sourced from GitHub repositories and referenced by an `owner/repo` identifier. Installation pulls the skill's markdown files and supporting resources into a local project or user directory where the agent runtime can discover them.

Skill repositories serve a similar ecosystem function to package registries (npm, PyPI) but for procedural knowledge rather than executable code. They lower the barrier to sharing [context engineering](./context-engineering.md) best practices and enable a community-driven approach to extending agent capabilities without modifying the agents themselves. As a distribution vector, skill repositories are also a [supply chain attack](../threats/supply-chain-attack.md) surface - a malicious skill published to a public repository can inject harmful instructions or exfiltrate data once installed into an agent's workflow.

## Examples

- [skills.sh](https://skills.sh) - an open agent skills directory with a leaderboard, install CLI (`npx skills add <owner/repo>`), and support for agents including Claude Code, Cursor, Cline, Copilot, and others.
- [agentskills.io](https://agentskills.io) - a skill registry focused on the open Agent Skills standard.

## External references

- <https://skills.sh>
- <https://skills.sh/docs>
