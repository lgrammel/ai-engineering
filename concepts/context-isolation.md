# Context Isolation

Context isolation is the practice of giving each [agent](./agent.md) or [subagent](./subagent.md) in a [multi-agent system](./multi-agent-system.md) its own independent [context](./context.md) window, so it sees only the information explicitly passed to it rather than the full conversation history or tool outputs of other agents.

## Details

Isolation serves both [context engineering](./context-engineering.md) and security goals. On the engineering side, it keeps each agent's context focused on its specific subtask, avoiding the noise and [context size](./context-size.md) pressure that accumulates when a single context carries the full history of all subtasks. On the security side, it limits what a compromised or [prompt-injected](../threats/prompt-injection.md) agent can access: a subagent handling untrusted input (user-uploaded files, web content) is intended to see only the information explicitly passed to it, not the parent's system instructions, credentials, or unrelated tool outputs. This containment reduces the blast radius of [context poisoning](../threats/context-poisoning.md) and [data exfiltration](../threats/data-exfiltration.md).

The parent or orchestrating agent controls what crosses the isolation boundary -- typically a task description and curated inputs on the way in, and a structured result on the way out. Designing these boundary payloads is a [context engineering](./context-engineering.md) concern: passing too little starves the subagent of information; passing too much defeats the purpose of isolation.

## Examples

- A parent agent passes only a file path and a task description to a code-search subagent, rather than its full conversation history.
- An orchestrator strips system instructions and credentials before delegating a summarization task to a subagent that processes untrusted web content.
- Each subagent in a parallel research workflow receives only its assigned query and returns a structured summary, with no visibility into sibling subagent contexts.

## Synonyms

context separation, context scoping, context boundary
