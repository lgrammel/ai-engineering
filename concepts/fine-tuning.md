# Fine-tuning

Further training of an existing [LLM](./llm.md) on a narrower dataset to change or improve its behavior (for example [instruction following](./instruction-following.md), [tool](./tools.md) calling, style, safety, or domain expertise). Fine-tuning is typically cheaper than [pretraining](./pretraining.md) from scratch.

## Details

Fine-tuning is one form of [post-training](./post-training.md); it changes the LLM's weights so that its behavior during [inference](./inference.md) is different for similar inputs. This contrasts with [in-context learning](./in-context-learning.md), which adapts behavior through examples in the [prompt](./prompt.md) without modifying weights. Preference-based methods (for example RLHF, DPO) are sometimes grouped under fine-tuning and sometimes treated as a separate [post-training](./post-training.md) category; the boundary is context-dependent.

Full fine-tuning updates all model parameters, which is expensive in compute and memory and risks catastrophic forgetting (degrading capabilities the model already had). Parameter-efficient fine-tuning (PEFT) methods address this by updating only a small fraction of parameters while keeping the rest frozen. The most widely adopted PEFT technique is LoRA (Low-Rank Adaptation), which injects small trainable low-rank matrices into the model's existing layers rather than modifying the original weights directly. Because the trainable parameter count is orders of magnitude smaller, LoRA requires significantly less GPU memory and training time, and the resulting adapter weights are small enough to be stored, versioned, and swapped independently of the base model. QLoRA extends this further by combining LoRA with [model quantization](./model-quantization.md), enabling fine-tuning of large models on consumer-grade hardware. Other PEFT approaches include prefix tuning (prepending trainable vectors to attention layers) and adapter layers (inserting small bottleneck modules between existing layers), though LoRA has become the dominant default in practice.

[Inference providers](./inference-provider.md) increasingly offer hosted fine-tuning APIs that abstract away PEFT mechanics, letting application developers supply training data and receive a fine-tuned model endpoint without managing GPU infrastructure or adapter merging. Common practice is to fine-tune on hundreds to thousands of curated examples rather than the millions needed for [pretraining](./pretraining.md).

In practice, fine-tuning targets concrete failures measured by [evals](./evals.md), often using training examples sourced or prioritized from production [observability](./observability.md). After fine-tuning, [evals](./evals.md) are often re-run and [observability](./observability.md) data is monitored to confirm improvements and catch regressions.

## Examples

- Fine-tuning a base model to follow a specific support tone and formatting
- Fine-tuning on internal domain documents to improve terminology usage
- Safety fine-tuning to reduce a specific class of policy violations
- Fine-tuning on [tool](./tools.md)-call datasets to teach a model structured tool calling, or to train it on specific [provider-defined or provider-executed tools](./tools.md)
- Using LoRA to adapt a model's response style with a small dataset while preserving its general capabilities
- QLoRA fine-tuning of a 70B-parameter model on a single GPU that would otherwise require a multi-GPU cluster for full fine-tuning

## Synonyms

SFT (supervised fine-tuning), PEFT (parameter-efficient fine-tuning)
