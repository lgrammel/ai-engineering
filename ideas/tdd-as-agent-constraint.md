# TDD as Agent Constraint

TDD as agent constraint is the idea that test-driven development - writing a failing test before writing implementation code - functions as a supervision technique for [coding agents](../concepts/coding-agent.md), forcing verifiable incremental progress rather than serving primarily as a software quality practice.

## Details

The red/green cycle constrains an agent in ways that matter for trust. The agent must first produce a test that fails, proving it has defined expected behavior before attempting to satisfy it. Then it writes the minimal code to make the test pass. Each cycle produces a verifiable checkpoint: the human can confirm that the test failed (the requirement was real and not trivially satisfied) and that it subsequently passed (the implementation addresses it). This creates a legible trail of intent followed by proof, which is harder to fake than a batch of passing tests written after the fact.

The technique also limits scope drift. An agent given an open-ended task tends to over-build - adding abstractions, handling edge cases speculatively, or refactoring adjacent code. The test-first constraint anchors each step to a specific behavioral assertion, keeping the agent focused on the next concrete requirement. For cloud [coding agents](../concepts/coding-agent.md) operating asynchronously, this bounded progression is especially valuable because the supervisor is not present to redirect the agent mid-task.

A practical detail: telling the agent how to run the test suite ("run the existing tests with `uv run pytest`") doubles as a signal that tests on the project exist and matter. Agents read existing tests before writing their own, so a clean test suite with good patterns makes it more likely the agent will produce well-structured tests. The instruction to use red/green TDD is compact enough to fit in a single prompt line, and frontier models reliably interpret it correctly.

The constraint is complementary to [agent demonstration artifacts](./agent-demonstration-artifacts.md): TDD verifies that the code satisfies behavioral specifications, while demonstration artifacts verify that the software works from a user-visible perspective. Together they cover specification-level and experience-level trust.

## Examples

- A developer starting every agent session with "Run the existing tests with `uv run pytest`. Build using red/green TDD," producing a commit history where each commit contains a failing test followed by the implementation that makes it pass.
- An agent implementing a new CLI feature by first writing a test that invokes the command and asserts on its output, watching it fail, then writing the command handler to make it pass - repeating for each subcommand.
- A cloud [coding agent](../concepts/coding-agent.md) picking up a GitHub issue and autonomously applying TDD: writing a test that reproduces the reported bug (red), fixing the code (green), and including both the test and the fix in the pull request.

## Counterarguments

- TDD constrains the agent to testable behaviors, but many valuable software qualities - usability, performance under load, visual correctness, integration behavior - are not easily captured in unit-level red/green cycles. Over-reliance on TDD as the supervision mechanism may create false confidence in aspects of the system that the tests do not cover.
- The red/green cycle assumes the agent writes meaningful tests. An agent optimizing for the appearance of TDD can write trivially passing tests (`assert result is not None`) that satisfy the red/green pattern without actually constraining the implementation. The supervision value depends on test quality, which itself requires review.
- Forcing test-first development on every task adds overhead to exploratory or prototyping work where the requirements are not yet clear enough to specify as tests. For discovery-phase tasks, TDD as a constraint may slow the agent without adding proportional trust, since the tests themselves will need to be rewritten once the design stabilizes.

## Confidence

**High.** Immediately practical, demonstrated in production workflows, and frontier models reliably interpret the red/green instruction. The counterarguments identify scope limits (not all qualities are testable, test quality varies) but do not undermine the core supervision mechanism.

## External references

- https://simonwillison.net/2026/Feb/10/showboat-and-rodney/
