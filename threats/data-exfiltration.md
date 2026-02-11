# Data Exfiltration

Data exfiltration is the unauthorized extraction or disclosure of sensitive data from a system to an attacker-controlled destination. In [LLM](../concepts/llm.md) applications, this often happens when the model (or its [tools](../concepts/tools.md)) is manipulated into revealing secrets from its [context](../concepts/context.md) or connected systems.

## Details

Data exfiltration can be direct (the model prints the data in its response) or indirect (the [agent](../concepts/agent.md) sends it via a tool call, writes it to a file, embeds it in a URL, or includes it in logs). It is frequently the end goal of [prompt injection](./prompt-injection.md) and [tool misuse](./tool-misuse.md) attacks: the attacker first gains control of the agent's behavior, then uses that control to extract sensitive data.

Targets commonly include system prompts (see [system prompt extraction](./system-prompt-extraction.md)), API keys and credentials, retrieved documents, user PII, and database contents.

## Examples

- A [prompt injection](./prompt-injection.md) in a retrieved document causes an agent to send API keys to an attacker via email or a webhook.
- A model reveals a hidden system prompt or a confidential retrieved document in its answer.
- A tool call is coerced into exporting database rows that include PII.
- An agent encodes sensitive data into a URL parameter in a markdown image tag, causing the data to be sent to an external server when the image is rendered.

## Mitigations

- Network-level restrictions and output filtering on [tool](../concepts/tools.md) calls
- [Sandboxing](../concepts/sandbox.md) to limit data access and egress paths
- [Tool execution approval](../concepts/tool-execution-approval.md) for actions that transmit data externally

## Synonyms

exfiltration, data leakage, data theft
