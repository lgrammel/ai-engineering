# Overwhelming Human in the Loop

Overwhelming Human in the Loop targets systems that rely on human oversight for decision validation, aiming to degrade the quality of human review by exploiting cognitive limitations or compromising the interaction framework.

In [agent](../concepts/agent.md) systems that require human approval for high-risk actions (such as executing destructive [tool](../concepts/tools.md) calls or making financial transactions), attackers can undermine the oversight mechanism without directly bypassing it. Common tactics include flooding the reviewer with a high volume of approval requests to cause fatigue, increasing the complexity or technical density of requests so the reviewer rubber-stamps them, mixing legitimate and malicious actions in rapid succession, and creating time pressure that discourages careful review.

This threat differs from [human manipulation](./human-manipulation.md), which targets the user's beliefs and trust directly. Overwhelming human in the loop targets the approval process itself, turning a nominally human-supervised system into an effectively unsupervised one.

## Examples

- An agent generates dozens of benign file-change approvals followed by a single malicious one, exploiting approval fatigue.
- A compromised agent presents a destructive database operation buried in a long list of routine maintenance tasks for batch approval.
- An agent creates artificial urgency ("this deployment will fail in 2 minutes") to pressure a reviewer into approving without careful inspection.
