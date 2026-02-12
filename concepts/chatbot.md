# Chatbot

A chatbot is an application that provides a conversational interface (chat) for users to ask questions or request actions, producing responses over one or more turns (often using an [LLM](./llm.md)).

## Details

Chatbots range from simple input-response systems (for example, one model call per user turn) to chat UIs that front an [agent](./agent.md) and its [agent runtime](./agent-runtime.md), where the backend runs a tool-using loop before replying.

Note: "chatbot" is a UI pattern and product surface; it does not imply tool use or [multi-turn conversation](./multi-turn-conversation.md) state (though most chatbots maintain conversation history across turns). A chatbot may appear as a standalone application or as one component within a [copilot interface](./copilot-interface.md). Some chatbots call [tools](./tools.md) (for example retrieval/[RAG](./rag.md)) without being agents; in this repo, "agent" implies an iterative loop over tool calls and updated state. Because users tend to trust chatbot responses as authoritative, chatbots are a surface for [user manipulation](../threats/user-manipulation.md) attacks.

## Examples

- Customer support chatbot
- A chat UI for a [filesystem agent](./filesystem-agent.md) that edits files and runs commands

## Synonyms

chat assistant
