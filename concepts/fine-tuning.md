# Fine-tuning

Further training of an existing [model](./model.md) on a narrower dataset to change or improve its behavior (for example instruction-following, style, safety, or domain expertise). Fine-tuning is typically cheaper than pretraining from scratch.

In practice, fine-tuning targets concrete failures measured by [evals](./evaluations-evals.md), often using training examples sourced or prioritized from production [telemetry](./observability-tools.md). After fine-tuning, [evals](./evaluations-evals.md) are often re-run and [telemetry](./observability-tools.md) is monitored to confirm improvements and catch regressions.

## Examples

- Fine-tuning a base model to follow a specific support tone and formatting
- Fine-tuning on internal domain documents to improve terminology usage
- Safety fine-tuning to reduce a specific class of policy violations
