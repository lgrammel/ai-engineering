# AI Engineering

AI engineering is the discipline of building, integrating, and operating applications and systems on top of [foundation models](./llm.md), primarily through API-based integration rather than model training.

## Details

AI engineering takes pre-trained models as a given and focuses on the application layer: [prompt](./prompt.md) design, [context engineering](./context-engineering.md), [tool](./tools.md) orchestration, [RAG](./rag.md) pipelines, [agent](./agent.md) workflows, [guardrails](./guardrail.md), [evals](./evals.md), and production concerns like [latency](./latency.md), [observability](./observability.md), and cost management. The core output is a working AI-powered product or system, not a trained model.

This distinguishes it from ML engineering, which centers on the model lifecycle - data curation, model architecture design, [training](./training.md), [fine-tuning](./fine-tuning.md), and inference optimization. ML engineering produces models; AI engineering produces systems that use them. The two disciplines overlap at boundaries like fine-tuning and [model quantization](./model-quantization.md), but their day-to-day concerns, toolchains, and deliverables differ substantially.

Typical AI engineering work includes selecting and routing between [inference providers](./inference-provider.md), designing [structured outputs](./structured-output.md), building [multi-agent systems](./multi-agent-system.md), implementing [human-in-the-loop](./human-in-the-loop.md) patterns, and evaluating system behavior end-to-end.
