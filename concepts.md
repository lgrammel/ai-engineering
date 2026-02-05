# Concepts

This file contains a glossary of concepts.

## AI Telemetry / Observability Tools

Tools and practices for instrumenting and monitoring AI systems in production (for example logging prompts/outputs, traces, metrics, and user feedback) to debug issues, detect drift, and manage cost, latency, and safety.

Telemetry often supplies the raw material for evals (representative inputs, edge cases, and user feedback) and speeds up debugging via traces and error analysis. After you make changes (including fine-tuning), telemetry helps validate the impact in production and detect drift over time.

## Evaluations (Evals)

Evals (evaluations) are systematic tests used to measure and monitor model or system performance on specific tasks. They are used to compare variants, catch regressions, and track metrics like accuracy, safety, and robustness.

Evals are commonly built from real user traffic and failure cases surfaced by telemetry, and they are often used as release gates when changing prompts, tools, models, or infrastructure.

## Fine-tuning

Further training of an existing model on a narrower dataset to change or improve its behavior (for example instruction-following, style, safety, or domain expertise). Fine-tuning is typically cheaper than pretraining from scratch.

In practice, fine-tuning targets concrete failures measured by evals, often using training examples sourced or prioritized from production telemetry. After fine-tuning, you typically re-run evals and monitor telemetry to confirm improvements and catch regressions.

## Inference Provider

An organization that runs models to generate outputs (inference) and exposes them via an API or hosted service. It may serve its own models or third-party models.

Note: many organizations are both model developers and inference providers; these are roles, not mutually exclusive categories.

## Large Language Model (LLM, Model)

A Large Language Model is a neural network trained to predict the next token using large text (and sometimes multimodal) datasets. It can generate and transform text and is commonly used in chatbots and AI agents.

## Model Developer (Model Creator)

An organization that develops model weights via pretraining and/or further training (for example fine-tuning or distillation). The resulting models can be proprietary or open-weight.

