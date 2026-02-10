# Observability

Observability is the set of tools and practices for understanding and operating AI systems in production by collecting and correlating signals like logs (e.g., [prompts](./prompt.md)/outputs), traces, metrics, [LLM](./llm.md)/version metadata, and user feedback.

AI observability extends general software observability with concerns specific to non-deterministic model outputs: prompt/response logging, token-level cost tracking, [eval](./evals.md) integration, and drift detection across model versions. [Eval runners](./eval-runner.md) often integrate with observability to trace and log each eval step, and production telemetry provides the raw material for building new evals (representative inputs, edge cases, failure patterns). After changes (including [fine-tuning](./fine-tuning.md)), observability helps validate real-world impact and catch regressions.

In [agent](./agent.md) systems, observability is also essential for security: structured traces that link reasoning steps to tool invocations help detect threats like [tool misuse](../threats/tool-misuse.md), [resource overload](../threats/resource-overload.md), [misaligned model behaviors](../threats/misaligned-model-behaviors.md), and [persistence attacks](../threats/persistence-attacks.md) in production, and tamper-evident audit trails ensure that agent actions can be reliably attributed and reconstructed.

## Examples

- Langfuse
- Langsmith
- Braintrust
- Helicone
- Datadog LLM Observability
