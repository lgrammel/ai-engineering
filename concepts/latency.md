# Latency

Latency in [LLM](./llm.md) systems refers to the time-based performance dimensions of [inference](./inference.md): how quickly a model begins responding and how fast it generates output.

The two primary metrics are time to first token (TTFT) -- the delay between sending a request and receiving the first generated [token](./token.md) -- and inter-token latency (generation speed), often expressed as tokens per second. TTFT is dominated by the prefill phase, where the model processes all input tokens; it scales with [context size](./context-size.md) and model size. Generation speed depends on the per-token decode step and is relatively constant per model configuration. End-to-end latency combines both phases and depends additionally on output length.

Key factors that affect latency include model size and architecture, input length, hardware (GPU type, memory bandwidth), [model quantization](./model-quantization.md) (lower precision reduces compute per token), [prompt caching](./prompt-caching.md) (skipping redundant prefill computation), and provider-side batching and load. [Streaming](./streaming.md) does not reduce actual generation time but lowers perceived latency by delivering tokens as they are produced. Latency, cost, and output quality form the primary tradeoff space for [model routing](./model-routing.md) and [inference provider](./inference-provider.md) choice; [observability](./observability.md) systems track these metrics in production to detect regressions and inform optimization.

## Examples

- A chatbot optimized for low TTFT so users see a response begin within a few hundred milliseconds.
- A coding agent where end-to-end latency matters more than TTFT because the full response is needed before the next tool call can execute.
- Switching to a smaller or quantized model to reduce latency at an acceptable quality cost.

## Synonyms

inference latency, response time, time to first token, TTFT
