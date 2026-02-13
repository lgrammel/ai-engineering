# Cloud Coding Agent

A cloud [coding agent](../concepts/coding-agent.md) system runs autonomously in a remote [sandboxed](../concepts/sandbox.md) environment, receiving tasks through issue trackers, chat interfaces, or APIs, and producing pull requests for human review - shifting the trust model from real-time approval of individual actions to post-hoc review of committed output.

## Details

Where [local coding agents](./local-coding-agent.md) operate synchronously under a developer's identity with no sandbox boundary, cloud coding agents invert both properties: they run inside ephemeral sandboxed environments managed by an [agent hosting platform](../concepts/agent-hosting-platform.md), and they execute autonomously without real-time [human-in-the-loop](../concepts/human-in-the-loop.md) oversight. The developer describes a task (via issue, message, or API call) and reviews the result later, typically as a pull request subject to standard code review.

This delegation model enables parallelism - multiple agent sessions can run concurrently across different tasks - but moves the review bottleneck from real-time action approval to PR review throughput. When an organization runs many cloud agent sessions, reviewers face the same fatigue dynamics as local agent users, except the review surface is entire PRs rather than individual tool calls.

Cloud coding agents typically connect to org-level infrastructure: repository hosting, CI/CD pipelines, issue trackers, secret stores, and [MCP](../concepts/mcp.md) servers for error tracking, monitoring, and databases. These integrations make cloud agents accessible to non-developers (PMs, designers, support staff) who can trigger tasks without local tooling or Git knowledge. Teams often encode recurring workflows into [skills](../concepts/skill.md) (sometimes called playbooks) so anyone in the organization can trigger a standardized process.

## Capabilities

- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Filesystem agent](../concepts/filesystem-agent.md) (read/write access within sandbox)
- [Shell tool](../concepts/shell-tool.md) (command execution within sandbox)
- [Sandbox](../concepts/sandbox.md) (isolated execution environment with resource limits and network controls)
- [Subagents](../concepts/subagent.md) (parallel task delegation)
- [Skills](../concepts/skill.md) (instruction files loaded from repository or platform configuration)
- [MCP](../concepts/mcp.md) (external tool server connections to CI, error tracking, monitoring, databases)
- [Computer use tool](../concepts/computer-use-tool.md) (browser access within sandbox for web-based tasks)
- [Reasoning](../concepts/reasoning.md) (extended thinking traces before tool selection)
- [Agent checkpointing](../concepts/agent-checkpointing.md) (saving and resuming long-running tasks)

## Trust analysis

The sandbox is the primary trust boundary. Unlike [local coding agents](./local-coding-agent.md) that run with the developer's full system permissions, cloud coding agents operate inside ephemeral containers or VMs with controlled filesystem mounts, network egress rules, and resource limits. The sandbox constrains the blast radius of any single compromised session - a successful [prompt injection](../threats/prompt-injection.md) can affect the sandbox contents but cannot directly reach the developer's machine, other projects, or the host system.

However, the sandbox must be provisioned with credentials to be useful: repository access tokens, CI pipeline triggers, and secrets needed for builds and tests. These org-level credentials are higher-value targets than a single developer's local credentials because they often carry broader permissions (org-wide repo access, deployment keys). A compromised session that exfiltrates sandbox-injected secrets can affect infrastructure beyond the immediate task.

There is no real-time human-in-the-loop during execution. The agent runs autonomously from task receipt to PR submission. Every action the agent takes - file edits, dependency installs, shell commands, test runs - executes without approval. The human review boundary is the pull request, where a reviewer assesses the final output. This means the sandbox and its configuration are load-bearing for safety during execution; human oversight only catches what is visible in the PR diff.

[Skill](../concepts/skill.md) files in the repository influence agent behavior, creating the same [context poisoning](../threats/context-poisoning.md) surface as local agents. In cloud agents this risk is amplified by non-developer access: a PM triggering a task on a repository with poisoned skill files has less ability to recognize anomalous agent behavior than a developer would.

[MCP](../concepts/mcp.md) connections to org-level infrastructure (error tracking, monitoring, databases) extend the agent's reach well beyond the sandbox filesystem. A compromised session that can call MCP tools may be able to read production data, trigger deployments, or modify infrastructure state - actions that the sandbox's filesystem and network controls do not cover.

## Interaction effects

- **Sandbox + org-level credentials**: The sandbox constrains filesystem and compute, but secrets injected into the environment (repo tokens, CI keys, deployment credentials) are accessible to any code running inside it. A malicious dependency or [prompt injection](../threats/prompt-injection.md) payload can exfiltrate these credentials before the sandbox is destroyed.
- **No real-time oversight + autonomous execution**: Every action executes without approval. A [prompt injection](../threats/prompt-injection.md) in an issue description, PR comment, or repository file can direct arbitrary edits and shell commands for the full duration of the task with no human checkpoint until the PR is submitted.
- **PR as sole review surface + high volume**: When many agent sessions produce PRs in parallel, reviewers face throughput pressure. Subtle malicious changes (backdoors, weakened validation, dependency substitutions) are harder to catch in large diffs, especially when reviewers develop trust in agent-generated PRs that are usually correct.
- **Skills + non-developer access**: Non-developers triggering agent tasks cannot assess whether skill files in a repository have been tampered with. A poisoned repository can cause the agent to behave maliciously when triggered by anyone in the organization, not just developers who might notice anomalous behavior.
- **MCP + org infrastructure**: MCP server connections can grant access to production databases, deployment pipelines, and monitoring systems. A compromised agent session can use these connections to read sensitive data or trigger infrastructure changes that the sandbox's filesystem isolation was never designed to prevent.
- **Ephemeral sandbox + persistence through commits**: The sandbox is destroyed after each task, preventing local persistence. But the agent's output - committed code in a PR - can carry [persistence attacks](../threats/persistence-attacks.md) (backdoors, malicious CI config, git hooks) that survive merge and affect all future development and deployments.

## Threats

| Threat                                                                               | Relevance | Note                                                                                             |
| ------------------------------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------ |
| [Prompt injection](../threats/prompt-injection.md)                                   | Primary   | Issue descriptions, PR comments, repo files direct autonomous execution with no human checkpoint |
| [Context poisoning](../threats/context-poisoning.md)                                 | Primary   | Skill files, issue descriptions, repo content; exploitable by non-developers who trigger tasks   |
| [Persistence attacks](../threats/persistence-attacks.md)                             | Primary   | Backdoors in merged PRs (CI config, git hooks) affect all future development                     |
| [Data exfiltration](../threats/data-exfiltration.md)                                 | Primary   | Org-level secrets (repo tokens, CI keys, deployment credentials) accessible in sandbox           |
| [Supply chain attack](../threats/supply-chain-attack.md)                             | Primary   | Malicious dependencies in merged PRs execute with org-level permissions                          |
| [Approval fatigue exploitation](../threats/approval-fatigue-exploitation.md)         | Elevated  | High PR volumes degrade reviewer attentiveness to subtle malicious changes                       |
| [Multi-agent system threats](../threats/multi-agent-system-threats.md)               | Elevated  | Subagent injection propagation into committed output                                             |
| [Cross-tenant / cross-session data leakage](../threats/cross-tenant-data-leakage.md) | Elevated  | Shared platform infrastructure between organizations' agent sessions                             |
| [User manipulation](../threats/user-manipulation.md)                                 | Elevated  | Non-technical reviewers approve based on agent explanations rather than code understanding       |
| [Tool misuse](../threats/tool-misuse.md)                                             | Elevated  | Harmful code committed to PRs: removing security checks, weakening authentication                |
| [Goal manipulation](../threats/goal-manipulation.md)                                 | Elevated  | Issue descriptions or repo files redirect agent objectives during autonomous execution           |
| [Unauthorized code execution](../threats/unauthorized-code-execution.md)             | Elevated  | Injected commands within sandbox; containment limits host impact but not task damage             |
| [Tool output poisoning](../threats/tool-output-poisoning.md)                         | Elevated  | CI outputs, MCP responses hijack subsequent reasoning and edits                                  |
| [Privilege compromise](../threats/privilege-compromise.md)                           | Elevated  | Org-level credentials in sandbox grant access beyond intended task scope                         |
| [Denial of service](../threats/denial-of-service.md)                                 | Elevated  | Resource exhaustion, excessive PR generation overwhelms review capacity                          |
| [Hallucination exploitation](../threats/hallucination-exploitation.md)               | Standard  | Plausible-looking PRs with subtle defects pass automated checks                                  |
| [Guardrail bypass](../threats/guardrail-bypass.md)                                   | Standard  | Circumventing safety constraints within sandbox                                                  |
| [System prompt extraction](../threats/system-prompt-extraction.md)                   | Standard  | Instructions leaked in PR descriptions, commit messages, or code comments                        |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md)               | Standard  | Sycophancy and shortcut-taking produce plausible PRs with subtle defects                         |
| [Training data poisoning](../threats/training-data-poisoning.md)                     | Standard  | Baseline risk, no architecture-specific amplifier                                                |

## Examples

- Devin: a cloud-native coding agent by Cognition with its own IDE, shell, and browser in a remote environment.
- GitHub Copilot coding agent: runs in a GitHub-hosted sandbox, picks up issues and creates PRs.
- Cursor Background Agents: execute asynchronously in cloud VMs while the developer continues other work locally.
- Google Jules: generates implementation plans and executes them in a cloud sandbox.
