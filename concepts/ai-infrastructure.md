# AI Infrastructure

AI infrastructure is infrastructure built or adapted to support [LLM](./llm.md) and [agent](./agent.md)-based systems in production, addressing concerns that general-purpose infrastructure does not cover well: GPU compute provisioning, model lifecycle management, [inference](./inference.md)-specific scaling, non-deterministic output handling, and [eval](./evals.md)/[observability](./observability.md) integration.

## Details

LLM workloads differ from typical web services in ways that make general-purpose infrastructure insufficient. Inference is GPU-bound with bursty demand patterns, model artifacts are large and versioned independently of application code, and outputs are non-deterministic - making quality assurance dependent on [evals](./evals.md) rather than traditional assertion-based testing. [Latency](./latency.md) and [cost](./inference-cost.md) tradeoffs are shaped by [token](./token.md)-based pricing, [prompt caching](./prompt-caching.md), and [batch inference](./batch-inference.md), none of which map to conventional request-based scaling.

AI infrastructure addresses these gaps across multiple layers. At the compute layer, it manages GPU provisioning, inference runtimes, and request batching. At the middleware layer, [AI gateways](./ai-gateway.md) handle routing, [rate limiting](./rate-limiting.md), and provider abstraction, while [observability](./observability.md) tooling tracks model-specific metrics like token usage, [latency](./latency.md), and output quality. At the platform layer, [agent hosting](./agent-hosting-platform.md) and [eval runners](./eval-runner.md) provide higher-level orchestration. Specialized security boundaries - [sandboxes](./sandbox.md) for [code execution](./code-execution-tool.md), [guardrails](./guardrail.md) for output filtering - address risks unique to systems with non-deterministic, potentially harmful outputs.

## Examples

- Model hosting - serving model weights behind an API with GPU allocation, autoscaling, and request queuing
- [AI gateways](./ai-gateway.md) - routing, [rate limiting](./rate-limiting.md), and provider abstraction across multiple [inference providers](./inference-provider.md)
- [Observability](./observability.md) for AI systems - tracing, token usage tracking, and output quality monitoring
- AI search/[RAG](./rag.md) infrastructure - vector databases, [embedding](./embedding.md) pipelines, and retrieval services
- [Eval runners](./eval-runner.md) - automated evaluation pipelines for measuring model and system output quality
- [Sandboxes](./sandbox.md) - isolated execution environments for LLM-generated [code execution](./code-execution-tool.md)
- [Agent hosting platforms](./agent-hosting-platform.md) - managed environments for deploying and scaling [agent](./agent.md) workloads
