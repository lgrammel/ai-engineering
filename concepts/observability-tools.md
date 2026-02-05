# Observability Tools

Tools and practices for understanding and operating AI systems in production by collecting and correlating signals like logs (e.g., [prompts](./prompt.md)/outputs), traces, metrics, [model](./large-language-model.md)/version metadata, and user feedback--so you can debug issues, detect drift, and manage cost, latency, and safety.

Telemetry is a core input to observability: it provides the raw material for [evals](./evaluations-evals.md) (representative inputs, edge cases, and feedback) and speeds up debugging via traces and error analysis. After changes (including [fine-tuning](./fine-tuning.md)), observability helps validate real-world impact and catch regressions or drift over time.
