# ML Engineering

ML engineering is the discipline of building, training, and optimizing machine learning models - covering data curation, model architecture design, [training](./training.md) pipelines, and [inference](./inference.md) optimization. Its primary output is a trained model rather than an end-user application.

## Details

ML engineering spans the full model lifecycle: assembling and cleaning training data, designing or selecting model architectures (e.g. [transformer](./transformer-architecture.md)-based [LLMs](./llm.md)), running [pretraining](./pretraining.md) and [post-training](./post-training.md) (including [fine-tuning](./fine-tuning.md), [RLHF](./rlhf.md), and [alignment](./alignment.md)), and applying efficiency techniques like [distillation](./distillation.md) and [model quantization](./model-quantization.md). [Model developers](./model-developer.md) are the primary practitioners of ML engineering.

This distinguishes it from [AI engineering](./ai-engineering.md), which takes trained models as a given and focuses on the application layer - [prompt](./prompt.md) design, [context engineering](./context-engineering.md), [tool](./tools.md) orchestration, [RAG](./rag.md) pipelines, [evals](./evals.md), and production concerns. The two disciplines overlap at boundaries like fine-tuning (where application developers may fine-tune models for specific use cases) and inference optimization, but their day-to-day toolchains and deliverables differ substantially.

## Synonyms

machine learning engineering
