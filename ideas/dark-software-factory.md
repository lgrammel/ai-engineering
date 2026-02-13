# Dark Software Factory

A dark software factory is a non-interactive software development workflow where [coding agents](../concepts/coding-agent.md) write, test, and converge code driven entirely by specifications and scenarios, with no human writing or reviewing the code. The term borrows from manufacturing's "lights-out factory" where production runs without human presence on the floor.

## Details

The core constraint is that humans define what the software should do (specifications and acceptance scenarios) but never touch the code itself. This inverts the traditional [human-in-the-loop](../concepts/human-in-the-loop.md) model: instead of reviewing agent output line by line, humans focus on authoring precise behavioral specifications and validating outcomes. The shift reframes software quality from "does the code look correct?" to "does the system satisfy its scenarios?"

Because agents write both implementation and tests, conventional test suites cannot serve as the primary quality signal - an agent that writes `assert true` passes its own tests. Dark software factories address this by treating acceptance scenarios as holdout sets, stored separately from the codebase so coding agents cannot see or overfit to them. An independent validation process - often itself agent-driven - executes these scenarios and measures satisfaction probabilistically rather than as binary pass/fail. This resembles external QA teams or [evals](../concepts/evals.md) more than traditional unit testing.

A related technique is the digital twin universe: agent-built behavioral clones of third-party services (APIs, SaaS platforms) that replicate real-world behavior without [rate limits](../concepts/rate-limiting.md), API costs, or abuse detection. These twins enable scenario validation at volumes far exceeding production limits, including failure modes that would be dangerous to test against live services. Building faithful clones of complex services was always possible but never economically feasible before [coding agents](../concepts/coding-agent.md) reduced the cost of producing large amounts of purpose-built software.

Dark software factories depend on [cloud coding agents](../concepts/cloud-coding-agent.md) operating in [sandboxed](../concepts/sandbox.md) environments, often as [multi-agent systems](../concepts/multi-agent-system.md) where separate agents handle implementation, testing, and validation. Token costs are substantial. This makes the approach economically viable only when the value of the software produced justifies the [inference cost](../concepts/inference-cost.md), and suggests a significant shift in how software development budgets are structured (see [token economics](../concepts/token-economics.md)).

The central open question is trust: how do you prove that software works when no human inspects the code? The answer emerging from early adopters combines holdout scenario testing, digital twin environments, probabilistic satisfaction metrics, and high-volume automated validation - replacing human code review with systemic behavioral verification.

## Examples

- A three-person team uses a dark software factory to build security permission management software, with agent-built digital twins of Okta, Jira, Slack, and Google services providing the test environment, and swarms of simulated users continuously executing scenarios against the system.
- A coding agent receives a full API specification for a SaaS service and produces a self-contained behavioral clone as a single binary, which then serves as a rate-limit-free test target for other agents.
- Specifications are stored as markdown documents describing the system's intended behavior, fed into a coding agent harness that produces, tests, and iterates on the implementation without human intervention.

## Counterarguments

- The approach assumes that the hard part of software is writing code, but in practice the hardest part is often discovering and specifying what the software should do. Holdout scenarios can only catch failure modes someone anticipated - and writing sufficiently precise specifications is essentially the same specification problem that has limited formal methods for decades. Incomplete specifications will produce confidently wrong software.
- Agents writing both implementation and validation (even with holdout separation) creates a systemic monoculture risk: if the underlying [LLM](../concepts/llm.md) has a consistent blind spot, the same flaw can appear in both the implementation and the digital twin used to validate it, passing all checks while harboring a shared deficiency.
- The economic case depends on current [inference cost](../concepts/inference-cost.md) trajectories and the assumption that token costs will remain the dominant constraint. If agent reliability plateaus before specifications can be made precise enough, the cost of iterating to convergence may exceed traditional development for complex systems.

## External references

- <https://simonwillison.net/2026/Feb/7/software-factory/>
