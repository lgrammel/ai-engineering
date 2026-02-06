# Prompt

A prompt is the input sent to an [LLM](./llm.md) to elicit a desired behavior--typically a combination of **instructions**, **[context](./context.md)**, and **examples**.

Modern LLM APIs structure prompts as a sequence of **messages**, each tagged with a **role**. The most common roles are:

- **System**: sets the model's overall persona, behavioral constraints, and ground rules for the conversation. Placed at the beginning of the message sequence and typically treated as the highest-priority instructions by the model.
- **Developer**: carries instructions from the application developer (for example, tool definitions, output format requirements, or policy rules). Some API providers use developer messages as a distinct role separate from system; others treat system and developer as equivalent.
- **User**: contains the end-user's input--questions, requests, or data the model is asked to process.
- **Assistant**: represents the model's own previous responses. In multi-turn conversations, assistant messages are included in the prompt so the model can maintain coherence across turns.

The role distinction is not purely a labeling convention; it is reinforced during [post-training](./post-training.md). Chat-oriented models are trained on data where system/developer instructions carry higher authority than user messages, which teaches the model to prioritize system-level constraints even when user messages conflict with them. This training-based priority is probabilistic rather than absolute--[prompt injection](../threats/prompt-injection.md) attacks can still override it, especially when adversarial text is embedded in user-supplied content.

Many production prompts rely on [instruction following](./instruction-following.md) to get consistent formatting, tone, and policy adherence from the same underlying model.

Prompts are part of the product's "behavior layer": changing a prompt can change outputs as much as changing the [LLM](./llm.md). In production, prompt changes are often managed like code changes--validated with [evals](./evals.md) (including regression tests from production failure cases) and monitored with [observability](./observability.md) that capture prompt/template versions, key inputs, outputs, latency, cost, and safety signals for debugging and drift detection.

Prompting is one input to [context engineering](./context-engineering.md), which manages what goes into the LLM's context window and how it is structured under a given [context size](./context-size.md).
