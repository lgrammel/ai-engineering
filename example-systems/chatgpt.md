# ChatGPT

OpenAI's ChatGPT is a [multi-turn](../concepts/multi-turn-conversation.md) conversational AI product that combines a [chatbot](../concepts/chatbot.md) interface with an [agent](../concepts/agent.md) loop, [image understanding](../concepts/multimodal-model.md), [image generation](../concepts/multimodal-model.md), [code execution](../concepts/code-execution-tool.md), [computer use](../concepts/computer-use-tool.md), [RAG](../concepts/rag.md)/[web search](../concepts/web-search-tool.md), and [agent memory](../concepts/agent-memory.md), all running in server-side [sandboxes](../concepts/sandbox.md).

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Image understanding](../concepts/multimodal-model.md) (vision input processing)
- [Image generation](../concepts/multimodal-model.md) (DALL-E)
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

[Image understanding](../concepts/multimodal-model.md) adds a visual [prompt injection](../threats/prompt-injection.md) surface: adversarial content embedded in images (as visible or near-invisible text, QR codes, or steganographic patterns) can redirect model behavior. This is particularly concerning because images appear benign to human reviewers while containing instructions the model processes. User-uploaded images, images encountered during web browsing, and screenshots all become potential injection vectors that bypass text-based input filters.

[Image generation](../concepts/multimodal-model.md) (DALL-E) introduces content manipulation risks: the model can produce photorealistic images that could be mistaken for photographs or used to create fabricated visual evidence. [Guardrails](../concepts/guardrail.md) filter both generation prompts and outputs, but these are probabilistic and subject to [guardrail bypass](../threats/guardrail-bypass.md).

[Web search](../concepts/web-search-tool.md) results and uploaded documents introduce external content into the agent's context, creating injection surfaces for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md) through adversarial web pages or document content. [Agent memory](../concepts/agent-memory.md) persists information across sessions, creating a durable influence surface - a compromised session can write poisoned memories that affect future sessions.

The [multi-turn conversation](../concepts/multi-turn-conversation.md) pattern means the context accumulates across turns, and the model's broad capabilities make the impact of a successful [prompt injection](../threats/prompt-injection.md) high: an attacker who gains influence over the model's behavior can direct code execution, web browsing, image generation, and file operations.

## Interaction effects

- **Code execution + uploaded files + sandbox**: Uploaded files can contain adversarial content that influences code generation. The sandbox must contain both accidental errors and deliberately malicious code. Since the code execution tool has no schema boundary, the sandbox is the only barrier between the model's output and arbitrary computation.
- **Image understanding + agent loop + web browsing**: Images from untrusted sources (user uploads, web pages, screenshots from computer use) can contain visual [prompt injection](../threats/prompt-injection.md) - adversarial content embedded in images that redirects model behavior. This injection surface bypasses text-based input filters and is difficult for human reviewers to detect, making it a particularly stealthy attack vector across the agent loop.
- **Image generation + multi-turn conversation**: The model can generate photorealistic images within a conversation, amplifying [user manipulation](../threats/user-manipulation.md) risk. Generated images that appear authentic lend false credibility to claims, and when combined with authoritative conversation and web-sourced information, can create convincing but fabricated visual evidence.
- **Image understanding + image generation**: The model can analyze an input image and generate a modified version, enabling content manipulation workflows - such as altering text in screenshots, modifying visual evidence, or creating variations of real photographs - that neither capability alone would support.
- **Web search + agent loop**: The agent can be directed (via [prompt injection](../threats/prompt-injection.md) in web content) to search for additional attacker-controlled pages, creating a chain of poisoned context that compounds across the agent loop.
- **Agent memory + multi-turn conversation**: Memories persist across sessions and are loaded into future conversations as trusted context, creating a cross-session [context poisoning](../threats/context-poisoning.md) vector. A single compromised interaction can have lasting effects on future sessions.
- **Broad tool set + user trust**: The combination of authoritative-seeming conversation, computation results, generated images, and web-sourced information amplifies [user manipulation](../threats/user-manipulation.md) risk - users are more likely to trust outputs that appear backed by code execution, visual evidence, and web sources.

## Threats

- [Prompt injection](../threats/prompt-injection.md) - untrusted input in conversation history, uploaded file contents, images (visual prompt injection), web search results, or retrieved documents can override instructions and direct the agent to misuse its broad tool set
- [Hallucination exploitation](../threats/hallucination-exploitation.md) - crafted inputs that trigger confident but false outputs, including incorrect code, misleading data analysis, or fabricated citations from web search
- [Guardrail bypass](../threats/guardrail-bypass.md) - techniques that circumvent safety constraints on generation, code execution, image generation, or tool invocation, including multi-turn jailbreaking and visual prompt injection that evades text-based filters
- [System prompt extraction](../threats/system-prompt-extraction.md) - tricking the model into revealing its system instructions through conversation or tool-mediated interactions
- [User manipulation](../threats/user-manipulation.md) - exploiting user trust in outputs that appear backed by computation results, generated images, web sources, and authoritative multi-turn conversation
- [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) - intrinsic model tendencies that degrade output quality across the broad capability set, compounding over multi-turn sessions
- [Training data poisoning](../threats/training-data-poisoning.md) - compromised training data affecting the model's code generation, tool selection, or reasoning behavior
- [Context poisoning](../threats/context-poisoning.md) - malicious content in uploaded files, images (visual prompt injection), web search results, or persisted memories that alters agent reasoning when loaded into context
- [Tool misuse](../threats/tool-misuse.md) - authorized but harmful tool calls such as generating misleading analysis, producing incorrect computations, generating deceptive or harmful images, or operating on user-uploaded files in unintended ways
- [Tool output poisoning](../threats/tool-output-poisoning.md) - malicious data in code execution results or web search results that hijacks subsequent agent reasoning and tool selection
- [Data exfiltration](../threats/data-exfiltration.md) - sensitive data from context transmitted through code execution network requests (if permitted), encoded in generated outputs, or exposed through web browsing actions
- [Denial of service](../threats/denial-of-service.md) - generated code causing expensive computation, infinite loops, memory exhaustion, or excessive tool-call cycles that exhaust resources
- [Goal manipulation](../threats/goal-manipulation.md) - untrusted input in uploaded files or web content redirecting agent objectives, causing it to pursue attacker goals through its tool capabilities
- [Unauthorized code execution](../threats/unauthorized-code-execution.md) - the primary code-interpreter threat; generated code can do anything the sandbox permits, and sandbox quality is the sole containment mechanism
- [Persistence attacks](../threats/persistence-attacks.md) - limited by the ephemeral sandbox (files and state are discarded after the session), but agent memory provides a cross-session persistence vector where poisoned memories influence future conversations
- [Privilege compromise](../threats/privilege-compromise.md) - sandbox escape or misconfiguration granting code execution or browsing access beyond the intended isolation boundary
