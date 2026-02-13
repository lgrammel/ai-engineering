# Token Economics

Token economics is the set of cost-driven design patterns that emerge when [inference cost](./inference-cost.md) is a primary architectural constraint in [LLM](./llm.md) systems. Because every [token](./token.md) of [inference](./inference.md) costs money, cost pressure shapes decisions from [model](./llm.md) selection to user-facing access controls, favoring architectures that minimize unnecessary inference.

## Details

The most direct lever is [model routing](./model-routing.md): directing requests to the cheapest model that can handle them. Simple tasks go to [small language models](./small-language-model.md) or [distilled](./distillation.md) variants; complex tasks escalate to frontier models. The cost gap between tiers is large enough that routing even a fraction of traffic to cheaper models produces significant savings.

[Reasoning](./reasoning.md) tokens are a particularly expensive cost category because reasoning traces can be many times longer than the visible output. This creates pressure to avoid reasoning models for tasks that do not require multi-step deduction, to cap reasoning effort via model parameters where available, or to use [distillation](./distillation.md) to bake reasoning patterns into cheaper non-reasoning models.

Token volume reduction is another recurring pattern. [Prompt compaction](./prompt-compaction.md) condenses context to use fewer input tokens. [Prompt caching](./prompt-caching.md) reduces the compute cost of repeated prefixes. Structuring prompts so that stable content (system instructions, [tool](./tools.md) definitions) sits at the front maximizes cache reuse across requests.

Offloading work from inference to [tools](./tools.md) is a cost optimization with structural consequences. CPU-based computation (arithmetic, text search, data retrieval, code execution) is orders of magnitude cheaper per unit of work than GPU-based inference. An [agent](./agent.md) that delegates arithmetic to a calculator or data processing to a code execution runtime spends a small number of tokens orchestrating the tool call instead of many tokens reasoning through the answer. Tools with high savings-to-overhead ratios (the tokens saved by delegating vs. the tokens spent on tool schemas and call formatting) become permanent infrastructure.

On the operational side, cost pressure drives user-facing controls: per-user or per-tenant budgets, usage tiers, [rate limiting](./rate-limiting.md), and throttling. These are typically enforced through [AI gateways](./ai-gateway.md) or application-level logic. [Observability](./observability.md) systems track token-level cost per request, per user, and per model to detect cost anomalies and inform optimization. Without these controls, [denial of service](../threats/denial-of-service.md) attacks (including "denial of wallet" variants) can inflict significant financial damage.

## Examples

- A coding agent using a fast, cheap model for file reads and reformatting, and a reasoning model only for architectural decisions.
- Capping reasoning effort to "low" for classification tasks where chain-of-thought adds cost without improving accuracy.
- An agent using a calculator tool for arithmetic instead of spending tokens on multi-step multiplication via inference.
- A SaaS product offering tiered access where free users get a small model and paying users get a frontier model.
- Structuring all prompts with a stable system prefix to maximize [prompt caching](./prompt-caching.md) hit rates across requests.
