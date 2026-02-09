# Agentic Workloads

Agentic workloads are the compute, network, and storage demands generated when [agents](./agent.md) interact with infrastructure -- APIs, databases, search engines, web services, cloud platforms. These workloads differ from both human-driven and traditional API workloads in volume, parameter diversity, and interaction patterns.

Compared to human-driven traffic, agentic workloads are bursty, high-concurrency, and machine-speed with no need for visual rendering. Agents favor structured, machine-readable responses over HTML pages and issue precise, programmatic queries rather than exploratory browsing. Compared to traditional API workloads (scripted integrations, microservice-to-microservice calls), agentic workloads are significantly higher volume and exhibit much greater parameter variation. A conventional integration typically calls a fixed set of endpoints with predictable parameter combinations, while an agent explores the full breadth of an API surface -- using rare parameter combinations, edge-case filters, and novel query compositions that existing systems were never load-tested for.

At the more experimental end, agents can generate declarative code -- SQL queries, GraphQL operations, infrastructure-as-code definitions, or domain-specific programs -- and submit it for execution. This moves the interaction from predefined API calls toward open-ended, generated payloads where the request space is effectively unbounded.

These patterns affect multiple infrastructure layers. Caching strategies designed for page-level granularity or common query shapes lose effectiveness against the long tail of agent-generated requests. Database indexes tuned for predictable query patterns can degrade under novel combinations. Rate limiting, authentication, and abuse detection built around human signals -- session cookies, CAPTCHAs, per-user throttling -- or around fixed integration patterns become ineffective when the consumer is an agent with unpredictable request shapes.

Autoscaling and capacity planning also shift: human-driven traffic typically follows predictable diurnal curves, and traditional integrations produce steady-state load, while agent-driven traffic can spike abruptly as automated workflows trigger in parallel. Infrastructure that does not accommodate agentic workloads -- by offering structured endpoints, agent-aware rate policies, flexible query execution, or machine-readable content -- tends to get routed around in favor of alternatives with lower friction.

## Examples

- A web service seeing its traffic shift from browser requests to agent API calls, requiring a move from server-rendered HTML to structured JSON endpoints.
- An API designed for a handful of scripted integrations receiving orders-of-magnitude more traffic from agents, with parameter combinations that never appeared in traditional usage.
- An agent generating SQL queries on the fly to answer user questions, submitting novel joins and filter combinations that bypass predefined query templates.
- Database indexes and caching layers degrading as agents explore the long tail of parameter space rather than hitting the common paths that traditional integrations exercised.
- Cloud autoscaling policies tuned for gradual human traffic curves or steady integration load failing under bursty, high-concurrency agent workloads.
- Rate limiting and anti-abuse systems blocking legitimate agent access because their request patterns resemble automated attacks rather than conventional API consumers.
