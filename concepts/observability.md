# Observability

Tools and practices for understanding and operating AI systems in production by collecting and correlating signals like logs (e.g., [prompts](./prompt.md)/outputs), traces, metrics, [LLM](./llm.md)/version metadata, and user feedback to support debugging, drift detection, and management of cost, latency, and safety.

Telemetry is a core input to observability: it provides the raw material for [evals](./evaluations-evals.md) (representative inputs, edge cases, and feedback) and speeds up debugging via traces and error analysis. [Eval runners](./eval-runner.md) often integrate with observability to trace and log each eval step. After changes (including [fine-tuning](./fine-tuning.md)), observability helps validate real-world impact and catch regressions or drift over time.

## Examples

- Langfuse
- Langsmith
- Braintrust
- Helicone
- Datadog LLM Observability
