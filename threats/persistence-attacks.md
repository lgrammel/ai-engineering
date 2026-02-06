# Persistence Attacks

Persistence attacks exploit an AI [agent's](../concepts/agent.md) write access to establish lasting backdoors or footholds that survive beyond the agent session, giving an attacker ongoing access to systems or the ability to influence future agent behavior.

Unlike individual malicious actions (covered by [tool misuse](./tool-misuse.md) or [unauthorized code execution](./unauthorized-code-execution.md)), the defining characteristic of a persistence attack is the strategic intent to create durable access or influence. An attacker who gains temporary control of an agent -- for example through [prompt injection](./prompt-injection.md) or [goal manipulation](./goal-manipulation.md) -- uses that window to plant artifacts that remain effective after the compromised session ends. The artifacts are often subtle and designed to blend in with legitimate system configuration.

Agents with broad file-system access, shell access, or deployment permissions (such as [coding agents](../concepts/coding-agent.md) and DevOps agents) are especially susceptible, because they routinely perform the same kinds of write operations an attacker would use to establish persistence.

## Examples

- A compromised [coding agent](../concepts/coding-agent.md) inserts a backdoor into source code that gets committed, reviewed as part of a large diff, and deployed to production.
- An agent adds an attacker-controlled SSH key to `~/.ssh/authorized_keys` or creates a new user account on a server.
- A malicious instruction causes an agent to modify a CI/CD pipeline configuration, adding a step that exfiltrates secrets on every build.
- An agent writes a cron job or scheduled task that periodically sends system information to an external endpoint.
- Poisoned entries are planted in an agent's long-term memory or [context](../concepts/context.md) store, causing the agent to behave maliciously in future sessions (see also [context poisoning](./context-poisoning.md)).

## Mitigations

- [Sandboxing](../concepts/sandbox.md) agent execution environments with restricted write access
- File integrity monitoring and diff review for agent-produced changes
- Least-privilege permissions, especially for file-system, shell, and deployment [tools](../concepts/tools.md)
- [Observability](../concepts/observability.md) on persistent artifacts created by agents (files, credentials, scheduled tasks, configuration changes)
- Ephemeral execution environments that are discarded after each session
