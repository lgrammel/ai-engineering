# Inference Cost

Inference cost is the monetary cost of running [LLM](./llm.md) requests, determined primarily by [token](./token.md) volume, model pricing tier, and whether tokens are input, output, or [reasoning](./reasoning.md) tokens. Because every token of [inference](./inference.md) costs money, cost pressure shapes decisions from [model](./llm.md) selection to user-facing access controls, favoring architectures that minimize unnecessary inference.

## Details

[Inference providers](./inference-provider.md) typically charge per token, with separate rates for input tokens (the [prompt](./prompt.md)), output tokens (the generated response), and - for [reasoning](./reasoning.md) models - reasoning tokens (intermediate thinking steps that may not appear in the final output). Output tokens are generally more expensive than input tokens, and reasoning tokens can dominate total cost on complex tasks because reasoning traces are often much longer than the visible response. Cached input tokens (via [prompt caching](./prompt-caching.md)) are charged at a reduced rate, creating a direct incentive to structure prompts for cache reuse.

Cost scales with model capability: frontier models are significantly more expensive per token than [small language models](./small-language-model.md) or [distilled](./distillation.md) variants. This creates a cost-quality-[latency](./latency.md) tradeoff triangle that shapes most production architecture decisions. For a given quality target, the goal is to minimize cost and latency; for a given budget, the goal is to maximize quality. [Batch inference](./batch-inference.md) offers a further discount (often 50% or more) for workloads that tolerate asynchronous processing, making it a significant cost lever for offline tasks like [evals](./evals.md) and [synthetic data](./synthetic-data.md) generation.

In [agent](./agent.md) systems, inference cost compounds across multi-step loops where each reasoning step, [tool](./tools.md) call interpretation, and result evaluation requires additional token generation.

The most direct architectural response to cost pressure is [model routing](./model-routing.md): directing requests to the cheapest model that can handle them. Simple tasks go to [small language models](./small-language-model.md) or [distilled](./distillation.md) variants; complex tasks escalate to frontier models. The large cost gap between tiers means routing even a fraction of traffic to cheaper models produces significant savings. The high relative cost of [reasoning](./reasoning.md) tokens creates additional pressure to avoid reasoning models for tasks that do not require multi-step deduction, to cap reasoning effort via model parameters where available, or to use [distillation](./distillation.md) to bake reasoning patterns into cheaper non-reasoning models.

Token volume reduction is another recurring pattern. [Prompt compaction](./prompt-compaction.md) condenses context to use fewer input tokens. [Prompt caching](./prompt-caching.md) reduces the effective cost of repeated prefixes. Structuring prompts so that stable content (system instructions, [tool](./tools.md) definitions) sits at the front maximizes cache reuse across requests.

Offloading work from inference to [tools](./tools.md) is a cost optimization with structural consequences. CPU-based computation (arithmetic, text search, data retrieval, code execution) is orders of magnitude cheaper per unit of work than GPU-based inference. An [agent](./agent.md) that delegates arithmetic to a calculator or data processing to a code execution runtime spends a small number of tokens orchestrating the tool call instead of many tokens reasoning through the answer.

On the operational side, cost pressure drives user-facing controls: per-user or per-tenant budgets, usage tiers, [rate limiting](./rate-limiting.md), and throttling. These are typically enforced through [AI gateways](./ai-gateway.md) or application-level logic. Without these controls, [denial of service](../threats/denial-of-service.md) attacks (including "denial of wallet" variants) can inflict significant financial damage.

## Examples

- A reasoning model spending 10x more tokens on its thinking trace than on the visible response, making reasoning tokens the dominant cost factor.
- Cached input tokens costing 90% less than uncached tokens, incentivizing stable prompt prefixes.
- A frontier model costing 30-60x more per token than a small model, making [model routing](./model-routing.md) a primary cost optimization lever.
- A coding agent using a fast, cheap model for file reads and reformatting, and a reasoning model only for architectural decisions.
- Capping reasoning effort to "low" for classification tasks where chain-of-thought adds cost without improving accuracy.
- An agent using a calculator tool for arithmetic instead of spending tokens on multi-step multiplication via inference.
- An agent loop accumulating costs across dozens of inference calls per user request, making per-request cost monitoring essential.
- A SaaS product offering tiered access where free users get a small model and paying users get a frontier model.
- Structuring all prompts with a stable system prefix to maximize [prompt caching](./prompt-caching.md) hit rates across requests.

## Synonyms

token cost, LLM cost, API cost, token economics
