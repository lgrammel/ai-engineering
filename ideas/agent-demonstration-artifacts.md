# Agent Demonstration Artifacts

Agent demonstration artifacts are structured, executable documents that a [coding agent](../concepts/coding-agent.md) produces to prove its work to a human supervisor - interleaving commands, their actual outputs, and screenshots into a reviewable record of what the agent built and whether it works.

## Details

As agents produce more code, line-by-line code review becomes a bottleneck. Automated tests help but are insufficient on their own: an agent that writes both implementation and tests can pass its own checks without the software actually working (see [dark software factory](./dark-software-factory.md)). Demonstration artifacts address this by shifting verification from "read the code" to "watch the demo." The agent constructs a document that executes real commands and captures real outputs, giving the human supervisor a compressed, visual summary of what the software does.

The key trust property is that the artifact must be generated through actual execution rather than written freehand by the agent. If the agent can edit the document directly, it can fabricate outputs that do not reflect real behavior - a form of [tool misuse](../threats/tool-misuse.md) where the agent games the verification mechanism itself. Tooling design must constrain the agent to append-only operations backed by real command execution, though enforcing this constraint remains an open problem.

Demonstration artifacts sit between two extremes of agent supervision: full [human-in-the-loop](../concepts/human-in-the-loop.md) review of every action (thorough but unscalable) and trusting automated test results alone (scalable but gameable). They provide a middle path where the human reviews a curated, executable summary rather than raw code or binary test outcomes. For [cloud coding agents](../example-systems/cloud-coding-agent.md) operating asynchronously, these artifacts serve as the primary communication channel between agent and supervisor - analogous to a coworker walking you through their work in a screen-sharing session, but asynchronous and replayable. The same technique applies to [local coding agents](../example-systems/local-coding-agent.md), where demonstration artifacts compress multi-file edit sessions into a reviewable summary rather than forcing the developer to audit every change.

## Examples

- A CLI tool that constructs a Markdown document section by section, where each `exec` command runs a shell command and appends both the command and its captured output to the document, producing a reviewable demo of a newly built feature.
- A browser automation tool that captures screenshots at each step of a web interaction, embedding them in the demonstration document so the supervisor can see the actual UI the agent produced.
- An agent building a new API endpoint that demonstrates it by curling the endpoint, capturing the response, and assembling the request/response pairs into a document the developer can scan in under a minute.

## Counterarguments

- Demonstration artifacts verify that the software works for the specific scenarios the agent chose to demonstrate, but the agent selects which scenarios to show. An agent can construct a convincing demo that exercises only the happy path while leaving edge cases, error handling, and performance characteristics unexamined. The artifact creates an illusion of completeness that may reduce scrutiny rather than increase it.
- The approach adds overhead to every agent session: producing the demo takes time and tokens. For tasks where automated tests already provide high confidence (pure logic, well-specified transformations), the demonstration artifact may be redundant verification that slows the feedback loop without adding trust.
- Constraining agents to append-only, execution-backed document construction is difficult to enforce reliably. Agents with filesystem access can always edit files directly, and detecting whether a document was constructed through the sanctioned tool or modified by hand requires its own verification layer - turtles all the way down.

## Confidence

**Medium.** The trust property - artifacts must be execution-backed rather than freehand - is sound and the concept is practically useful for async agent supervision. However, the enforcement problem (constraining agents to append-only execution) and the selective demonstration risk (agents choose which scenarios to show) limit practical reliability without additional verification layers.

## External references

- https://simonwillison.net/2026/Feb/10/showboat-and-rodney/
