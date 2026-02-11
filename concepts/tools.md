# Tools

Tools are capabilities exposed to an [LLM](./llm.md) that let it request actions beyond text generation (e.g., query a system, read/write data, run code) and receive results back as context. A tool call is typically structured (tool name plus arguments). Tools differ in who defines them and who executes them.

## Details

Tools vary by who defines them, who executes them, and what capabilities they provide.

### Types of tools

**Function tools** are defined by the application developer: the developer specifies a name, description, and parameter schema, then passes these to the model at [inference](./inference.md) time. When the model generates a function tool call, the developer's code executes it and returns the result. The model relies on its general tool-calling ability combined with the in-context schema description; it has no built-in knowledge of any specific function tool.

**Provider-defined tools** have schemas and interfaces standardized by an [inference provider](./inference-provider.md) or [model developer](./model-developer.md), but are executed by the developer's code. The model is specifically [trained](./training.md) on these tool interfaces, so it has built-in knowledge of their semantics and expected input/output formats. The developer opts in to enabling them and handles execution in their own environment (e.g., a local [sandbox](./sandbox.md)).

**Provider-executed tools** are both defined and executed by the [inference provider](./inference-provider.md). The developer enables them via the API, but execution happens server-side during [inference](./inference.md); the model's tool calls and resulting outputs are handled entirely within the provider's infrastructure before the response is returned. The model is specifically [trained](./training.md) on these tools.

All three types rely on tool-calling ability learned during [training](./training.md) ([fine-tuning](./fine-tuning.md) on structured tool-call formats). Function tools depend only on this general ability plus the schema provided at [inference](./inference.md) time (which consumes [context](./context.md)), while provider-defined and provider-executed tools also involve targeted training on each tool's specific semantics. An [agent runtime](./agent-runtime.md) or client typically orchestrates the call-and-return loop between model and tools.

### Common tools

[Web search tools](./web-search-tool.md) give an agent access to current information from the web, bridging the [knowledge cutoff](./knowledge-cutoff.md) and [grounding](./grounding.md) responses in up-to-date sources. They exist as both function-based integrations (using providers like Exa, Tavily, or Brave Search API) and provider-executed built-ins (such as OpenAI's web search or Google's grounding with search).

[Code execution tools](./code-execution-tool.md) let an agent run code (typically Python) inside a [sandbox](./sandbox.md) and receive the output as context. They close the loop between generating code and observing its effects, enabling tasks that require precise computation, data manipulation, or dynamic exploration.

[Computer use tools](./computer-use-tool.md) let an agent interact with graphical user interfaces by capturing screenshots and performing mouse/keyboard actions. They enable a [computer use agent](./computer-use-agent.md) to operate any desktop or web application the same way a human would, providing a universal interface that works without dedicated APIs.

Retrieval tools in [agentic RAG](./agentic-rag.md) let the agent issue search or lookup calls against knowledge bases, inspect results, and decide whether to refine the query or retrieve from additional sources.

### Model Context Protocol (MCP)

[MCP](./mcp.md) is an open protocol that standardizes how agents discover and connect to external tool providers. From the model's perspective, MCP-served tools are function tools: the MCP server declares a name, description, and parameter schema, and the [agent runtime](./agent-runtime.md) includes these schemas at [inference](./inference.md) time. This decouples function-tool implementation from the agent, allowing any MCP-compatible server to supply tools to any MCP-compatible client without custom integration code.

Because tools bridge the gap between model outputs and real-world actions, they are a primary attack surface for threats such as [tool misuse](../threats/tool-misuse.md) (authorized but harmful tool calls), [unauthorized code execution](../threats/unauthorized-code-execution.md) (code injection through execution tools), [data exfiltration](../threats/data-exfiltration.md) (data extraction via tool calls), and [supply chain attack](../threats/supply-chain-attack.md) (malicious or backdoored tool integrations). [Tool execution approval](./tool-execution-approval.md) is a common mitigation that requires human confirmation before high-risk tool calls are executed.

## Examples

- Function tools: a developer-defined `get_weather(city)` or `query_database(sql)` tool
- Provider-defined tools (developer-executed): Anthropic's computer use, bash, and text editor tools
- Provider-executed tools: OpenAI [web search](./web-search-tool.md), [code interpreter](./code-execution-tool.md), and file search; Google's grounding with search

## Synonyms

tool use, tool calling, function calling, action
