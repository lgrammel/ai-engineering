# Multi-turn Conversation

A structural property of AI systems where conversation history accumulates across turns, with each exchange adding content to the [LLM's](./llm.md) [context](./context.md). The application manages this growing history - storing, truncating, or summarizing prior turns to fit within the model's [context size](./context.md).

## Details

Multi-turn conversation is distinct from the [chatbot](./chatbot.md) UI pattern: a chatbot is an interface, while multi-turn conversation is the underlying context accumulation behavior. Many systems combine both - a chatbot with multi-turn state - but [agents](./agent.md) and [AI workflows](./ai-workflow.md) can also maintain multi-turn conversation state without a chat UI.

Each turn adds more untrusted input to the context, creating an expanding attack surface over the course of a conversation. This enables attack patterns that single-turn calls do not: a user can build up adversarial context incrementally across turns, making [prompt injection](../threats/prompt-injection.md) and [guardrail bypass](../threats/guardrail-bypass.md) attempts harder for per-turn defenses to detect. The accumulated history also creates compounding risks from [misaligned model behaviors](../threats/misaligned-model-behaviors.md) such as sycophancy, where the model reinforces its own prior responses across turns.

History management decisions - such as [prompt compaction](./prompt-compaction.md), truncation, or summarization - directly affect both the user experience and the security surface: aggressive truncation reduces the accumulated attack surface but may lose important conversational context.

## Examples

- A [chatbot](./chatbot.md) that maintains a full transcript of prior turns and includes it in each request to the model.
- An [agent](./agent.md) that accumulates tool results and user messages across an extended task session.
- A customer support system that summarizes older turns and keeps recent turns verbatim to balance context limits with conversational continuity.
