# Coding Agent

A [filesystem agent](./filesystem-agent.md) specialized for software engineering tasks: reading and writing source code, running builds, executing tests and linters, navigating codebases, and committing changes inside a repository or project directory.

## Details

Coding agents operate on a filesystem containing a codebase - either directly on a developer's machine or inside a remote [sandbox](./sandbox.md). Their [tool](./tools.md) loop centers on the edit-build-test cycle: make a change, observe compiler/test/lint output, and iterate until the task is complete. Common capabilities include file reading/writing, [shell](./shell-tool.md) command execution, code search, test/lint invocation, and git operations. Some coding agents also integrate with external services such as CI pipelines, issue trackers, or code-review platforms.

Coding agents are commonly extended with [skills](./skill.md) - reusable instruction sets that teach the agent project-specific conventions, workflows, or domain knowledge. Skills let teams codify practices like code-review checklists, deployment procedures, or API design patterns so the agent applies them consistently. Because coding agents have broad write access and install dependencies, they are particularly susceptible to [supply chain attack](../threats/supply-chain-attack.md) (malicious packages or tools) and [persistence attacks](../threats/persistence-attacks.md) (backdoors planted in source code or CI configuration).

## Local vs cloud deployment

Local coding agents run within a developer's environment - typically an IDE or terminal - sharing the same filesystem, [shell](./shell-tool.md), and tools as the developer. They operate through a [copilot interface](./copilot-interface.md) in a pair-programming model: the developer and agent share a single environment, with the developer steering edits, approving changes, and providing real-time feedback. This tight feedback loop makes local agents well-suited for work requiring human judgment - architectural decisions, complex debugging, ambiguous requirements, and exploratory coding. Because the agent shares the developer's environment, it has immediate access to the local codebase, installed dependencies, and running processes, but runs unsandboxed with the developer's full permissions, relying on [human-in-the-loop](./human-in-the-loop.md) approval as the primary safety mechanism.

Cloud coding agents run on remote infrastructure in their own [sandboxed](./sandbox.md) environments, managed by an [agent hosting platform](./agent-hosting-platform.md). They receive tasks through chat interfaces, Slack, issue trackers, APIs, or CLIs and produce outputs (typically pull requests) that humans review. This delegation model contrasts with the local pair-programming model: the developer describes a task and reviews the result later. Multiple cloud agent sessions can run in parallel, shifting the bottleneck from developer availability to review capacity. Because cloud coding agents connect to repositories, CI pipelines, and deployment infrastructure at the org level, they are accessible to non-developers (PMs, designers, support staff) who can trigger tasks without local tooling or Git knowledge. Integration with [MCP](./mcp.md) servers extends their reach to error tracking, monitoring, databases, and other engineering infrastructure. Teams often encode recurring workflows into [skills](./skill.md) (sometimes called playbooks) so anyone in the organization can trigger a standardized process. Cloud coding agents are well-suited to tasks that are quick to verify and well-scoped: targeted refactors, bug fixes with clear reproduction steps, test coverage, dependency upgrades, CVE remediation, documentation maintenance, and CI failure investigation.

## Code review agents

Code review agents are coding agents specialized for automated review of code changes, typically pull requests. They analyze diffs, detect bugs and style violations, organize changes for readability, and surface relevant context from the broader codebase.

Code review agents become increasingly important as cloud coding agents generate more pull requests in parallel - the bottleneck shifts from writing code to reviewing it. Automated review helps prevent rubber-stamping or accumulating review debt by catching common issues before a human reviewer sees the change, serving as a mitigation against [approval fatigue exploitation](../threats/approval-fatigue-exploitation.md). A code review agent can run on the same cloud infrastructure as the coding agent that produced the change, creating a feedback loop where generated code is automatically screened before human review.

## Examples

- Cursor agents (background and inline) operating on a local project inside the IDE.
- Claude Code, a CLI-based agent that works directly on the developer's machine.
- Devin, a cloud-native coding agent by Cognition that provides its own IDE, shell, and browser in a remote environment.
- Cursor Background Agents, which execute asynchronously in cloud VMs while the developer continues other work.
- Google Jules, which generates implementation plans and executes them in a cloud sandbox.
- Devin Review, which performs automated PR analysis and provides codebase-aware feedback (code review agent).
- AI-powered review bots that comment on pull requests with bug detection, security checks, and style suggestions (code review agent).

## Synonyms

software engineering agent, SWE agent, AI coding assistant, local coding agent, cloud coding agent, remote coding agent, desktop coding agent, IDE coding agent, code review agent
