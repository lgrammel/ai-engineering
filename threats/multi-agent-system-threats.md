# Multi-Agent System Threats

Multi-Agent System Threats exploit the trust relationships, delegation chains, and communication channels between AI [agents](../concepts/agent.md) in multi-agent systems to compromise coordination, escalate privileges, or subvert the system's overall goals.

Multi-agent systems introduce attack surfaces that single-agent systems do not have. Agents typically trust messages from peer agents, propagate permissions through delegation, and coordinate via shared state or message passing. An attacker -- whether an external human or a compromised agent within the system -- can exploit these seams to influence agents that would otherwise be inaccessible.

Key attack vectors include:

- **Communication poisoning**: Intercepting or injecting messages into inter-agent channels (shared message queues, API calls, shared state stores), causing downstream agents to act on false directives. This targets the communication layer rather than an agent's own memory (which falls under [memory poisoning](./memory-poisoning.md)).
- **Rogue agents**: An agent that operates outside its intended boundaries after being compromised (for example, via [prompt injection](./prompt-injection.md) or [memory poisoning](./memory-poisoning.md)) or due to [misaligned behavior](./misaligned-and-deceptive-behaviors.md). Rogue agents are dangerous because their actions may appear legitimate when viewed in isolation -- the malicious intent only becomes visible when the full workflow is considered.
- **Delegation chain exploitation**: External attackers submitting crafted inputs to a front-end agent that delegates to privileged back-end agents, using the delegation chain to reach restricted resources. This often involves [prompt injection](./prompt-injection.md) payloads that propagate through agent handoffs.
- **Agent impersonation**: A malicious actor posing as a trusted agent to inject commands or extract data, exploiting weak or absent mutual authentication between agents. This is often a means to achieve [privilege compromise](./privilege-compromise.md).

## Examples

- An attacker intercepts the handoff message between a planning agent and an execution agent, replacing the approved action list with malicious instructions.
- A compromised coding agent in a CI/CD pipeline injects a backdoor while other agents in the system continue to approve and deploy the changes.
- An attacker submits a crafted request to a front-end agent, exploiting delegation to access restricted resources via a privileged back-end agent.
- A rogue service impersonates a trusted agent in a multi-agent workflow and injects malicious instructions into the pipeline.
- A poisoned entry is written to a shared state store that a downstream agent reads as a trusted directive from an upstream agent.
- A rogue research agent fabricates findings that other agents incorporate into final reports without verification.

## Mitigations

- Authenticated and integrity-verified inter-agent communication channels
- Mutual authentication between [agents](../concepts/agent.md)
- Limiting permission propagation across agent boundaries
- Input validation on messages received from peer agents and at every workflow entry point
- [Observability](../concepts/observability.md) on inter-agent message flows and delegation chains
- Independent verification of agent outputs before propagation to peer agents
