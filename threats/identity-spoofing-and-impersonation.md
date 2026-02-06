# Identity Spoofing & Impersonation

Identity Spoofing & Impersonation occurs when attackers exploit authentication or identification mechanisms to impersonate AI [agents](../concepts/agent.md), human users, or system components, enabling them to execute unauthorized actions under false identities.

This threat manifests in two main directions. Agent-to-agent impersonation involves a malicious actor posing as a trusted agent in a multi-agent system to inject commands or extract data from other agents. Human-to-agent impersonation involves an attacker posing as an authorized user (or the system itself) to bypass access controls and issue privileged instructions to an agent.

Weak or absent identity verification in agent communication protocols, shared credentials, and lack of mutual authentication between agents all increase exposure to this threat. It is closely related to [privilege compromise](./privilege-compromise.md) (impersonation is often a means to escalate privileges) and [human attacks on multi-agent systems](./human-attacks-on-multi-agent-systems.md) (where the attacker exploits trust relationships).

## Examples

- An attacker sends messages to an agent API using a stolen or forged authentication token, impersonating a privileged user.
- A rogue service impersonates a trusted agent in a multi-agent workflow and injects malicious instructions into the pipeline.
- An attacker crafts messages that mimic system-level prompts, causing the agent to treat them as authoritative instructions.
