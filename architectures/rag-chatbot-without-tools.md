# RAG Chatbot without Tools

A multi-turn conversational application that [retrieves](../concepts/retrieval.md) relevant documents from an indexed corpus per turn and includes them alongside conversation history in the [LLM's](../concepts/llm.md) [context](../concepts/context.md), with no [tool](../concepts/tools.md) access or [agent](../concepts/agent.md) behavior.

## Details

This architecture combines the multi-turn conversation pattern of a [Chatbot without Tools](./chatbot-without-tools.md) with the retrieval system of a [RAG Pipeline](./rag-pipeline.md). Each user turn triggers a [retrieval](../concepts/retrieval.md) step: the application queries the indexed corpus (typically a [vector database](../concepts/vector-database.md) with optional [hybrid search](../concepts/hybrid-search.md) and [reranking](../concepts/reranking.md)), and the retrieved documents are included alongside conversation history and system instructions in the [prompt](../concepts/prompt.md) before a single [LLM](../concepts/llm.md) call. There is no agentic loop - retrieval follows a fixed [AI workflow](../concepts/ai-workflow.md) per turn, not an iterative agent decision.

The user's conversational context influences retrieval queries: prior turns can steer what gets retrieved in subsequent turns, creating an indirect path from accumulated conversation to context selection. This means that over a multi-turn conversation, the user progressively shapes both the conversational context and the retrieved context that the model reasons over. [Guardrails](../concepts/guardrail.md) include input/output classifiers, retrieval quality controls, conversation-level monitoring, and [context engineering](../concepts/context-engineering.md) to separate retrieved documents from system instructions and conversation history.

This is one of the most common production architectures for enterprise AI applications, including customer support bots, internal knowledge assistants, and documentation chatbots.

## Trust boundaries

Three input surfaces feed the prompt: system instructions (developer-controlled), conversation history (user-supplied, accumulates across turns), and retrieved documents (from the indexed corpus). The indexed corpus is a trust boundary: anyone who can write to the corpus can influence model outputs when those documents are retrieved (same as [RAG Pipeline](./rag-pipeline.md)). Conversation history is user-supplied data that accumulates over turns, growing the untrusted input surface with each exchange (same as [Chatbot without Tools](./chatbot-without-tools.md)). The user's messages influence what gets retrieved, creating an indirect path from accumulated conversation to context selection - the user can steer retrieval toward specific corpus content across turns.

## Applicable threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in conversation history (multi-turn injection) and in retrieved documents (indirect injection through indexed content) can override intended instructions
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs, potentially compounded by irrelevant or contradictory retrieved context
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints, including multi-turn jailbreaking and retrieval-assisted bypass
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its instructions across one or more conversation turns
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in model outputs, amplified by both the conversational relationship and the perceived authority of grounded responses
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality, potentially compounding over turns
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's behavior
- [Context poisoning](../threats/context-poisoning.md) - malicious or manipulated documents in the indexed corpus that alter model outputs when retrieved

## Examples

- A customer support [chatbot](../concepts/chatbot.md) that retrieves from a help-article knowledge base to answer questions across a multi-turn conversation.
- An internal company knowledge assistant that retrieves policy documents and maintains conversational context.
- A product documentation [chatbot](../concepts/chatbot.md) that answers follow-up questions using retrieved technical docs.
