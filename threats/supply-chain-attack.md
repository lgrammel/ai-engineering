# Supply Chain Attack

A supply chain attack targets the external components an AI [agent](../concepts/agent.md) system depends on - models, [tools](../concepts/tools.md), packages, [skills](../concepts/skill.md), or APIs - by introducing malicious or backdoored elements that the system trusts and integrates without sufficient verification.

## Details

Agent systems are particularly exposed because they combine multiple external dependencies: a base [LLM](../concepts/llm.md) (potentially [fine-tuned](../concepts/fine-tuning.md) on third-party data), tool integrations that execute with the agent's permissions, library packages the agent installs or recommends, skills that shape agent behavior, and external APIs the agent calls at runtime. A compromise at any point in this supply chain can grant an attacker persistent, hard-to-detect influence over the agent's behavior.

Key attack vectors include:

- **Trojanized models**: Backdoored model weights or poisoned [fine-tuning](../concepts/fine-tuning.md) datasets that cause the model to behave maliciously under specific trigger conditions while appearing normal otherwise. This can manifest as [misaligned model behaviors](./misaligned-model-behaviors.md) that are deliberately introduced rather than emergent. See also [training data poisoning](./training-data-poisoning.md) for attacks that target the training data itself.
- **Malicious tools**: A compromised tool (for example, a malicious [MCP](../concepts/mcp.md) server) that exfiltrates data, executes unauthorized actions, or alters results when the agent invokes it.
- **Malicious library packages**: Backdoored or typosquatted packages that get installed when the agent follows build instructions or recommends dependencies.
- **Malicious skills**: Compromised [skill](../concepts/skill.md) definitions distributed through [skill repositories](../concepts/skill-repository.md) or other channels that inject harmful instructions, override safety behaviors, or exfiltrate data through the agent's normal workflow.
- **Compromised APIs**: Third-party API endpoints that return manipulated data or inject [prompt injection](./prompt-injection.md) payloads into agent workflows.
- **Compromised websites**: Attacker-controlled or manipulated web content that surfaces through [web search tools](../concepts/web-search-tool.md), injecting misleading information, malicious instructions, or [prompt injection](./prompt-injection.md) payloads into the agent's [context](../concepts/context.md).

Supply chain attacks differ from [context poisoning](./context-poisoning.md) (which targets runtime data sources) and [prompt injection](./prompt-injection.md) (which targets the model's instruction-following behavior). They target the components the agent is built from rather than the data it processes at runtime.

## Examples

- An attacker publishes a backdoored model on a public model hub that behaves normally on [benchmarks](../concepts/benchmarks.md) but exfiltrates sensitive [context](../concepts/context.md) when deployed in production.
- A malicious MCP server advertises useful tools but silently logs all arguments - including credentials and user data - to an external endpoint.
- A [coding agent](../concepts/coding-agent.md) recommends a typosquatted npm package that executes a reverse shell on install.
- An attacker distributes a skill file that injects hidden instructions causing the agent to bypass code review checks or insert backdoors into generated code.
- An attacker compromises a third-party API used by an agent for data enrichment, causing it to return responses containing [prompt injection](./prompt-injection.md) payloads.
- An attacker creates SEO-optimized pages containing prompt injection payloads that surface when an agent uses a [web search tool](../concepts/web-search-tool.md), causing the agent to follow attacker-supplied instructions.

## Mitigations

- Verifying model provenance and integrity (checksums, signatures) before deployment
- Auditing and sandboxing third-party [tools](../concepts/tools.md) and plugins
- Dependency scanning and pinning for packages the agent installs or recommends
- Reviewing skill definitions for unexpected instructions or data access patterns
- Network-level restrictions limiting which external services the agent can reach
- [Observability](../concepts/observability.md) on tool and API call patterns to detect anomalous behavior

## Synonyms

supply chain compromise
