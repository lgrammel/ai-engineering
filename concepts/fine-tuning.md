# Fine-tuning

Further training of an existing [LLM](./llm.md) on a narrower dataset to change or improve its behavior (for example [instruction following](./instruction-following.md), [tool](./tools.md) calling, style, safety, or domain expertise). Fine-tuning is typically cheaper than [pretraining](./pretraining.md) from scratch.

Fine-tuning is one form of [post-training](./post-training.md); it changes the LLM's weights so that its behavior during [inference](./inference.md) is different for similar inputs. Preference-based methods (for example RLHF, DPO) are sometimes grouped under fine-tuning and sometimes treated as a separate [post-training](./post-training.md) category; the boundary is context-dependent.

In practice, fine-tuning targets concrete failures measured by [evals](./evals.md), often using training examples sourced or prioritized from production [observability](./observability.md). After fine-tuning, [evals](./evals.md) are often re-run and [observability](./observability.md) data is monitored to confirm improvements and catch regressions.

## Examples

- Fine-tuning a base model to follow a specific support tone and formatting
- Fine-tuning on internal domain documents to improve terminology usage
- Safety fine-tuning to reduce a specific class of policy violations
- Fine-tuning on [tool](./tools.md)-call datasets to teach a model structured tool calling, or to train it on specific [provider-defined or provider-executed tools](./tools.md)
