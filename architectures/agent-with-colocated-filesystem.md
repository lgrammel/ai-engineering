# Agent with Colocated Filesystem

An [agent](../concepts/agent.md) that runs inside a [sandbox](../concepts/sandbox.md) alongside its workspace filesystem, with [shell](../concepts/shell-tool.md) access and [skills](../concepts/skill.md) loaded from the filesystem. The agent and the files it operates on share the same execution environment.

## Details

This architecture is common in [coding agents](../concepts/coding-agent.md) and [filesystem agents](../concepts/filesystem-agent.md) that operate on a codebase: the agent reads and writes source files, runs builds and tests through the [shell](../concepts/shell-tool.md), installs dependencies, and executes arbitrary commands - all within a shared filesystem environment. [Skills](../concepts/skill.md) (instruction files stored in the workspace) are discovered and loaded into the agent's [context](../concepts/context.md) by the [agent runtime](../concepts/agent-runtime.md), making the filesystem a source of both data and behavioral instructions.

The critical security property is that the agent and its workspace are colocated: the agent can read and modify any file in the workspace, including files that influence its own behavior (skills, configuration files, `.env` files). This means a compromised workspace can alter the agent's instructions, and a compromised agent can alter the workspace in ways that persist beyond the current session.

The [sandbox](../concepts/sandbox.md) boundary separates the agent+workspace environment from the host system. Sandbox controls (filesystem allowlists, network egress rules, process isolation, resource limits) constrain what the agent can reach beyond the workspace. Within the sandbox, however, the agent has broad access - the sandbox limits blast radius to the host, not within the workspace itself.

## Trust boundaries

The sandbox is the outer boundary, separating the agent+workspace from the host system. Within the sandbox, the agent and workspace filesystem share the same trust zone: the agent can read and write any file, execute any command, and install any dependency within the workspace. Files on the filesystem - including [skills](../concepts/skill.md), configuration files, dependency manifests, and source code - are treated as part of the agent's operating context. Skill files loaded from the workspace cross directly into the agent's [context](../concepts/context.md) as behavioral instructions. Shell command outputs re-enter the context as tool results. The agent's write access to persistent files means its actions can outlive the current session.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in the context, tool results, or workspace files can override intended instructions
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior
- [Tool misuse](../threats/tool-misuse.md) - authorized but harmful tool calls (e.g., deleting files, running destructive commands)
- [Tool output poisoning](../threats/tool-output-poisoning.md) - malicious data in tool responses or command outputs that hijacks subsequent agent behavior
- [Data exfiltration](../threats/data-exfiltration.md) - sensitive data extracted through tool calls, shell commands, or network requests
- [Denial of service](../threats/denial-of-service.md) - unbounded tool-call loops, fork bombs, or resource-exhausting commands
- [Goal manipulation](../threats/goal-manipulation.md) - redirected agent objectives through injected instructions in files or tool outputs
- [Privilege compromise](../threats/privilege-compromise.md) - over-scoped credentials or sandbox misconfiguration granting broader access than intended
- [Persistence attacks](../threats/persistence-attacks.md) - backdoors planted in source code, configuration files, CI/CD pipelines, or cron jobs that survive beyond the compromised session
- [Context poisoning](../threats/context-poisoning.md) - manipulated workspace files or skill files that alter the agent's behavior when loaded into context
- [Unauthorized code execution](../threats/unauthorized-code-execution.md) - injected shell commands or scripts executed through the agent's shell access
- [Supply chain attack](../threats/supply-chain-attack.md) - malicious dependencies installed in the workspace (packages, tools, MCP servers) that execute during builds, tests, or agent operations

## Examples

- A [local coding agent](../concepts/local-coding-agent.md) running in an IDE that edits project files, runs tests, and loads skill files from the repository.
- A [cloud coding agent](../concepts/cloud-coding-agent.md) operating in a remote VM where the agent process, the cloned repository, and the build toolchain share the same filesystem.
- A DevOps agent running inside a container that modifies infrastructure-as-code files and applies changes through shell commands.
