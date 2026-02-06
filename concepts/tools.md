# Tools

Tools are capabilities exposed to an [LLM](./llm.md) that let it request actions beyond text generation (e.g., query a system, read/write data, run code) and receive results back as context. A tool call is typically structured (tool name plus arguments). Tools differ in who defines them and who executes them.

**Function tools** are defined by the application developer: the developer specifies a name, description, and parameter schema, then passes these to the model at [inference](./inference.md) time. When the model generates a function tool call, the developer's code executes it and returns the result. The model relies on its general tool-calling ability combined with the in-context schema description; it has no built-in knowledge of any specific function tool.

**Provider-defined tools** have schemas and interfaces standardized by an [inference provider](./inference-provider.md) or [model developer](./model-developer.md), but are executed by the developer's code. The model is specifically [trained](./training.md) on these tool interfaces, so it has built-in knowledge of their semantics and expected input/output formats. The developer opts in to enabling them and handles execution in their own environment (e.g., a local [sandbox](./sandbox.md)).

**Provider-executed tools** are both defined and executed by the [inference provider](./inference-provider.md). The developer enables them via the API, but execution happens server-side during [inference](./inference.md); the model's tool calls and resulting outputs are handled entirely within the provider's infrastructure before the response is returned. The model is specifically [trained](./training.md) on these tools.

All three types rely on tool-calling ability learned during [training](./training.md): models are [fine-tuned](./fine-tuning.md) on structured tool-call formats so they can generate well-formed calls and incorporate results. Provider-defined and provider-executed tools involve additional targeted training on the specific semantics of each tool (expected inputs, output formats, when to invoke it). Function tools depend only on general tool-calling ability plus the schema provided at inference time.

During [inference](./inference.md), function tool schemas are included in the request (consuming [context](./context-size.md)); the model generates calls, and an [agent runtime](./agent-runtime.md) or client orchestrates execution and result passing. Provider-defined tools follow a similar call-and-return loop but use the provider's standardized schemas rather than developer-defined ones. Provider-executed tools run within the provider's infrastructure, so tool results are incorporated without a round-trip to the developer's code.

Because tools bridge the gap between model outputs and real-world actions, they are a primary attack surface for threats such as [tool misuse](../threats/tool-misuse.md) (authorized but harmful tool calls), [unexpected RCE and code attacks](../threats/unexpected-rce-and-code-attacks.md) (code injection through execution tools), and [exfiltration](../threats/exfiltration.md) (data extraction via tool calls).

## Examples

- Function tools: a developer-defined `get_weather(city)` or `query_database(sql)` tool
- Provider-defined tools (developer-executed): Anthropic's computer use, bash, and text editor tools
- Provider-executed tools: OpenAI web search, code interpreter, and file search; Google's grounding with search

## Synonyms

tool use, tool calling, function calling, action
