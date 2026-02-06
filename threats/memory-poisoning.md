# Memory Poisoning

Memory Poisoning involves exploiting an AI [agent's](../concepts/agent.md) memory systems -- both short-term (conversation history, scratchpads) and long-term (persisted knowledge bases, vector stores, saved summaries) -- to introduce malicious or false data that alters the agent's future decisions and actions.

Because agents treat their own memory as trusted [context](../concepts/context.md), poisoned entries can persist across sessions and influence [reasoning](../concepts/reasoning.md), [tool](../concepts/tools.md) invocations, and outputs long after the initial injection. Short-term poisoning typically targets the current conversation (for example, injecting hidden instructions into earlier turns), while long-term poisoning targets persisted stores that the agent retrieves from repeatedly.

Memory poisoning differs from [agent communication poisoning](./agent-communication-poisoning.md) in that it targets the agent's own stored state rather than the communication channel between agents. It is often enabled by [prompt injection](./prompt-injection.md) embedded in data the agent processes and then saves.

## Examples

- An attacker embeds a hidden instruction in a document that the agent summarizes and stores; future queries retrieve the poisoned summary and follow the injected instruction.
- A malicious user crafts conversation messages that get saved to long-term memory, causing the agent to behave differently for subsequent users.
- Poisoned entries in a shared vector store cause an agent to recommend harmful actions whenever a related topic is queried.
