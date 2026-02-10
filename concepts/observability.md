# Observability

Observability is the set of tools and practices for understanding and operating AI systems in production by collecting and correlating signals like logs (e.g., [prompts](./prompt.md)/outputs), traces, metrics, [LLM](./llm.md)/version metadata, and user feedback.

## Details

AI observability extends general software observability with concerns specific to non-deterministic model outputs: prompt/response logging, token-level cost tracking, [eval](./evals.md) integration, and drift detection across model versions. [Eval runners](./eval-runner.md) often integrate with observability to trace and log each eval step, and production telemetry provides the raw material for building new evals (representative inputs, edge cases, failure patterns). After changes (including [fine-tuning](./fine-tuning.md)), observability helps validate real-world impact and catch regressions.

In [agent](./agent.md) systems, observability is also essential for security: structured traces that link reasoning steps to tool invocations help detect threats like [tool misuse](../threats/tool-misuse.md), [resource overload](../threats/resource-overload.md), [misaligned model behaviors](../threats/misaligned-model-behaviors.md), and [persistence attacks](../threats/persistence-attacks.md) in production, and audit trails can support reliable attribution and reconstruction of agent actions, particularly when backed by append-only storage and access controls.

## Examples

- Langfuse
- Langsmith
- Braintrust
- Helicone
- Datadog LLM Observability
