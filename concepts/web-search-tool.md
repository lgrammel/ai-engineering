# Web Search Tool

A web search tool gives an [LLM](./llm.md) or [agent](./agent.md) the ability to query the web for current information and incorporate search results into its [context](./context.md), bridging the [knowledge cutoff](./knowledge-cutoff.md) and [grounding](./grounding.md) responses in up-to-date sources.

## Details

Web search tools come in two main forms, following the broader [tools](./tools.md) taxonomy:

**Function-based web search tools** are developer-integrated: a dedicated search provider exposes an API, and the developer registers it as a function tool (or connects it via [MCP](./mcp.md)). The [agent runtime](./agent-runtime.md) executes the search call and returns results to the model. Providers like Exa, Tavily, Brave Search API, and SerpAPI specialize in search APIs designed for AI consumption - they often return structured, cleaned content rather than raw HTML, and some support semantic search or content extraction alongside traditional keyword search. Because the developer controls execution, they can filter results, enforce rate limits, or restrict domains before results reach the model.

**Provider-executed web search tools** are built into the [inference provider's](./inference-provider.md) infrastructure. The developer enables the tool via the API, and the provider handles query generation, search execution, and result injection server-side during [inference](./inference.md). The model is specifically [trained](./training.md) on the tool's interface and can decide when and how to search without explicit developer orchestration. Anthropic, OpenAI, and Google each offer provider-executed web search, with Google's variant branded as "grounding with Google Search."

Provider-executed tools are simpler to integrate (a single API flag) and benefit from tighter model-search coordination, but give the developer less control over what sources are queried and how results are processed. Function-based tools offer more flexibility - choice of search provider, custom filtering, domain restrictions, and result post-processing - at the cost of additional integration work.

Web search results are an attack surface: [SEO-poisoned pages](../threats/supply-chain-attack.md) can inject misleading content or [prompt injection](../threats/prompt-injection.md) payloads into the agent's context when results are incorporated without sanitization.

## Examples

- Function-based: an agent calls an Exa search tool to find recent API documentation, receives structured content snippets, and uses them to answer a developer's question.
- Provider-executed: a chatbot with OpenAI's web search enabled automatically searches for current events when a user asks about recent news, with results fetched and injected server-side.
- An [agentic RAG](./agentic-rag.md) system that combines web search with internal knowledge base retrieval, using web search for current information and internal search for proprietary data.

## Synonyms

web search, search tool, grounding with search
