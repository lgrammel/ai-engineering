# Agent

An agent is a system that uses an [LLM](./llm.md) as a decision-making policy to run [tools](./tools.md) in a loop: observe context/state, choose an action (tool call or message), execute it, incorporate the result, and repeat until a stop condition is met.

## Details

This loop is typically implemented and operated by an [agent runtime](./agent-runtime.md).

Some agents are [workspace agents](./workspace-agent.md), meaning their tool use is centered on a longer-lived project/workspace state (often a filesystem in a sandbox). An agent can also spawn [subagents](./subagent.md) to handle delegated subtasks with their own [context](./context.md) and tools, forming a [multi-agent system](./multi-agent-system.md). When the tool loop includes retrieval actions, the agent performs [agentic RAG](./agentic-rag.md) - dynamically deciding what to retrieve and whether to refine searches based on intermediate results.

Agents are often exposed to users through a [chatbot](./chatbot.md) interface, but "agent" describes the backend behavior (a tool-using loop) rather than the UI; an agent can also run via an API, a background job, or an event-driven workflow without an interactive chat surface.

The combination of LLM-driven decisions and real-world tool access makes agents susceptible to a range of [threats](../threats/index.md) including [prompt injection](../threats/prompt-injection.md), [tool misuse](../threats/tool-misuse.md), [data exfiltration](../threats/data-exfiltration.md), [goal manipulation](../threats/goal-manipulation.md), [user manipulation](../threats/user-manipulation.md), and [context poisoning](../threats/context-poisoning.md).

## Synonyms

AI agent, LLM agent, tool-using agent, autonomous agent
