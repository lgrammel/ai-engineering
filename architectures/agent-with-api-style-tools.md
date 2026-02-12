# Agent with API-Style Tools

An [agent](../concepts/agent.md) that runs a [tool](../concepts/tools.md)-calling loop with structured, API-style tools ([function calling](../concepts/function-calling.md), web search, database queries) but has no filesystem access, [shell](../concepts/shell-tool.md) access, or [computer use](../concepts/computer-use-tool.md) capabilities.

## Details

The agent operates the standard observe-decide-act loop: the [LLM](../concepts/llm.md) receives context, chooses a tool call or generates a message, the [agent runtime](../concepts/agent-runtime.md) executes the tool and returns the result, and the cycle repeats. The key constraint is that all tools are structured API calls with defined schemas - the agent cannot run arbitrary code, read or write files, or interact with a GUI. This limits the agent's capabilities to what the tool schemas explicitly expose.

Tool schemas constrain what the agent can request, but the agent can still invoke tools in harmful combinations or with unexpected arguments within those schemas. Tool outputs re-enter the [context](../concepts/context.md) as data that the model treats as trusted, creating an injection surface: a malicious API response or web page can influence subsequent agent decisions. The iterative loop also introduces resource risks absent in single-call architectures - an agent can enter unbounded tool-call cycles that exhaust API quotas or budgets.

[Guardrails](../concepts/guardrail.md) in this architecture commonly include [tool execution approval](../concepts/tool-execution-approval.md) for high-risk calls, rate limiting and budget caps, input/output validation on tool results, and scoping tool credentials to minimum necessary permissions.

## Trust boundaries

Tool schemas define the capability boundary: the agent can only invoke actions that the tool interfaces expose, with arguments conforming to the schema. Tool outputs cross back into the agent's context as data - they are not inherently trusted but the model typically treats them as reliable. The agent has no access to the host filesystem or operating system. Credentials and permissions attached to tools (API keys, database roles, OAuth scopes) define a second boundary: the agent acts with whatever permissions those credentials grant, which may be broader than intended if credentials are over-scoped.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in the context or tool results can override intended instructions
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior
- [Tool misuse](../threats/tool-misuse.md) - authorized but harmful tool calls (e.g., deleting records, sending emails to wrong recipients)
- [Tool output poisoning](../threats/tool-output-poisoning.md) - malicious data in tool responses that hijacks subsequent agent behavior
- [Data exfiltration](../threats/data-exfiltration.md) - sensitive data extracted through tool calls (e.g., sending context to an external API)
- [Denial of service](../threats/denial-of-service.md) - unbounded tool-call loops or expensive API calls that exhaust quotas and budgets
- [Goal manipulation](../threats/goal-manipulation.md) - redirected agent objectives through injected instructions in tool outputs
- [Privilege compromise](../threats/privilege-compromise.md) - over-scoped tool credentials granting broader access than intended

## Examples

- A customer support agent that queries a knowledge base, looks up order status, and creates tickets through structured APIs.
- A research assistant that calls web search and document retrieval tools to answer questions, with no ability to write files or run code.
- A data analysis agent that queries databases and returns structured results, without shell access or filesystem interaction.
