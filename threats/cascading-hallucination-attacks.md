# Cascading Hallucination Attacks

Cascading Hallucination Attacks exploit an AI's tendency to generate contextually plausible but false information, which then propagates through downstream systems and compounds into increasingly harmful decisions.

Unlike isolated hallucinations, cascading attacks are dangerous because each false output becomes trusted input for the next step. In [agent](../concepts/agent.md) systems, a hallucinated fact can feed into [tool](../concepts/tools.md) calls (for example, querying a database with a fabricated identifier or calling an API with incorrect parameters), and the resulting errors or misleading outputs reinforce the original falsehood. In multi-agent systems, one agent's hallucinated output can be accepted as fact by other agents, amplifying the error across the entire workflow.

Attackers can deliberately trigger cascading hallucinations by crafting inputs that push the model toward plausible-sounding but false [reasoning](../concepts/reasoning.md) chains, especially when combined with [prompt injection](./prompt-injection.md) or [memory poisoning](./memory-poisoning.md).

## Examples

- An agent hallucinates a package name, installs it via a tool call, and a typosquatted malicious package gets executed.
- One agent in a pipeline produces a fabricated statistic that downstream agents incorporate into reports and decisions without verification.
- A hallucinated API endpoint is called by the agent, and the error response is misinterpreted, leading to further incorrect tool calls.
