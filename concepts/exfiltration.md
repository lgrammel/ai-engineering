# Exfiltration

Exfiltration is the unauthorized extraction or disclosure of sensitive data from a system to an attacker-controlled destination. In [LLM](./llm.md) applications, this often happens when the model (or its tools) is manipulated into revealing secrets from its [context](./context.md) or connected systems.

Exfiltration can be direct (the model prints the data) or indirect (the agent sends it via a tool call, writes it to a file, or includes it in logs).

## Examples

- A prompt injection causes an agent to send API keys to an attacker via email or a webhook.
- A model reveals a hidden system prompt or a confidential retrieved document in its answer.
- A tool call is coerced into exporting database rows that include PII.

## Synonyms

data exfiltration, data leakage (overlapping), data theft.
