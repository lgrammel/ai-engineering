# Model Quantization

Model quantization is the process of reducing the numerical precision of a model's weights and/or activations (e.g., from 32-bit or 16-bit floating point to 8-bit or 4-bit integers) to decrease memory footprint, speed up [inference](./inference.md), and reduce hardware requirements.

Quantization makes it practical to run large [LLMs](./llm.md) on consumer hardware or to serve them at lower cost in production. The trade-off is a potential loss in output quality: lower-precision representations can introduce rounding errors that degrade the model's capabilities, particularly on tasks requiring nuanced reasoning. The severity of this trade-off depends on the quantization method (post-training quantization vs. quantization-aware [training](./training.md)), the target precision, and the model size -- larger models tend to be more robust to quantization.

Combined with [distillation](./distillation.md), quantization is a primary technique for making large models deployable in resource-constrained settings. [Inference providers](./inference-provider.md) commonly apply quantization to reduce serving costs while maintaining acceptable quality.

## Examples

- Running a 70B-parameter model quantized to 4-bit precision on a consumer GPU that could not fit the full-precision version.
- An [inference provider](./inference-provider.md) serving a quantized model variant to reduce per-request cost and latency.
- Quantization-aware training that fine-tunes a model while accounting for reduced precision, preserving more quality than post-training quantization.

## Synonyms

quantization, weight quantization
