# Shell Tool

A [tool](./tools.md) that gives an [agent](./agent.md) access to a system shell (typically bash or zsh), allowing it to execute arbitrary command-line programs, scripts, and pipelines and receive their output (stdout, stderr, exit code) as context.

## Details

Shell tools are one of the most powerful capabilities available to an agent because they provide open-ended access to the operating system: installing packages, running builds, executing tests, managing processes, and interacting with the filesystem and network. Unlike narrowly scoped [tools](./tools.md) that expose a single function, a shell tool effectively gives the agent access to every command-line program installed in the environment. This flexibility makes shell tools a core building block for [filesystem agents](./filesystem-agent.md) and [coding agents](./coding-agent.md), where the edit-build-test cycle depends on running compilers, test runners, linters, and git commands.

Shell tools are typically [provider-defined tools](./tools.md): the [model developer](./model-developer.md) standardizes the tool interface and trains the model on it, but the developer's [agent runtime](./agent-runtime.md) executes the commands. Execution usually happens inside a [sandbox](./sandbox.md) with restricted permissions to limit what the agent can reach. Common restrictions include filesystem allowlists, network egress rules, time/resource limits, and process isolation.

The open-ended nature of shell tools makes them a significant attack surface. They are a primary vector for [unauthorized code execution](../threats/unauthorized-code-execution.md) (injected commands executed as live shell input), [persistence attacks](../threats/persistence-attacks.md) (cron jobs, SSH keys, modified configs), and [data exfiltration](../threats/data-exfiltration.md) (piping data to external endpoints via curl or netcat). [Tool execution approval](./tool-execution-approval.md) is a common mitigation, requiring human confirmation before shell commands run. [Sandboxing](./sandbox.md) and least-privilege execution environments further reduce risk.

## Examples

- Anthropic's bash tool: a provider-defined tool where Claude emits structured shell commands and the developer's agent runtime executes them locally or in a sandbox.
- An IDE-based [coding agent](./coding-agent.md) running `npm test`, `git diff`, or `grep -r` via shell access to the developer's local environment.
- A cloud [sandbox service](./sandbox.md) that provisions a container with shell access for a remote coding agent to run build and deploy commands.

## Synonyms

bash tool, terminal tool, command-line tool
