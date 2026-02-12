# ChatGPT

OpenAI's ChatGPT is a [multi-turn](../concepts/multi-turn-conversation.md) conversational AI product that combines a [chatbot](../concepts/chatbot.md) interface with an [agent](../concepts/agent.md) loop, [code execution](../concepts/code-execution-tool.md), [computer use](../concepts/computer-use-tool.md), [RAG](../concepts/rag.md)/[web search](../concepts/web-search-tool.md), and [agent memory](../concepts/agent-memory.md), all running in server-side [sandboxes](../concepts/sandbox.md).

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Code execution tool](../concepts/code-execution-tool.md) (Python in a sandboxed environment)
- [Computer use tool](../concepts/computer-use-tool.md)
- [RAG](../concepts/rag.md) (file search over uploaded documents)
- [Web search tool](../concepts/web-search-tool.md)
- [Agent memory](../concepts/agent-memory.md) (cross-session persistence)
- [Sandbox](../concepts/sandbox.md) (server-side isolation for code execution and browsing)
- [Structured output](../concepts/structured-output.md)
- [Guardrails](../concepts/guardrail.md) (model-level and application-level)

## Trust analysis

ChatGPT operates as a broad-capability agent behind a conversational interface. The agent loop can select from multiple tools per turn - code execution, web search, file search, computer use - with the model deciding which tools to invoke based on the conversation. The sandbox is the critical security boundary: code execution runs in an ephemeral server-side environment with restricted filesystem and network access, and computer use operates in an isolated browser environment.

The [code execution tool](../concepts/code-execution-tool.md) has no schema boundary - generated code can do anything the sandbox permits, making sandbox quality the sole containment mechanism. User-uploaded files enter the sandbox and become part of the agent's operating environment, where their content can influence reasoning (through the context) and be operated on by generated code. The ephemeral nature of the sandbox limits [persistence attacks](../threats/persistence-attacks.md): generated files and state are discarded after the session.

[Web search](../concepts/web-search-tool.md) results and uploaded documents introduce external content into the agent's context, creating injection surfaces for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md) through adversarial web pages or document content. [Agent memory](../concepts/agent-memory.md) persists information across sessions, creating a durable influence surface - a compromised session can write poisoned memories that affect future sessions.

The [multi-turn conversation](../concepts/multi-turn-conversation.md) pattern means the context accumulates across turns, and the model's broad capabilities make the impact of a successful [prompt injection](../threats/prompt-injection.md) high: an attacker who gains influence over the model's behavior can direct code execution, web browsing, and file operations.

## Interaction effects

- **Code execution + uploaded files + sandbox**: Uploaded files can contain adversarial content that influences code generation. The sandbox must contain both accidental errors and deliberately malicious code. Since the code execution tool has no schema boundary, the sandbox is the only barrier between the model's output and arbitrary computation.
- **Web search + agent loop**: The agent can be directed (via [prompt injection](../threats/prompt-injection.md) in web content) to search for additional attacker-controlled pages, creating a chain of poisoned context that compounds across the agent loop.
- **Agent memory + multi-turn conversation**: Memories persist across sessions and are loaded into future conversations as trusted context, creating a cross-session [context poisoning](../threats/context-poisoning.md) vector. A single compromised interaction can have lasting effects on future sessions.
- **Broad tool set + user trust**: The combination of authoritative-seeming conversation, computation results, and web-sourced information amplifies [user manipulation](../threats/user-manipulation.md) risk - users are more likely to trust outputs that appear backed by code execution and web sources.
