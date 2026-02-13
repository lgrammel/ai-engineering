# Local Coding Agent

A local [coding agent](../concepts/coding-agent.md) system combines a [multi-turn](../concepts/multi-turn-conversation.md) [agent](../concepts/agent.md) loop with [filesystem](../concepts/filesystem-agent.md) and [shell](../concepts/shell-tool.md) access, [subagent](../concepts/subagent.md) delegation, [human-in-the-loop](../concepts/human-in-the-loop.md) approval, [skills](../concepts/skill.md) loaded from the workspace, and [MCP](../concepts/mcp.md) tool server connections - all running unsandboxed under the developer's identity.

## Details

Local coding agents ship in two form factors that share the same core architecture but differ in interface and review affordances.

**CLI agents** (e.g. Claude Code) run as standalone terminal processes, making them editor-agnostic and usable in headless automation (CI/CD pipelines, scripted workflows). The developer reviews proposed actions as terminal text. A headless mode removes the [human-in-the-loop](../concepts/human-in-the-loop.md) boundary entirely, making every other defense layer load-bearing.

**IDE-embedded agents** (e.g. Cursor, Windsurf) operate as a [copilot interface](../concepts/copilot-interface.md) inside the editor. IDE embedding adds capabilities absent from a CLI: rich diff views for reviewing multi-file edits, inline tab completions, background agents that work on tasks asynchronously, and multi-model routing that dispatches requests to different [LLMs](../concepts/llm.md) by task type. The richer review UX can improve human oversight quality for complex changes compared to terminal-only review, but the higher interaction surface (auto-applied suggestions, background edits) also creates more opportunities for actions to bypass deliberate review.

Both form factors share the same trust-critical property: the agent runs with the developer's full permissions on a shared filesystem that serves simultaneously as workspace, instruction source, and attack surface.

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Filesystem agent](../concepts/filesystem-agent.md) (read/write access to workspace files)
- [Shell tool](../concepts/shell-tool.md) (arbitrary command execution)
- [Subagents](../concepts/subagent.md) (parallel task delegation)
- [Human-in-the-loop](../concepts/human-in-the-loop.md) ([tool execution approval](../concepts/tool-execution-approval.md))
- [Skills](../concepts/skill.md) (instruction files loaded from workspace, e.g. `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/`)
- [MCP](../concepts/mcp.md) (external tool server connections)
- [Reasoning](../concepts/reasoning.md) (extended thinking traces before tool selection and responses)
- [Prompt compaction](../concepts/prompt-compaction.md) (context management for long sessions)
- [Copilot interface](../concepts/copilot-interface.md) (IDE-embedded variants: rich diff review, inline completions, background agents)

## Trust analysis

Local coding agents run unsandboxed in the developer's environment with the developer's full permissions. There is no [sandbox](../concepts/sandbox.md) boundary - the agent can access anything the developer can, including credentials, SSH keys, and other projects on the filesystem. [Human-in-the-loop](../concepts/human-in-the-loop.md) approval via [tool execution approval](../concepts/tool-execution-approval.md) is the primary safety mechanism rather than technical containment. The developer configures which tool categories require approval, with read-only operations typically auto-approved and write operations requiring confirmation.

The filesystem is both workspace and instruction source: [skill](../concepts/skill.md) files (e.g. `CLAUDE.md`, `AGENTS.md`, `.cursor/rules/`) are discovered and loaded into the agent's [context](../concepts/context.md) by the [agent runtime](../concepts/agent-runtime.md). A compromised repository can alter the agent's behavioral instructions before the developer interacts with it, through [context poisoning](../threats/context-poisoning.md) via crafted skill or rule files.

Review fidelity varies by form factor. IDE-embedded agents present changes in rich diff views with syntax highlighting, making structural edits easier to audit than terminal-only review. However, IDE agents also introduce lower-friction interaction patterns - inline completions applied with a single keystroke, background agents making edits without an explicit approval step - that can reduce the deliberateness of review. CLI agents in headless mode (CI/CD, scripted automation) remove the human review boundary entirely, making the agent fully autonomous with whatever permissions the pipeline grants.

[Subagents](../concepts/subagent.md) run with their own context but share the same unsandboxed environment. A subagent that encounters [prompt injection](../threats/prompt-injection.md) in a file can return poisoned results that influence the parent agent's subsequent reasoning and edits. [MCP](../concepts/mcp.md) connections extend the capability surface to external tool servers, introducing additional trust boundaries around tool server authentication and behavior.

## Interaction effects

- **Filesystem + shell + no sandbox**: The agent can install and execute arbitrary dependencies under the developer's identity, opening a [supply chain attack](../threats/supply-chain-attack.md) surface. A malicious package installed via shell can execute during builds, tests, or agent operations with the developer's full permissions.
- **Skills + filesystem write access**: The agent reads skill files to shape its behavior and has write access to the same filesystem where skills live. A compromised agent session can modify skill files to influence future sessions - a [persistence attack](../threats/persistence-attacks.md) that survives beyond the current interaction.
- **Subagents + filesystem**: Subagents search and read files in parallel, then return results to the parent. If a repository contains [prompt injection](../threats/prompt-injection.md) payloads in source files or documentation, a search subagent can propagate the payload into the parent's context, influencing subsequent edits across the codebase.
- **Human-in-the-loop + high action volume**: Extended coding sessions produce many file edits and shell commands. The propose-review-execute loop is the primary defense, but its effectiveness degrades as the developer's review attention diminishes over a long session. IDE agents compound this with inline completions and background edits that bypass the explicit approval step.
- **Headless mode + no sandbox**: In CI/CD or scripted automation, CLI agents operate without human oversight and with pipeline-level permissions. Any successful [prompt injection](../threats/prompt-injection.md) or [context poisoning](../threats/context-poisoning.md) leads directly to autonomous execution of attacker-controlled actions without a human review step.
- **MCP + no sandbox**: External MCP tool servers can expose capabilities that interact with the unsandboxed environment. A malicious or compromised MCP server can influence agent behavior through [tool output poisoning](../threats/tool-output-poisoning.md), and the agent can act on that influence with the developer's full system access.

## Threats

| Threat                                                                       | Relevance | Note                                                                                             |
| ---------------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| [Prompt injection](../threats/prompt-injection.md)                           | Primary   | Workspace files, tool outputs, and conversation direct file edits and shell commands unsandboxed |
| [Context poisoning](../threats/context-poisoning.md)                         | Primary   | Skill files and workspace files control agent behavior; compromised repo controls the agent      |
| [Privilege compromise](../threats/privilege-compromise.md)                   | Primary   | No sandbox; agent operates with developer's full system permissions                              |
| [Persistence attacks](../threats/persistence-attacks.md)                     | Primary   | Backdoors in source code, CI config, skill files, git hooks survive sessions                     |
| [Supply chain attack](../threats/supply-chain-attack.md)                     | Primary   | Malicious dependencies installed via shell execute with developer's full permissions             |
| [Unauthorized code execution](../threats/unauthorized-code-execution.md)     | Primary   | Shell commands run with developer's full system permissions                                      |
| [Tool misuse](../threats/tool-misuse.md)                                     | Elevated  | Destructive file edits or shell commands across entire accessible filesystem                     |
| [Data exfiltration](../threats/data-exfiltration.md)                         | Elevated  | Credentials, SSH keys, source code via shell, network requests, or MCP calls                     |
| [Approval fatigue exploitation](../threats/approval-fatigue-exploitation.md) | Elevated  | High volume degrades review; IDE agents compound with auto-applied suggestions                   |
| [Multi-agent system threats](../threats/multi-agent-system-threats.md)       | Elevated  | Subagent injection propagation into parent agent's reasoning and edits                           |
| [Tool output poisoning](../threats/tool-output-poisoning.md)                 | Elevated  | MCP responses or command outputs hijack subsequent reasoning                                     |
| [Goal manipulation](../threats/goal-manipulation.md)                         | Elevated  | Workspace files or tool outputs redirect agent objectives                                        |
| [Denial of service](../threats/denial-of-service.md)                         | Elevated  | Fork bombs, resource exhaustion in developer's local environment                                 |
| [Hallucination exploitation](../threats/hallucination-exploitation.md)       | Standard  | Incorrect code edits, wrong dependency choices                                                   |
| [Guardrail bypass](../threats/guardrail-bypass.md)                           | Standard  | Circumventing safety constraints on code generation or commands                                  |
| [System prompt extraction](../threats/system-prompt-extraction.md)           | Standard  | Revealing skill/rule file contents through conversation                                          |
| [User manipulation](../threats/user-manipulation.md)                         | Standard  | Developer trust in confident explanations for subtly harmful edits                               |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md)       | Standard  | Sycophancy and shortcut-taking degrade code quality                                              |
| [Training data poisoning](../threats/training-data-poisoning.md)             | Standard  | Baseline risk, no architecture-specific amplifier                                                |

## Examples

- Claude Code: a CLI-based local coding agent that runs in the developer's terminal, with headless mode for CI/CD automation.
- Cursor: an IDE-embedded local coding agent with rich diff review, inline tab completions, background agents, and multi-model routing.
- Windsurf: an IDE with integrated local coding agent capabilities.
