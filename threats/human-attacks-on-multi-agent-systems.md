# Human Attacks on Multi-Agent Systems

Human Attacks on Multi-Agent Systems occur when human adversaries exploit the delegation chains, trust relationships, and workflow dependencies in multi-agent systems to escalate privileges, manipulate operations, or extract data.

Unlike [rogue agents in multi-agent systems](./rogue-agents-in-multi-agent-systems.md) (where the threat comes from a compromised agent within the system), this threat involves an external human attacker who targets the seams between [agents](../concepts/agent.md). Multi-agent systems introduce unique attack surfaces because agents delegate tasks to each other, often propagating permissions and trust implicitly. An attacker who can influence one agent's inputs (for example through [prompt injection](./prompt-injection.md)) can exploit delegation to reach agents deeper in the workflow that would otherwise be inaccessible.

This threat is closely related to [identity spoofing & impersonation](./identity-spoofing-and-impersonation.md) (the attacker may pose as a trusted agent or user) and [privilege compromise](./privilege-compromise.md) (delegation chains can inadvertently escalate access).

## Examples

- An attacker submits a crafted request to a front-end agent that delegates to a privileged back-end agent, exploiting the delegation chain to access restricted resources.
- A human adversary manipulates a multi-agent workflow by injecting [prompt injection](./prompt-injection.md) payloads that propagate through agent handoffs and affect agents the attacker has no direct access to.
- An attacker exploits a poorly authenticated inter-agent API to submit tasks directly to a high-privilege agent, bypassing the intended workflow entry point.
