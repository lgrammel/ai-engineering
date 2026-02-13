# Cloud Agents as Org Capacity

The idea that cloud [coding agents](../concepts/coding-agent.md) represent organizational capacity rather than individual developer tooling, making them fundamentally different from local coding agents in how they scale, integrate, and create value.

## Details

Under this framing, a local agent makes one developer faster, while a cloud agent - once configured and taught conventions - makes the entire engineering organization faster. When someone encodes a workflow into a reusable [skill](../concepts/skill.md) or playbook (e.g., remediating security vulnerabilities from a scanning tool), anyone in the company can trigger that same process. Expertise gets encoded once and executed repeatedly.

This shifts the natural pricing model from per-seat (tied to individual developers) to usage-based (tied to work performed). Per-seat pricing breaks down when non-developers trigger agent sessions from Slack, when issue trackers spawn automated workflows, or when CI failures launch debugging agents - the unit of value is the work done, not the person initiating it.

The organizational implications go beyond tooling: deploying a cloud agent resembles hiring more than purchasing software. Effective adoption involves strategic task selection, knowledge encoding, analytics for tracking impact, permissions and governance, and change management to shift engineering workflows. Organizations that treat cloud agents as infrastructure to be onboarded compound advantages over those that treat them as tools to be purchased.

Taken to its extreme, this framing leads to [dark software factories](./dark-software-factory.md) where agents handle the entire development lifecycle - writing, testing, and validating code - with humans defining specifications and scenarios rather than touching the code. At this level, engineering budgets shift from salaries to [inference cost](../concepts/inference-cost.md), and the "capacity" the organization deploys is measured in token spend rather than headcount.

## Counterarguments

- The "hiring" analogy overstates agent reliability. Deploying a cloud agent does not resemble hiring because agents cannot yet be held accountable, do not improve from feedback the way employees do, and require human oversight that scales with agent throughput. The organizational capacity framing may lead to over-delegation before agent reliability justifies it.
- Usage-based pricing assumes that agent output quality is consistent enough to charge by volume. If a significant fraction of agent sessions produce unusable output that requires human rework, the effective cost per useful unit of work may exceed per-seat developer tooling, undermining the economic argument.
- The framing underplays the knowledge-encoding bottleneck. Converting organizational expertise into [skills](../concepts/skill.md) and playbooks is itself expensive, requires deep domain knowledge, and produces artifacts that need ongoing maintenance as the codebase and practices evolve. The "encode once, execute repeatedly" promise assumes a level of stability that most engineering organizations do not have.

## Confidence

**Medium.** The framing is useful and the pricing and organizational implications are practical. The counterarguments about agent reliability and the knowledge-encoding bottleneck are substantial and unresolved at current capability levels, making the "org capacity" framing aspirational rather than proven at scale.

## External references

- <https://cognition.ai/blog/devin-generally-available>
- <https://cursor.com/blog/cloud-agents>
