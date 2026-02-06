# Rogue Agents in Multi-Agent Systems

Rogue Agents in Multi-Agent Systems are AI [agents](../concepts/agent.md) within a multi-agent system that operate outside their intended boundaries -- executing unauthorized actions, [exfiltrating](./exfiltration.md) data, or subverting the goals of the overall system.

An agent can become rogue through external compromise (for example, via [prompt injection](./prompt-injection.md) or [memory poisoning](./memory-poisoning.md) that redirects its objectives) or through [misaligned behavior](./misaligned-and-deceptive-behaviors.md) that emerges during operation. Rogue agents are particularly dangerous in multi-agent systems because other agents often trust peer agents implicitly, and monitoring boundaries may not extend to inter-agent interactions. A rogue agent can manipulate peer agents via [agent communication poisoning](./agent-communication-poisoning.md), escalate its own privileges through delegation chains, or exfiltrate data through [tool](../concepts/tools.md) calls that appear routine.

Detection is challenging because a rogue agent's actions may appear legitimate when viewed in isolation -- the malicious intent only becomes visible when the full workflow and intended objectives are considered.

## Examples

- A compromised coding agent in a CI/CD pipeline injects a backdoor into the codebase while other agents in the system continue to approve and deploy the changes.
- An agent that has been subtly redirected via memory poisoning starts exfiltrating user data through its authorized logging tool, while continuing to perform its normal tasks.
- A rogue research agent in a multi-agent analysis pipeline fabricates findings that other agents incorporate into final reports without verification.
