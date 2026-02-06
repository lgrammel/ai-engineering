# Repudiation & Untraceability

Repudiation & Untraceability occurs when actions performed by AI [agents](../concepts/agent.md) cannot be reliably attributed, reconstructed, or audited due to insufficient logging, opaque decision-making, or lack of provenance tracking.

In agent systems, decisions emerge from a combination of [LLM](../concepts/llm.md) [reasoning](../concepts/reasoning.md), [tool](../concepts/tools.md) calls, and context retrieval steps, making the decision chain inherently difficult to trace. Without adequate [observability](../concepts/observability.md) -- structured logs, traces that link reasoning steps to tool invocations, and tamper-evident audit trails -- it becomes impossible to determine why an agent took a particular action, who (or what) initiated it, or whether the agent's behavior was legitimate.

This threat enables other attacks to go undetected: an attacker who achieves [tool misuse](./tool-misuse.md), [privilege compromise](./privilege-compromise.md), or [exfiltration](./exfiltration.md) in a system with poor traceability can deny responsibility and avoid detection. It also complicates incident response, compliance, and accountability in multi-agent systems where actions span several agents.

## Examples

- An agent deletes production data via a tool call, but no audit log records which reasoning chain or input triggered the deletion.
- In a multi-agent system, a harmful action is traced to an intermediate agent, but the original request and delegation chain are not logged, making root-cause analysis impossible.
- An attacker exploits the absence of tamper-evident logging to modify agent logs after the fact, erasing evidence of unauthorized actions.
