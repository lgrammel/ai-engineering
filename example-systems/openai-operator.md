# OpenAI Operator

OpenAI Operator is a [computer use agent](../concepts/computer-use-agent.md) that performs web tasks (shopping, booking, research) in a cloud browser, combining a [multi-turn](../concepts/multi-turn-conversation.md) [agent](../concepts/agent.md) loop with [computer use](../concepts/computer-use-tool.md), [sandbox](../concepts/sandbox.md) isolation, and [human-in-the-loop](../concepts/human-in-the-loop.md) confirmation for sensitive actions.

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Computer use tool](../concepts/computer-use-tool.md) (screenshot-action loop in a cloud browser)
- [Sandbox](../concepts/sandbox.md) (isolated cloud browser environment)
- [Human-in-the-loop](../concepts/human-in-the-loop.md) (confirmation for purchases, logins, form submissions)
- [Guardrails](../concepts/guardrail.md) (domain restrictions, content monitoring)

## Trust analysis

Operator runs a screenshot-action loop in a cloud-hosted browser sandbox: it captures screenshots, reasons about the current state, and executes GUI actions (click, type, scroll). The screen is simultaneously the agent's perception surface and its primary injection surface - anything displayed on a web page enters the agent's [context](../concepts/context.md) as visual input.

The [sandbox](../concepts/sandbox.md) (cloud browser) is the outer trust boundary, separating the agent's browsing environment from user accounts and the host system. Unlike [API-style tools](../concepts/function-calling.md) where schemas constrain what the agent can request, the [computer use tool's](../concepts/computer-use-tool.md) action space is whatever the browser GUI exposes - effectively unbounded within the browser. The agent can click any link, fill any form, and navigate to any page the browser can reach.

[Human-in-the-loop](../concepts/human-in-the-loop.md) confirmation gates sensitive actions: purchases, logins, form submissions, and other consequential operations require explicit user approval. Low-risk browsing actions (navigation, reading, scrolling) proceed without confirmation. This creates a two-tier trust model where the agent's effective capabilities for high-stakes actions are bounded by user approval, while low-risk actions have the same trust model as a fully autonomous browsing agent.

On-screen [prompt injection](../threats/prompt-injection.md) - malicious instructions embedded in web page content, images, or invisible HTML elements - is the architecture-specific threat. The agent must interpret arbitrary rendered content to perform its task and cannot reliably distinguish legitimate UI elements from adversarial ones. [Goal manipulation](../threats/goal-manipulation.md) through on-screen instructions can redirect the agent away from the user's intended task.

## Interaction effects

- **Computer use + web content + sandbox**: Web pages are both the task environment and the injection surface. The sandbox contains the blast radius (the agent cannot escape the browser environment), but within the browser, a malicious page can direct the agent to navigate elsewhere, fill forms with attacker-chosen data, or click through purchase flows. The sandbox limits what the agent can reach but not what it can do within the browser.
- **Human-in-the-loop + computer use**: The approval gate catches high-stakes actions (purchases, logins), but the agent performs many low-risk browsing steps autonomously between approval points. An attacker-controlled page can build up adversarial context through low-risk navigation steps that don't trigger approval, then present a seemingly legitimate high-stakes action that the user approves without recognizing the preceding manipulation.
- **Multi-turn conversation + visual context**: The agent's context accumulates both conversational history and information extracted from screenshots across turns. On-screen content from earlier steps persists in context and influences later decisions, creating a compounding [context poisoning](../threats/context-poisoning.md) vector across the browsing session.
- **Computer use + approval fatigue**: Extended browsing sessions with frequent navigation produce a high volume of actions. When sensitive actions require confirmation, the volume of approval requests can trigger [human approval fatigue exploitation](../threats/human-approval-fatigue-exploitation.md), degrading the reviewer's attentiveness to individual requests.
