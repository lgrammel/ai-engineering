# Prompt

A prompt is the input sent to an [LLM](./llm.md) to elicit a desired behavior - typically a combination of **instructions**, **[context](./context.md)**, and **examples**.

## Details

Modern LLM APIs structure prompts as a sequence of **messages**, each tagged with a **role**:

- **System**: sets the model's overall persona, behavioral constraints, and ground rules for the conversation. Placed at the beginning of the message sequence and typically treated as the highest-priority instructions by the model.
- **Developer**: carries instructions from the application developer (for example, tool definitions, output format requirements, or policy rules). Some API providers use developer messages as a distinct role separate from system; others treat system and developer as equivalent.
- **User**: contains the end-user's input--questions, requests, or data the model is asked to process.
- **Assistant**: represents the model's own previous responses. In multi-turn conversations, assistant messages are included in the prompt so the model can maintain coherence across turns.

These role distinctions are not purely labeling conventions; they are reinforced during [post-training](./post-training.md). Chat-oriented models are trained on data where system/developer instructions carry higher authority than user messages, which teaches the model to prioritize system-level constraints even when user messages conflict with them. This training-based priority is probabilistic rather than absolute--[prompt injection](../threats/prompt-injection.md) attacks can still override it, especially when adversarial text is embedded in user-supplied content.

Because models treat prompts as their primary source of behavioral guidance, prompts function as a product's "behavior layer"--changing a prompt can shift outputs as much as changing the [LLM](./llm.md) itself. Production prompts are typically authored as [prompt templates](./prompt-template.md)--parameterized structures with placeholders for dynamic content--and rely heavily on [instruction following](./instruction-following.md) for consistent formatting, tone, and policy adherence. [Prompt management](./prompt-management.md) treats these templates as versioned artifacts: validated with [evals](./evals.md) (including regression tests from production failure cases) and monitored with [observability](./observability.md) that captures template versions, key inputs, outputs, latency, cost, and safety signals for debugging and drift detection.

Prompt design is one part of [context engineering](./context-engineering.md), which manages everything that goes into the LLM's context window and how it is structured under a given [context size](./context-size.md). The iterative practice of refining prompt wording, examples, and format is known as [prompt engineering](./prompt-engineering.md).
