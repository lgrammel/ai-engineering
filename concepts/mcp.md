# MCP

MCP (Model Context Protocol) is an open protocol that standardizes how [agents](./agent.md) and [LLM](./llm.md) applications discover, connect to, and interact with external [tool](./tools.md) and data providers (called MCP servers).

An MCP server exposes a set of [tools](./tools.md) (with schemas), resources (data the client can read), and prompts (reusable prompt templates) over a standardized transport (typically JSON-RPC over stdio or HTTP with server-sent events). From the model's perspective, MCP-served tools are function tools: the server declares each tool's name, description, and parameter schema, and the MCP client includes these schemas at [inference](./inference.md) time just like any other function tool. The [agent runtime](./agent-runtime.md) or host application acts as the MCP client, connecting to one or more servers and making their capabilities available to the model. This decouples function-tool implementation from the agent: any MCP-compatible server can be plugged into any MCP-compatible client without custom integration code.

Because MCP servers execute with the agent's permissions and their outputs feed directly into the model's [context](./context.md), they are a [supply chain](../threats/supply-chain-attack.md) attack surface. A malicious or compromised MCP server can exfiltrate data, return poisoned results, or execute unauthorized actions.

## Examples

- A file-system MCP server that lets a coding agent read and write project files through a standardized interface.
- A database MCP server that exposes query tools and schema resources to any connected agent.
- A browser-automation MCP server that provides navigation and interaction tools for web-based tasks.

## Synonyms

Model Context Protocol
