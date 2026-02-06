# Human Oversight Subversion

Human Oversight Subversion targets the human oversight layer in AI [agent](../concepts/agent.md) systems, either by manipulating the user's beliefs and trust to influence their decisions, or by degrading the quality of human review to render approval mechanisms ineffective.

This threat has two main forms:

- **Belief manipulation**: Exploiting the trust relationship between user and agent to spread misinformation, social-engineer the user into revealing sensitive information, or persuade the user to take harmful actions. Users tend to treat agent responses as authoritative, especially when the agent has demonstrated competence or has access to [tools](../concepts/tools.md) and data the user cannot easily verify.
- **Approval fatigue**: Undermining [tool execution approval](../concepts/tool-execution-approval.md) mechanisms by flooding the reviewer with high volumes of requests, increasing the complexity of requests so the reviewer rubber-stamps them, mixing legitimate and malicious actions, or creating artificial time pressure.

Both forms can be triggered by an attacker who gains influence over the agent (for example through [prompt injection](./prompt-injection.md) or [intent breaking](./intent-breaking-and-goal-manipulation.md)), turning a nominally human-supervised system into an effectively unsupervised one.

## Examples

- A compromised customer-service agent convinces a user to share their account credentials, claiming it is needed for verification.
- An agent influenced by a prompt injection subtly steers a user toward a specific product by presenting biased comparisons.
- A coding agent confidently recommends an insecure implementation pattern, and the developer trusts the recommendation without review.
- An agent generates dozens of benign file-change approvals followed by a single malicious one, exploiting approval fatigue.
- A compromised agent presents a destructive database operation buried in a long list of routine maintenance tasks for batch approval.
- An agent creates artificial urgency ("this deployment will fail in 2 minutes") to pressure a reviewer into approving without inspection.

## Mitigations

- Transparency indicators distinguishing AI-generated content from verified facts
- Independent verification mechanisms for high-stakes recommendations
- Rate-limiting and batching [tool execution approval](../concepts/tool-execution-approval.md) requests to prevent fatigue
- Tiered approval with stricter review for high-risk [tool](../concepts/tools.md) actions
- Automated pre-screening of requests before human review
- [Observability](../concepts/observability.md) on [agent](../concepts/agent.md) influence patterns and approval request volumes
