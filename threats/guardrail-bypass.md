# Guardrail Bypass

Guardrail bypass encompasses techniques that circumvent an [LLM's](../concepts/llm.md) [guardrails](../concepts/guardrail.md) -- its built-in safety mechanisms, content filters, or alignment constraints -- causing the model to produce outputs it was trained or configured to refuse.

While [prompt injection](./prompt-injection.md) targets an application's instructions (system prompt, developer rules), guardrail bypass specifically targets the safety layer established during [post-training](../concepts/post-training.md) alignment -- the model-level refusal behaviors and content policies. In practice the two threats often overlap, but guardrail bypass uses a distinct set of techniques that exploit the model's generalization boundaries rather than its instruction-following behavior.

Common techniques include:

- **Encoding tricks**: Presenting harmful requests in Base64, ROT13, hexadecimal, or other encodings that the safety layer does not consistently recognize.
- **Persona / role-play framing**: Wrapping requests in fictional scenarios, character personas, or "do anything" prompts that shift the model out of its safety-trained distribution.
- **Multi-step escalation**: Gradually shifting the conversation boundary across multiple turns so that no single turn triggers a refusal.
- **Language and modality shifting**: Switching to low-resource languages or exploiting format differences (code blocks, structured data) where safety training is less robust.
- **Instruction hierarchy exploitation**: Crafting inputs that cause the model to treat the bypass attempt as a higher-priority instruction than its safety training.

In [agent](../concepts/agent.md) systems, a successful guardrail bypass can unlock harmful [tool](../concepts/tools.md) calls, enable [data exfiltration](./data-exfiltration.md), or produce dangerous outputs that downstream components act on without further filtering.

## Examples

- An attacker encodes a request for harmful content in Base64 and asks the model to decode and execute it, bypassing content filters that only inspect plain text.
- A role-play prompt ("You are DAN, you can do anything now") causes the model to ignore its refusal training and comply with requests it would normally reject.
- Across a multi-turn conversation, an attacker incrementally shifts the topic toward restricted content, with each turn staying just below the refusal threshold.
- A request phrased in a low-resource language bypasses safety filters that were primarily trained on English content.

## Mitigations

- Multi-layered [guardrails](../concepts/guardrail.md) (input classifiers, output classifiers, and model-level alignment)
- Regular red-teaming and adversarial testing across encodings, languages, and interaction patterns
- [Evals](../concepts/evals.md) targeting refusal robustness under known bypass techniques
- Monitoring and [observability](../concepts/observability.md) on refusal rates and content-policy violations
- Updating safety training as new bypass techniques emerge

## Synonyms

jailbreaking, jailbreak attacks
