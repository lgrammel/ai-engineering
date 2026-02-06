# Agent Communication Poisoning

Agent Communication Poisoning occurs when attackers manipulate the communication channels between AI [agents](../concepts/agent.md) in a multi-agent system to inject false information, alter messages in transit, or disrupt coordination.

This threat targets the inter-agent communication layer -- shared message queues, API calls between agents, shared state stores, or structured handoff protocols -- rather than the agents' own memory (which falls under [memory poisoning](./memory-poisoning.md)). Because agents in a multi-agent system typically trust messages from peer agents, a poisoned message can redirect downstream agents' behavior without triggering the safeguards that might catch direct user input manipulation.

Attack vectors include man-in-the-middle interception of agent-to-agent messages, injecting messages into a shared message bus, and tampering with shared state or artifacts that agents read from a common workspace.

## Examples

- An attacker intercepts the handoff message between a planning agent and an execution agent, replacing the approved action list with malicious instructions.
- A poisoned entry is written to a shared key-value store that a downstream agent reads as a trusted directive from an upstream agent.
- An attacker injects fabricated status messages into a multi-agent pipeline, causing agents to skip validation steps or re-execute completed tasks.
