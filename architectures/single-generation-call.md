# Single Generation Call

A single [LLM](../concepts/llm.md) [inference](../concepts/inference.md) call where the application assembles a [prompt](../concepts/prompt.md) through [context engineering](../concepts/context-engineering.md), sends it to the model, and consumes the response directly - no [tools](../concepts/tools.md), no loop, no [agent](../concepts/agent.md) behavior.

## Details

This is the simplest AI integration topology. The application controls what goes into the prompt (system instructions, user input, retrieved context, examples) and receives a single model output. All intelligence comes from the model's weights and the quality of the assembled context. Common patterns include classification, extraction, summarization, rewriting, and single-turn question answering.

Because there is no tool access and no iterative loop, the system's attack surface is limited to the prompt input and model output. The application developer controls the [context](../concepts/context.md) boundary: what enters the prompt and how the output is consumed. When the context includes untrusted input (user-supplied text, retrieved documents, third-party data), that input becomes the primary attack vector. [Guardrails](../concepts/guardrail.md) in this architecture are typically input/output classifiers and [structured output](../concepts/structured-output.md) constraints that limit the response format.

## Trust boundaries

The prompt/context is the only input surface. The developer controls what is included: system instructions, user input, and any retrieved or injected context. Output goes directly to the consuming application or user. There is no tool access, no persistent state, and no ability to take actions beyond generating text. The trust boundary is the prompt itself - anything inside it can influence the model's behavior.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in the context can override intended instructions
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies (sycophancy, shortcut-taking) that degrade output quality
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior

## Examples

- A content moderation classifier that labels user-submitted text as safe or unsafe.
- A summarization endpoint that condenses a document into a brief summary.
- A translation service that converts text between languages in a single call.
- A [RAG](../concepts/rag.md) system where retrieval is handled outside the model and the LLM call itself is a single generation step over the assembled context.
