# Resource Overload

Resource Overload targets the computational, memory, network, and service capacities of AI [agent](../concepts/agent.md) systems to degrade performance, cause failures, or inflict financial damage.

AI agents are particularly susceptible to resource overload because they combine expensive [inference](../concepts/inference.md) calls with [tool](../concepts/tools.md) executions that can consume compute, storage, API quotas, and real money. An attacker can trigger resource exhaustion by crafting inputs that cause long reasoning chains, excessive tool-call loops, retrieval of very large documents, or repeated calls to paid external APIs. A specific financial variant -- sometimes called "denial of wallet" -- aims to drive up API and compute costs rather than causing a service outage.

Resource overload can also occur unintentionally through runaway agent loops or poorly bounded recursive tool calls, making resource limits and [observability](../concepts/observability.md) critical operational controls.

## Examples

- An attacker submits prompts designed to trigger unbounded recursive tool calls, exhausting the agent's API quota.
- Crafted inputs cause an agent to repeatedly call a paid external API in a loop, running up thousands of dollars in charges before the loop is detected.
- An adversary floods an agent system with concurrent requests, each triggering expensive inference and tool calls, causing cascading failures across shared infrastructure.
