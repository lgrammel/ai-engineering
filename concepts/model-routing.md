# Model Routing

Model routing is the practice of directing [LLM](./llm.md) requests to different models based on task characteristics such as complexity, required capability, cost budget, or [latency](./latency.md) constraints.

## Details

The core tradeoff is that frontier models produce higher-quality outputs but cost more and respond more slowly, while smaller or [distilled](./distillation.md) models are cheaper and faster but less capable. Model routing exploits the observation that many production requests - simple classifications, short extractions, routine completions - do not require frontier-level capability. By matching request difficulty to model capability, a system can reduce cost and [latency](./latency.md) without meaningfully degrading output quality.

Routing strategies range from rule-based (route by task type or input length) to classifier-based (a lightweight model or heuristic scores request complexity) to cascading (try a cheaper model first, escalate to a stronger model if confidence is low). Some systems use an LLM itself as the router, though this adds its own cost and latency. [Evals](./evals.md) are essential for validating that routing decisions maintain acceptable quality across the model tier being selected.

Model routing is commonly implemented as a capability of [AI gateways](./ai-gateway.md), but it can also live in application logic or [agent runtimes](./agent-runtime.md). In [multi-agent systems](./multi-agent-system.md), different agents may be backed by different models based on their role complexity.

## Examples

- A customer support system routing FAQ-style questions to a small model and complex troubleshooting to a frontier model.
- A coding agent using a fast model for simple file reads and reformatting, and a reasoning model for architectural decisions.
- A cascade where a 8B-parameter model handles a request, and the system falls back to a 70B-parameter model when the smaller model's output confidence is below a threshold.

## Synonyms

LLM routing, model selection, model dispatch, smart routing
