# Privilege Compromise

Privilege Compromise arises when attackers exploit weaknesses in permission management to gain or escalate an AI [agent's](../concepts/agent.md) access beyond what is intended, enabling unauthorized actions on connected systems and [tools](../concepts/tools.md).

Common vectors include over-permissioned agents (granted broad access for convenience rather than least-privilege), dynamic role inheritance where an agent inherits permissions from the user or context it operates on behalf of, misconfigured access controls, token or credential leakage, and identity spoofing where an attacker impersonates an authorized user or system component to bypass access controls. In multi-agent systems, compromising one agent's permissions can enable lateral movement to other agents or systems that trust the compromised agent (see [multi-agent system threats](./multi-agent-system-threats.md)).

Privilege compromise differs from [tool misuse](./tool-misuse.md) in that the attacker gains access to actions the agent was not supposed to have, rather than abusing legitimately authorized tools. It is often a prerequisite for [data exfiltration](./data-exfiltration.md) of protected data.

## Examples

- An agent configured with a database admin token can drop tables, even though its task only requires read access.
- An attacker exploits dynamic delegation in a multi-agent system to escalate from a low-privilege research agent to a high-privilege deployment agent.
- A misconfigured API scope grants an agent write access to a production system when it was only intended to have sandbox access.
- An attacker sends messages to an agent API using a stolen or forged authentication token, impersonating a privileged user.

## Mitigations

- Least-privilege [tool](../concepts/tools.md) and credential scoping
- Regular permission audits
- Scoped, short-lived credentials rather than broad access tokens
- Runtime permission boundary enforcement that blocks actions outside the agent's intended scope
- [Observability](../concepts/observability.md) on permission usage patterns to detect escalation attempts

## Synonyms

privilege escalation
