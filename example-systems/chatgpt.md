# ChatGPT

OpenAI's ChatGPT is a [multi-turn](../concepts/multi-turn-conversation.md) conversational AI product that combines a [chatbot](../concepts/conversational-interface.md) interface with an [agent](../concepts/agent.md) loop, [image understanding](../concepts/multimodal-model.md), [image generation](../concepts/multimodal-model.md), [code execution](../concepts/code-execution-tool.md), [computer use](../concepts/computer-use-tool.md), [RAG](../concepts/rag.md)/[web search](../concepts/web-search-tool.md), and [agent memory](../concepts/agent-memory.md), all running in server-side [sandboxes](../concepts/sandbox.md).

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

[Web search](../concepts/web-search-tool.md) results and uploaded documents introduce external content into the agent's context, creating injection surfaces for [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md) through adversarial web pages or document content. The web search capability also makes ChatGPT a venue for [agent SEO](../ideas/agent-seo.md): content optimized for agent consumption can influence which sources the model discovers and cites. [Agent memory](../concepts/agent-memory.md) persists information across sessions, creating a durable influence surface - a compromised session can write poisoned memories that affect future sessions.

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

| Threat                                                                   | Relevance | Note                                                                                           |
| ------------------------------------------------------------------------ | --------- | ---------------------------------------------------------------------------------------------- |
| [Prompt injection](../threats/prompt-injection.md)                       | Primary   | Multiple surfaces: conversation, uploaded files, images (visual injection), web search results |
| [Context poisoning](../threats/context-poisoning.md)                     | Primary   | Uploaded files, images, web search results, and persisted memories all enter context           |
| [Unauthorized code execution](../threats/unauthorized-code-execution.md) | Primary   | Generated code can do anything the sandbox permits; sandbox is sole containment                |
| [Persistence attacks](../threats/persistence-attacks.md)                 | Elevated  | Ephemeral sandbox limits local persistence, but agent memory persists across sessions          |
| [User manipulation](../threats/user-manipulation.md)                     | Elevated  | Amplified by computation results, generated images, and web-sourced information                |
| [Tool misuse](../threats/tool-misuse.md)                                 | Elevated  | Misleading analysis, incorrect computations, deceptive image generation                        |
| [Goal manipulation](../threats/goal-manipulation.md)                     | Elevated  | Uploaded files or web content redirect objectives across broad tool set                        |
| [Data exfiltration](../threats/data-exfiltration.md)                     | Elevated  | Code execution network requests, web browsing actions, encoded outputs                         |
| [Guardrail bypass](../threats/guardrail-bypass.md)                       | Elevated  | Multi-turn jailbreaking; visual prompt injection evades text-based filters                     |
| [Hallucination exploitation](../threats/hallucination-exploitation.md)   | Elevated  | Incorrect code, misleading analysis, fabricated web search citations                           |
| [Tool output poisoning](../threats/tool-output-poisoning.md)             | Elevated  | Code execution or web search results hijack subsequent reasoning                               |
| [Denial of service](../threats/denial-of-service.md)                     | Elevated  | Expensive computation, infinite loops, memory exhaustion in sandbox                            |
| [Privilege compromise](../threats/privilege-compromise.md)               | Elevated  | Sandbox escape granting access beyond intended isolation boundary                              |
| [System prompt extraction](../threats/system-prompt-extraction.md)       | Standard  | Through conversation or tool-mediated interactions                                             |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md)   | Standard  | Compounding over multi-turn sessions across broad capability set                               |
| [Training data poisoning](../threats/training-data-poisoning.md)         | Standard  | Baseline risk, no architecture-specific amplifier                                              |
