# Enterprise RAG Chatbot

A [multi-turn](../concepts/multi-turn-conversation.md) [chatbot](../concepts/chatbot.md) that [retrieves](../concepts/retrieval.md) relevant documents from an internal corpus per turn and includes them alongside conversation history in the [LLM's](../concepts/llm.md) [context](../concepts/context.md), with no [tool](../concepts/tools.md) access or [agent](../concepts/agent.md) behavior.

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [RAG](../concepts/rag.md) ([retrieval](../concepts/retrieval.md), [embedding](../concepts/embedding.md), [vector database](../concepts/vector-database.md), optional [hybrid search](../concepts/hybrid-search.md) and [reranking](../concepts/reranking.md))
- [Chatbot](../concepts/chatbot.md) interface
- [Guardrails](../concepts/guardrail.md) (input/output classifiers, retrieval quality controls)
- [Context engineering](../concepts/context-engineering.md) (separating retrieved documents from system instructions and conversation history)

## Trust analysis

Three input surfaces feed the prompt: system instructions (developer-controlled), conversation history (user-supplied, accumulates across turns), and retrieved documents (from the indexed corpus). The indexed corpus is a trust boundary: anyone who can write to the corpus can influence model outputs when those documents are retrieved. This makes indirect [prompt injection](../threats/prompt-injection.md) through indexed documents the primary architecture-specific attack vector.

Conversation history accumulates untrusted user input across turns. The user's messages influence what gets retrieved, creating an indirect path from accumulated conversation to context selection - the user can steer retrieval toward specific corpus content across turns. This means [multi-turn conversation](../concepts/multi-turn-conversation.md) and [RAG](../concepts/rag.md) interact: prior turns shape which documents enter context in subsequent turns.

There is no agentic loop - retrieval follows a fixed [AI workflow](../concepts/ai-workflow.md) per turn, not an iterative agent decision. The system cannot take actions beyond generating text, which limits the blast radius of any compromise to the quality and trustworthiness of the generated output.

This is one of the most common production architectures for enterprise AI applications, including customer support bots, internal knowledge assistants, and documentation chatbots.

## Interaction effects

- **Multi-turn conversation + RAG**: Conversation history influences retrieval queries across turns, creating a progressive steering effect where users shape both the conversational context and the retrieved context the model reasons over. An adversary in the corpus can plant content that is more likely to be retrieved as the conversation develops toward certain topics.
- **Multi-turn injection + corpus injection**: Multi-turn [prompt injection](../threats/prompt-injection.md) and indirect injection through the corpus are independent attack vectors that can reinforce each other - an attacker who controls both can build adversarial context through conversation while planting supporting documents in the corpus.

## Examples

- A customer support chatbot that retrieves from a help-article knowledge base to answer questions across a multi-turn conversation.
- An internal company knowledge assistant that retrieves policy documents and maintains conversational context.
- A product documentation chatbot that answers follow-up questions using retrieved technical docs.
