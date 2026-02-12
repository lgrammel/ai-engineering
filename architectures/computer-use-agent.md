# Computer Use Agent

An [agent](../concepts/agent.md) that uses a [computer use tool](../concepts/computer-use-tool.md) as its primary interaction mechanism, operating software through screenshots and mouse/keyboard actions in a [sandboxed](../concepts/sandbox.md) virtual display environment.

## Details

The agent runs a screenshot-action loop: it captures a screenshot of the current screen state, reasons about what to do next, executes a GUI action (click, type, scroll, key combination), and repeats. This is the standard [agent](../concepts/agent.md) tool-calling loop, but with the [computer use tool](../concepts/computer-use-tool.md) as the dominant capability. The action space is unbounded by schemas - the agent can click, type, or scroll anywhere on the screen, unlike an [Agent with API-Style Tools](./agent-with-api-style-tools.md) where tool schemas constrain what the agent can request. Many implementations supplement computer use with [shell](../concepts/shell-tool.md) and text editor tools for tasks where direct file or command-line access is more efficient than navigating a GUI.

The screen is simultaneously the agent's perception surface and its primary injection surface. Anything displayed - web pages, documents, pop-ups, images - is captured in screenshots and enters the agent's [context](../concepts/context.md) as visual input. Malicious instructions embedded in on-screen content ([prompt injection](../threats/prompt-injection.md) via rendered text, images, or invisible HTML elements) can influence the agent's next action while it controls the display. This visual injection surface is unique to this architecture: the agent must interpret arbitrary rendered content to perform its task, and cannot easily distinguish legitimate UI elements from adversarial ones.

Deployments typically isolate the agent in a [sandbox](../concepts/sandbox.md) - a virtual machine or container with a virtual display - to limit the blast radius if the agent is manipulated. Common [guardrails](../concepts/guardrail.md) include domain allowlists restricting which websites the agent can visit, [human-in-the-loop](../concepts/human-in-the-loop.md) confirmation for consequential actions (purchases, logins, sending messages), and monitoring for adversarial content on screen.

## Trust boundaries

The sandbox (VM or container with virtual display) is the outer boundary, separating the agent environment from the host system. Within the sandbox, the screen is both the input and output surface: on-screen content crosses into the agent's [context](../concepts/context.md) as screenshots, and the agent's actions cross back onto the screen as GUI interactions. Third-party applications and websites share the display with the agent - their content is untrusted but visually co-located with trusted UI elements, and the agent has no reliable mechanism to distinguish between them. Unlike API-style tools where schemas define a fixed capability boundary, the computer use agent's action space is whatever the GUI exposes - effectively unbounded. If supplementary tools ([shell](../concepts/shell-tool.md), text editor) are present, they operate within the same sandbox and share the agent's trust zone.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - on-screen content (web pages, documents, images) containing adversarial instructions that the agent follows when processing screenshots
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs, leading to incorrect GUI actions
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints, including visual tricks that evade content filters
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions through GUI interactions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in the agent's actions and outputs
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality or cause unintended actions
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's visual understanding or action selection
- [Tool misuse](../threats/tool-misuse.md) - authorized but harmful GUI actions (e.g., making purchases, sending messages, navigating to malicious sites, modifying account settings)
- [Tool output poisoning](../threats/tool-output-poisoning.md) - malicious content in screenshots that hijacks subsequent agent behavior when processed as tool results
- [Data exfiltration](../threats/data-exfiltration.md) - sensitive data extracted by typing it into web forms, navigating to attacker-controlled URLs, or copying it through GUI actions
- [Denial of service](../threats/denial-of-service.md) - unbounded GUI interaction loops or repeated expensive actions that exhaust resources or budgets
- [Goal manipulation](../threats/goal-manipulation.md) - on-screen instructions that redirect the agent's objectives away from the user's intended task
- [Privilege compromise](../threats/privilege-compromise.md) - sandbox misconfiguration or over-scoped desktop access granting broader capabilities than intended
- [Context poisoning](../threats/context-poisoning.md) - on-screen content (web pages, documents, images) altering agent behavior when captured as screenshots into context
- [Unauthorized code execution](../threats/unauthorized-code-execution.md) - code execution through supplementary shell tools or by navigating to pages that trigger downloads and execution through the GUI
- [Persistence attacks](../threats/persistence-attacks.md) - installing software, browser extensions, or changing system settings through GUI actions that persist beyond the current session
- [Human approval fatigue exploitation](../threats/human-approval-fatigue-exploitation.md) - degrading the quality of human confirmation required for sensitive GUI actions through high volumes of approval requests

## Examples

- OpenAI Operator performing web tasks (shopping, booking, research) in a cloud browser with user confirmation for sensitive actions like purchases and logins.
- Anthropic's computer use reference implementation in a Docker-based Linux desktop where the agent controls applications through screenshots and mouse/keyboard, combined with [bash/shell](../concepts/shell-tool.md) and text editor tools.
- Browser automation agents built on open-source frameworks that use vision models to navigate web UIs for testing, scraping, or workflow automation.
