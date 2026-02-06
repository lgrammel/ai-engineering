# Prompt

A prompt is the input sent to an [LLM](./llm.md) to elicit a desired behavior--typically a combination of **instructions**, **[context](./context.md)**, and **examples** (often structured as system/developer/user messages or a reusable template with variables).

Prompts are part of the product's "behavior layer": changing a prompt can change outputs as much as changing the [LLM](./llm.md). In production, prompt changes are often managed like code changes--validated with [evals](./evaluations-evals.md) (including regression tests from production failure cases) and monitored with [observability tools](./observability-tools.md) that capture prompt/template versions, key inputs, outputs, latency, cost, and safety signals for debugging and drift detection.

Prompting is one input to [context engineering](./context-engineering.md), which manages what goes into the LLM's context window and how it is structured under a given [context size](./context-size.md).
