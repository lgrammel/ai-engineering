# Agentic Workloads

Agentic workloads are the compute, network, and storage demands generated when [agents](./agent.md) interact with [infrastructure](./ai-infrastructure.md) -- APIs, databases, search engines, web services, cloud platforms. These workloads differ from both human-driven and traditional API workloads in volume, parameter diversity, and interaction patterns.

Compared to human-driven traffic, agentic workloads are bursty, high-concurrency, and machine-speed, favoring structured machine-readable responses over rendered pages. Compared to traditional API workloads (scripted integrations, microservice-to-microservice calls), agentic workloads exhibit much greater parameter variation: a conventional integration calls a fixed set of endpoints with predictable inputs, while an agent explores the full breadth of an API surface -- rare parameter combinations, edge-case filters, and novel query compositions that existing systems were never load-tested for. At the more experimental end, agents generate declarative code (SQL, GraphQL, infrastructure-as-code) for execution, making the request space effectively unbounded.

These patterns affect multiple infrastructure layers. Caching and database indexes tuned for common query shapes degrade against the long tail of agent-generated requests. Rate limiting and abuse detection built around human signals (session cookies, CAPTCHAs) or fixed integration patterns become ineffective; [AI gateways](./ai-gateway.md) and agent-aware rate policies are common adaptations. Autoscaling also shifts: agent-driven traffic can spike abruptly as automated workflows trigger in parallel, compounding [inference](./inference.md) costs with tool execution costs, unlike the predictable curves of human or traditional integration traffic.

## Examples

- A web service shifting from browser requests to agent API calls, requiring structured JSON endpoints instead of server-rendered HTML.
- An agent generating SQL queries on the fly, submitting novel joins and filter combinations that bypass predefined query templates.
- Cloud autoscaling policies failing under bursty, high-concurrency agent workloads that differ from gradual human traffic curves.
- Rate limiting systems blocking legitimate agent access because request patterns resemble automated attacks.
