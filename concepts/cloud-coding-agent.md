# Cloud Coding Agent

A [coding agent](./coding-agent.md) that runs on remote cloud infrastructure rather than a developer's local machine, operating asynchronously in its own [sandboxed](./sandbox.md) environment with a shell, editor, and browser.

## Details

Cloud coding agents receive tasks through various entry points - chat interfaces, Slack, issue trackers, APIs, or CLIs - and produce outputs (typically pull requests) that humans review. They are typically managed by an [agent hosting platform](./agent-hosting-platform.md) that handles deployment, task routing, and operational concerns. This delegation model contrasts with the synchronous pair-programming model of [local coding agents](./local-coding-agent.md): instead of a developer steering the agent in real time, the developer describes a task and reviews the result later. Multiple cloud agent sessions can run in parallel, shifting the bottleneck from developer availability to review capacity.

Because cloud coding agents connect to repositories, CI pipelines, and deployment infrastructure at the org level, they are accessible to non-developers (PMs, designers, support staff) who can trigger tasks without local tooling or Git knowledge. Integration with [MCP](./mcp.md) servers extends their reach to error tracking, monitoring, databases, and other engineering infrastructure. Teams often encode recurring workflows into [skills](./skill.md) (sometimes called playbooks) so anyone in the organization can trigger a standardized process.

Cloud coding agents are well-suited to tasks that are quick to verify and well-scoped: targeted refactors, bug fixes with clear reproduction steps, test coverage, dependency upgrades, CVE remediation, documentation maintenance, and CI failure investigation. They are less effective for large tasks with unclear scope, visual design judgment, or work requiring extensive manual validation.

## Examples

- Devin, a cloud-native coding agent by Cognition that provides its own IDE, shell, and browser in a remote environment.
- OpenAI Codex, which runs tasks in isolated cloud environments and produces pull requests.
- Cursor Background Agents, which execute asynchronously in cloud VMs while the developer continues other work.
- Google Jules, which generates implementation plans and executes them in a cloud sandbox.

## Synonyms

cloud agent, remote coding agent, async coding agent
