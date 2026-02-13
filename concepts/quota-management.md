# Quota Management

Quota management is the practice of allocating, tracking, and enforcing resource budgets - [tokens](./token.md), API calls, compute time, cost - across users, tenants, or [agents](./agent.md) over defined periods such as days, months, or billing cycles.

## Details

Where [rate limiting](./rate-limiting.md) controls throughput within short time windows (requests or tokens per minute), quota management controls cumulative resource consumption over longer horizons. A user may have a generous per-minute rate limit but a hard monthly token budget; the rate limit prevents bursts from overwhelming infrastructure, while the quota prevents any single consumer from exhausting shared capacity over time.

Common quota dimensions include [token](./token.md) consumption (input, output, and [reasoning](./reasoning.md) tokens), [inference cost](./inference-cost.md) (monetary spend per period), compute hours (for [sandbox](./sandbox.md) or [tool](./tools.md) execution), and tool execution counts. Quotas are typically enforced at per-API-key, per-user, per-tenant, or per-[agent](./agent.md) granularity. In multi-tenant AI platforms, per-tenant quotas prevent any single tenant from monopolizing shared [inference](./inference.md) or compute resources, making quota management a key component of fair resource distribution.

[AI gateways](./ai-gateway.md) and [inference providers](./inference-provider.md) are the primary enforcement points for token and cost quotas. Application-level logic handles higher-level quotas such as per-user feature budgets or tiered access levels. [Observability](./observability.md) systems track quota utilization in real time to detect anomalies and provide usage dashboards.

Quota management is a direct mitigation for "denial of wallet" attacks - a variant of [denial of service](../threats/denial-of-service.md) that aims to inflict financial damage by driving up API and compute costs rather than causing an outage. Without quotas, a single compromised API key or runaway [agent](./agent.md) loop can accumulate unbounded costs.

## Examples

- An [inference provider](./inference-provider.md) offering tiered plans with monthly token budgets (e.g., 1M tokens/month on the free tier, 100M on the enterprise tier).
- An [AI gateway](./ai-gateway.md) enforcing per-user daily cost caps, cutting off requests once a user's spend exceeds the configured threshold.
- A [sandbox service](./sandbox.md) allocating compute-hour quotas per tenant to prevent resource monopolization.
- An [agent hosting platform](./agent-hosting-platform.md) tracking per-agent token consumption and halting agents that exceed their allocated budget.

## Synonyms

usage quota, resource quota, budget management, usage limits
