# Code Execution Tool

A [tool](./tools.md) that lets an [LLM](./llm.md) or [agent](./agent.md) run code (typically in a general-purpose language such as Python) inside a [sandbox](./sandbox.md) and receive the output -- stdout, stderr, generated files -- as context for further reasoning.

Code execution tools close the loop between generating code and observing its effects: the model writes a snippet, the runtime executes it, and the result feeds back into the conversation. This makes them useful for tasks that benefit from precise computation, data manipulation, or dynamic exploration -- areas where pure text generation is unreliable. Execution usually happens in an isolated, ephemeral environment with restricted filesystem and network access to limit the blast radius of errors or malicious input.

Code execution tools are a primary surface for [unauthorized code execution](../threats/unauthorized-code-execution.md) threats, since the model's output is evaluated as live code. Common mitigations include [sandboxing](./sandbox.md), resource limits, and [tool execution approval](./tool-execution-approval.md).

## Examples

- OpenAI Code Interpreter (provider-executed): runs Python in a server-side sandbox during [inference](./inference.md) and returns results inline.
- Anthropic's bash and code execution tools (provider-defined): the model emits structured calls; the developer's [agent runtime](./agent-runtime.md) executes them locally or in a remote sandbox.
- Custom function tools that wrap a language runtime (e.g., a `run_python(code)` function tool backed by a Docker container).

## Synonyms

code interpreter, code execution sandbox tool
