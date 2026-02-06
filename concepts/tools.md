# Tools

Tools are callable functions exposed to a [model](./model.md) or [agent](./agent.md) that let it request actions outside text generation (e.g., query a system, read/write data, run code) and receive the results back as context.

A tool call is typically structured (tool name plus arguments) and executed by an orchestrator/runtime; tool outputs can be read-only data or side effects in the external world, often within a [sandbox](./sandbox.md).

## Examples

- Web search/retrieval APIs that return snippets or documents
- Database query tools that return rows
- Code execution tools (Python interpreter, shell commands) running in a sandbox
- Workspace file tools that read/write files
- "Send message" tools that post to email/chat and return a message ID

## Synonyms

tool use, tool calling, function calling, action
