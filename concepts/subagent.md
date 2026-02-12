# Subagent

A subagent is an [agent](./agent.md) spawned by a parent agent to handle a delegated subtask, then return a result that the parent incorporates and continues with.

## Details

The parent agent defines the subagent's task, selects its [tools](./tools.md) and permissions, and provides an initial [context](./context.md) - typically a task description plus relevant excerpts rather than the parent's full context. This scoping is a form of [context isolation](./context-isolation.md): each subagent operates in its own context window, seeing only what was explicitly passed to it. The parent-child relationship distinguishes subagents from peer agents in a [multi-agent system](./multi-agent-system.md); subagents are hierarchically controlled rather than independently coordinated.

Subagents enable decomposition of complex tasks: the parent handles planning and integration while subagents execute focused subtasks (code search, file editing, research, testing). Because each subagent runs with a fresh context window, it avoids the context bloat that would result from running all subtasks sequentially in a single agent loop. Different subagents can use different [LLM](./llm.md) backends ([model routing](./model-routing.md)), and their permissions can be scoped narrower than the parent's, limiting the blast radius of [tool misuse](../threats/tool-misuse.md) or [prompt injection](../threats/prompt-injection.md).

The parent typically treats subagent outputs as reliable data and incorporates them directly into its [context](./context.md), creating a trust chain where compromise at any point propagates forward. A subagent that encounters a [prompt injection](../threats/prompt-injection.md) payload in a web page or file can return poisoned results that influence the parent's subsequent reasoning and tool calls. This trust transfer at delegation boundaries is the primary security risk of subagent architectures.

## Examples

- A coding agent that spawns a search subagent to find relevant files, then uses the results to make targeted edits in the parent context.
- An orchestrator agent that delegates independent subtasks to parallel subagents and synthesizes their outputs into a final result.
- A research agent that spawns a subagent with browser tools to fetch and summarize a web page, receiving only the summary back.

## Synonyms

sub-agent, child agent, worker agent, spawned agent
