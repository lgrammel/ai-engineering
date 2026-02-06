# Observability

Tools and practices for understanding and operating AI systems in production by collecting and correlating signals like logs (e.g., [prompts](./prompt.md)/outputs), traces, metrics, [LLM](./llm.md)/version metadata, and user feedback to support debugging, drift detection, and management of cost, latency, and safety.

Telemetry is a core input to observability: it provides the raw material for [evals](./evals.md) (representative inputs, edge cases, and feedback) and speeds up debugging via traces and error analysis. [Eval runners](./eval-runner.md) often integrate with observability to trace and log each eval step. After changes (including [fine-tuning](./fine-tuning.md)), observability helps validate real-world impact and catch regressions or drift over time.

In [agent](./agent.md) systems, observability is also essential for security: structured traces that link reasoning steps to tool invocations help detect threats like [tool misuse](../threats/tool-misuse.md) or [resource overload](../threats/resource-overload.md) in production, and tamper-evident audit trails ensure that agent actions can be reliably attributed and reconstructed.

## Examples

- Langfuse
- Langsmith
- Braintrust
- Helicone
- Datadog LLM Observability
