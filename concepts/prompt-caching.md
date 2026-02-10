# Prompt Caching

Prompt caching is a provider-side optimization that stores the intermediate computation (KV-cache) produced during the prefill phase of [inference](./inference.md), so that subsequent requests sharing the same [token](./token.md)-level prefix can skip redundant processing and begin generation from the cached state.

During [inference](./inference.md), the model first processes all input tokens (the prefill phase), building up internal key-value states for each layer. Prompt caching saves this KV-cache keyed by the exact token prefix. When a later request starts with the same prefix, the [inference provider](./inference-provider.md) loads the cached state instead of recomputing it, reducing both [latency](./latency.md) (faster time to first token) and compute cost. Cache hits require an exact token-level prefix match -- even small changes early in the [prompt](./prompt.md) invalidate the cache.

This exact-prefix requirement has practical implications for [context engineering](./context-engineering.md): placing stable content (system prompt, tool definitions, static instructions) at the beginning of the prompt and variable content (user messages, retrieved documents) at the end maximizes cache reuse. Some providers apply prompt caching automatically; others require explicit opt-in or cache-control hints in the API request.

## Examples

- A system prompt and tool definitions cached across many user requests, so only the per-user message triggers new prefill computation.
- A multi-turn conversation where the growing message history shares a common prefix with the previous turn, allowing incremental prefill.
- A prompt restructured to move a frequently changing retrieval block from the middle to the end, improving cache hit rates.

## Synonyms

context caching, KV-cache reuse, prefix caching
