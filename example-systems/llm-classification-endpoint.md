# LLM Classification Endpoint

A single [LLM](../concepts/llm.md) [inference](../concepts/inference.md) call where the application assembles a [prompt](../concepts/prompt.md), sends it to the model, and consumes the response directly - no [tools](../concepts/tools.md), no loop, no [agent](../concepts/agent.md) behavior.

## Capabilities

- Single [inference](../concepts/inference.md) call
- [Structured output](../concepts/structured-output.md) constraints
- [Guardrails](../concepts/guardrail.md) (input/output classifiers)
- [Context engineering](../concepts/context-engineering.md) (prompt assembly)

## Trust analysis

This is the simplest AI integration topology. The application developer controls the full [context](../concepts/context.md) boundary: what enters the [prompt](../concepts/prompt.md) and how the output is consumed. All intelligence comes from the model's weights and the quality of the assembled context. There is no tool access, no persistent state, and no ability to take actions beyond generating text.

The prompt is the only input surface, and the output goes directly to the consuming application or user. When the context includes untrusted input (user-supplied text, retrieved documents, third-party data), that input becomes the primary vector for [prompt injection](../threats/prompt-injection.md). [Structured output](../concepts/structured-output.md) constraints limit the response format, reducing the range of harmful outputs but not eliminating [hallucination exploitation](../threats/hallucination-exploitation.md) or [guardrail bypass](../threats/guardrail-bypass.md) risks.

This is the baseline trust model that all more complex systems inherit. Every additional capability ([multi-turn conversation](../concepts/multi-turn-conversation.md), [tools](../concepts/tools.md), [retrieval](../concepts/retrieval.md), [agent](../concepts/agent.md) loops) adds trust surfaces on top of this foundation.

## Interaction effects

Minimal - this is the atomic unit. No capabilities interact because there is only one capability (text generation from a prompt). The trust surface is contained entirely within the prompt/response boundary.

## Examples

- A content moderation classifier that labels user-submitted text as safe or unsafe.
- A summarization endpoint that condenses a document into a brief summary.
- A translation service that converts text between languages in a single call.
- An extraction endpoint that pulls structured data from unstructured text.
