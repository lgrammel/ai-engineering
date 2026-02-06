# Human Manipulation

Human Manipulation occurs when AI [agents](../concepts/agent.md) are used -- either by design flaw or attacker coercion -- to influence human users' beliefs, decisions, or actions by exploiting the trust relationship between user and agent.

Users tend to treat agent responses as authoritative, especially when the agent has demonstrated competence or has access to [tools](../concepts/tools.md) and data the user cannot easily verify. This implicit trust creates an attack surface: an attacker who gains influence over the agent (for example through [prompt injection](./prompt-injection.md) or [intent breaking](./intent-breaking-and-goal-manipulation.md)) can leverage it to spread misinformation, social-engineer the user into revealing sensitive information, or persuade the user to take harmful actions.

This threat differs from [overwhelming human in the loop](./overwhelming-human-in-the-loop.md), which targets the approval mechanism itself rather than the user's beliefs. Human manipulation targets the user's judgment and trust directly.

## Examples

- A compromised customer-service agent convinces a user to share their account credentials, claiming it is needed for verification.
- An agent influenced by a prompt injection subtly steers a user toward purchasing a specific product by presenting biased comparisons.
- A coding agent confidently recommends an insecure implementation pattern, and the developer trusts the recommendation without review.
