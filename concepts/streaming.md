# Streaming

Streaming is a delivery mode for [LLM](./llm.md) [inference](./inference.md) in which [tokens](./token.md) are sent to the client incrementally as they are generated, rather than waiting for the full response to complete before returning it.

Most [inference providers](./inference-provider.md) expose streaming via server-sent events (SSE) over HTTP: each event carries one or more newly generated tokens, and the client assembles them into a growing response. Streaming reduces perceived [latency](./latency.md) because the user sees output begin within the time-to-first-token window rather than waiting for the entire generation to finish -- this is especially important for [chatbot](./chatbot.md) interfaces where responses may take several seconds to generate fully.

Streaming introduces complexity for [structured output](./structured-output.md) and [tool](./tools.md) calls: tool call arguments arrive as partial token sequences that cannot be parsed or executed until complete, so [agent runtimes](./agent-runtime.md) must buffer and reassemble streamed tool calls before dispatching them. [Observability](./observability.md) systems also need to handle streaming traces, since the response is not a single atomic event but a sequence of incremental chunks with timing information.

## Examples

- A chat UI that displays tokens as they arrive, giving the user immediate feedback while the model is still generating.
- An agent runtime that streams text to the user but buffers tool-call tokens until the full call is complete before executing.
- A non-streaming (batch) API call used for background processing where latency perception does not matter.

## Synonyms

streaming response, server-sent events, SSE streaming, token streaming
