# Red Teaming

Red teaming is the practice of systematically probing an AI system with adversarial inputs, scenarios, and techniques to discover vulnerabilities, safety failures, and unintended behaviors before they occur in production.

Red teaming goes beyond standard [evals](./evals.md) by simulating realistic attack scenarios: testers (human or automated) attempt [prompt injection](../threats/prompt-injection.md), [guardrail bypass](../threats/guardrail-bypass.md), [hallucination](./hallucination.md) exploitation, and other [threats](../threats/index.md) to find failure modes that conventional test suites miss. Results feed back into [alignment](./alignment.md) improvements, [guardrail](./guardrail.md) tuning, and targeted eval creation.

In practice, red teaming is an ongoing process rather than a one-time assessment, because model updates, new tool integrations, and changing threat landscapes can introduce new vulnerabilities.

## Examples

- A dedicated team crafting adversarial prompts to bypass a model's safety training before release.
- Automated red-teaming pipelines that generate and test thousands of attack variants against guardrails.
- Pre-deployment testing of an agent system for prompt injection, tool misuse, and data exfiltration scenarios.

## Synonyms

adversarial testing, AI red teaming
