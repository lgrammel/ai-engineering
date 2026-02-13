# Function Calling

Function calling is the model's ability to generate structured [tool](./tools.md) calls (a function name and JSON arguments) directed at developer-defined functions. Most provider APIs now use the broader term "[tool calling](./tools.md)" or "tool use," and function calling is effectively synonymous with it, though it most precisely refers to the invocation of developer-defined function [tools](./tools.md) rather than provider-defined or provider-executed tools.

## Details

In a function-calling flow, the caller supplies one or more function schemas (name, description, parameter schema) alongside the [prompt](./prompt.md). During [inference](./inference.md), the model may choose to emit a [structured output](./structured-output.md) containing the selected function name and a JSON arguments payload instead of a text response. The calling application (typically an [agent runtime](./agent-runtime.md)) parses this output, executes the corresponding function, and feeds the result back into the model's [context](./context.md) for the next turn.

Provider APIs typically offer controls such as parallel function calls (multiple invocations in a single turn), forced calls (constraining the model to call a specific function), and [streaming](./streaming.md) of partial function-call arguments. OpenAI's API originally exposed this capability under a `functions` parameter, later migrating to a unified `tools` parameter that treats function calling as one tool type alongside provider-executed tools like web search and code interpreter.

## Examples

- A chat model receiving a `get_weather(city: string)` schema and responding with `{"name": "get_weather", "arguments": {"city": "Berlin"}}` instead of a text answer.
- An [agent](./agent.md) issuing parallel function calls to `search_web` and `query_database` in a single turn to gather information from multiple sources simultaneously.
- A provider API with a `tool_choice: "required"` parameter that forces the model to produce a function call rather than a text response.
