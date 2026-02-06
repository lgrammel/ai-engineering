# Context Poisoning

Context Poisoning involves manipulating the [context](../concepts/context.md) an AI [agent](../concepts/agent.md) operates on -- workspace files, persisted memory, conversation history, retrieved documents, tool outputs, or other resources -- to introduce malicious or false data that alters the agent's decisions and actions.

Because context is assembled into the [prompt](../concepts/prompt.md) the model processes, context poisoning is closely related to [prompt injection](./prompt-injection.md): poisoned context becomes part of the input the model reasons over, effectively functioning as an indirect injection vector. The distinction is that context poisoning targets the data sources that feed the prompt, while prompt injection targets the model's instruction-following behavior directly. Poisoned context can persist across sessions (for example, in long-term memory or committed files), giving it a longer-lasting and harder-to-detect impact than a single injected message.

Agents treat many context sources as trusted by default -- their own memory, workspace files, retrieved documents -- so an attacker who can write to any of these sources can influence [reasoning](../concepts/reasoning.md), [tool](../concepts/tools.md) invocations, and outputs without directly interacting with the agent at runtime.

## Examples

- An attacker commits a workspace file (for example, a configuration file or markdown note) containing hidden instructions that the agent reads and follows when performing tasks in the repository.
- Poisoned entries in a shared vector store cause an agent to recommend harmful actions whenever a related topic is queried.
- A malicious user crafts conversation messages that get saved to long-term memory, causing the agent to behave differently for subsequent users.
- An attacker embeds a hidden instruction in a document that the agent summarizes and stores; future queries retrieve the poisoned summary and follow the injected instruction.

## Mitigations

- Input validation and sanitization before writing to memory stores or accepting external resources
- Treating retrieved content and workspace files as untrusted data
- Provenance tracking for context sources
- Periodic auditing of persisted memory and shared resources for injected or anomalous content
- [Context engineering](../concepts/context-engineering.md) to separate trusted instructions from untrusted content

## Synonyms

memory poisoning
