# Tool Misuse

Tool Misuse occurs when attackers manipulate AI [agents](../concepts/agent.md) into abusing their integrated [tools](../concepts/tools.md) through deceptive prompts or adversarial data, causing the agent to perform harmful actions while operating within its authorized permissions.

The key characteristic of tool misuse is that the agent uses tools it is legitimately allowed to use, but applies them in unintended or harmful ways. This distinguishes it from [privilege compromise](./privilege-compromise.md) (where the attacker gains unauthorized permissions) and from [unexpected RCE and code attacks](./unexpected-rce-and-code-attacks.md) (where the attacker exploits code execution vulnerabilities). Tool misuse is commonly enabled by [prompt injection](./prompt-injection.md).

A specific variant is Agent Hijacking, where an agent ingests adversarially manipulated data (for example, a poisoned document or crafted API response) and subsequently executes unintended tool calls, also discussed under [intent breaking & goal manipulation](./intent-breaking-and-goal-manipulation.md) from the goal-redirection perspective.

## Examples

- A [prompt injection](./prompt-injection.md) in a retrieved email causes an agent to forward confidential files using its authorized email tool.
- An agent with database access is tricked into running a broad DELETE query that it has permission to execute.
- A coding agent is manipulated into committing and pushing malicious code changes through its authorized git tools.
