# Chatbot without Tools

A multi-turn conversational application where an [LLM](../concepts/llm.md) generates responses based on system instructions and accumulated conversation history, with no [tool](../concepts/tools.md) access or [agent](../concepts/agent.md) behavior.

## Details

This architecture extends the [Single Generation Call](./single-generation-call.md) pattern with multi-turn conversation state. Each turn, the application assembles a [prompt](../concepts/prompt.md) from system instructions and the conversation history (prior user and assistant messages), sends it to the model, and returns the response to the user. The application manages conversation history - storing, truncating, or summarizing ([prompt compaction](../concepts/prompt-compaction.md)) prior turns to fit within the model's [context size](../concepts/context-size.md). There are no [tools](../concepts/tools.md), no [retrieval](../concepts/retrieval.md), and no agentic loop: all output comes from the model's weights plus the assembled conversational context.

The key architectural difference from a [Single Generation Call](./single-generation-call.md) is the accumulation of user-supplied content across turns. Each turn adds more untrusted input to the context, creating an expanding attack surface over the course of a conversation. Multi-turn conversations enable attack patterns that single-turn calls do not: a user can build up adversarial context incrementally across turns, making [prompt injection](../threats/prompt-injection.md) and [guardrail bypass](../threats/guardrail-bypass.md) attempts harder for per-turn defenses to detect. [Guardrails](../concepts/guardrail.md) in this architecture are typically input/output classifiers, [structured output](../concepts/structured-output.md) constraints, and conversation-level monitoring that tracks behavioral drift across turns.

## Trust boundaries

The prompt/context is the only input surface, and output goes directly to the user - the same boundary as a [Single Generation Call](./single-generation-call.md). There is no tool access, no persistent state beyond the conversation, and no ability to take actions beyond generating text. Conversation history is user-supplied data that accumulates over turns, growing the untrusted input surface with each exchange. The application controls system instructions and history management policy (what is kept, summarized, or dropped), which determines how much accumulated user input reaches the model at any given turn.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in conversation history can override intended instructions, with multi-turn conversations enabling incremental injection across turns
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints, including multi-turn jailbreaking where adversarial context is built up gradually
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions across one or more conversation turns
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs, amplified by the relationship-building dynamic of multi-turn conversation
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies (sycophancy, shortcut-taking) that degrade output quality, potentially compounding over turns as the model reinforces its own prior responses
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior

## Examples

- A general-purpose chat assistant (e.g., basic ChatGPT usage without tools or search) that maintains conversation context across turns.
- A customer-facing FAQ [chatbot](../concepts/chatbot.md) that answers questions from its training knowledge across multiple turns.
- An internal company [chatbot](../concepts/chatbot.md) for policy questions that maintains conversation context but has no access to external data sources.
