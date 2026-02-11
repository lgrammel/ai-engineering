# Guardrail

A guardrail is a safety mechanism that constrains an AI model's or [agent's](./agent.md) behavior to stay within intended boundaries, preventing harmful, off-topic, or policy-violating outputs and actions.

## Details

Guardrails operate at multiple levels. Model-level guardrails are baked in during [post-training](./post-training.md) (for example, refusal behaviors and safety [alignment](./alignment.md)). Application-level guardrails are added by developers around the model - input classifiers that block or rewrite dangerous [prompts](./prompt.md) before they reach the model, output classifiers that filter or flag responses after generation, and structured output constraints that limit what the model can produce. System-level guardrails protect the broader [agent](./agent.md) runtime environment through mechanisms like [sandboxing](./sandbox.md), [human-in-the-loop](./human-in-the-loop.md) review (most commonly [tool execution approval](./tool-execution-approval.md)), and permission boundaries that limit what actions an agent can take regardless of what the model requests.

Effective guardrail strategies are typically layered: no single guardrail is sufficient on its own, because each level addresses different failure modes. Model-level alignment can be circumvented through [guardrail bypass](../threats/guardrail-bypass.md) techniques, application-level filters can be evaded by novel phrasing, and system-level controls can be undermined by [privilege compromise](../threats/privilege-compromise.md) or [misaligned model behaviors](../threats/misaligned-model-behaviors.md). Defense in depth - combining guardrails across levels - reduces the likelihood that any single bypass succeeds end to end.

## Examples

- Refusal training during [post-training](./post-training.md) that causes a model to decline requests for harmful content
- An input classifier that detects and blocks [prompt injection](../threats/prompt-injection.md) attempts before they reach the model
- An output filter that scans model responses for PII or policy-violating content before returning them to the user
- [Tool execution approval](./tool-execution-approval.md) requiring human confirmation for high-risk agent actions
- Rate limiting and resource caps that prevent [resource overload](../threats/resource-overload.md) in agent systems

## Synonyms

safety guardrail, AI guardrail, safety barrier
