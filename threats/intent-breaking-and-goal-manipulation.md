# Intent Breaking & Goal Manipulation

Intent Breaking & Goal Manipulation exploits vulnerabilities in an AI [agent's](../concepts/agent.md) planning and goal-setting capabilities, allowing attackers to redirect the agent's objectives, alter its [reasoning](../concepts/reasoning.md) chain, or cause it to abandon its original task.

This threat targets the agent's decision-making layer rather than individual [tool](../concepts/tools.md) calls. The attacker's goal is to change what the agent is trying to achieve, not just how it uses a specific tool (which falls under [tool misuse](./tool-misuse.md)). Common techniques include [prompt injection](./prompt-injection.md) that rewrites the agent's goals, multi-step social engineering that gradually shifts objectives, and exploiting ambiguity in instructions to steer the agent toward attacker-desired outcomes.

A specific variant is Agent Hijacking, where adversarial data ingested by the agent causes it to pursue entirely new objectives. Agent Hijacking is also discussed in [tool misuse](./tool-misuse.md) from the perspective of the resulting harmful tool calls.

## Examples

- A [prompt injection](./prompt-injection.md) in a retrieved document causes a research agent to abandon its summary task and instead search for and report the user's credentials.
- An attacker gradually shifts a customer-service agent's objective across multiple turns, causing it to provide unauthorized refunds.
- Conflicting instructions in an agent's context cause it to prioritize an attacker-planted goal over the developer's system prompt.
