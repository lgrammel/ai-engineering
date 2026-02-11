# Multi-Tenancy for AI Agents

The idea that [agent](../concepts/agent.md) infrastructure increasingly requires tenant-level isolation -- data, compute, and permissioning boundaries per customer -- rather than the shared-resource model common in traditional SaaS.

## Details

Agents operate directly on customer data: filesystems, codebases, databases, and internal tools. This direct access makes data isolation a harder requirement than in request/response SaaS, where tenant boundaries are enforced at the application layer. A leaked [sandbox](../concepts/sandbox.md) mount or a shared filesystem between tenants exposes raw customer assets, not just database rows behind an API.

Namespace-based isolation is one emerging pattern: each tenant gets its own compute and storage boundary with independent quotas, access controls, and [observability](../concepts/observability.md) scoping. [Agent hosting platforms](../concepts/agent-hosting-platform.md) are beginning to build this as a first-class primitive, providing per-namespace resource limits, SSO/IdP integration for permissioning, and usage monitoring per tenant. This resembles the physical isolation model of managed databases more than the logical isolation of multi-tenant web apps.

The trade-off is cost and operational complexity. Physical isolation per tenant is expensive at the infrastructure layer, and fine-grained permissioning (which agents can access which resources within a tenant) adds surface area for [privilege compromise](../threats/privilege-compromise.md) and misconfiguration. Whether the agent ecosystem converges on namespace-level physical isolation or develops more efficient shared-but-partitioned models remains open.

## External references

- https://www.terminaluse.com/
