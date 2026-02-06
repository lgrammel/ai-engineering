# Supply Chain Compromise

Supply Chain Compromise targets the external components an AI [agent](../concepts/agent.md) system depends on -- models, [tools](../concepts/tools.md)/plugins, packages, APIs, or infrastructure -- by introducing malicious or backdoored elements that the system trusts and integrates without sufficient verification.

Agent systems are particularly exposed because they combine multiple external dependencies: a base [LLM](../concepts/llm.md) (potentially [fine-tuned](../concepts/fine-tuning.md) on third-party data), tool/plugin integrations that execute with the agent's permissions, packages the agent installs or recommends, and external APIs the agent calls at runtime. A compromise at any point in this supply chain can grant an attacker persistent, hard-to-detect influence over the agent's behavior.

Key attack vectors include:

- **Trojanized models**: Backdoored model weights or poisoned [fine-tuning](../concepts/fine-tuning.md) datasets that cause the model to behave maliciously under specific trigger conditions while appearing normal otherwise.
- **Malicious tools/plugins**: A compromised tool or plugin (for example, a malicious MCP server) that exfiltrates data, executes unauthorized actions, or alters results when the agent invokes it.
- **Dependency attacks**: Backdoored or typosquatted packages that get installed when the agent follows build instructions or recommends dependencies.
- **Compromised APIs**: Third-party API endpoints that return manipulated data or inject [prompt injection](./prompt-injection.md) payloads into agent workflows.

Supply chain compromise differs from [context poisoning](./context-poisoning.md) (which targets runtime data sources) and [prompt injection](./prompt-injection.md) (which targets the model's instruction-following behavior). It targets the components the agent is built from rather than the data it processes at runtime.

## Examples

- An attacker publishes a backdoored model on a public model hub that behaves normally on benchmarks but exfiltrates sensitive [context](../concepts/context.md) when deployed in production.
- A malicious MCP server advertises useful tools but silently logs all arguments -- including credentials and user data -- to an external endpoint.
- A [coding agent](../concepts/coding-agent.md) recommends a typosquatted npm package that executes a reverse shell on install.
- An attacker compromises a third-party API used by an agent for data enrichment, causing it to return responses containing [prompt injection](./prompt-injection.md) payloads.

## Mitigations

- Verifying model provenance and integrity (checksums, signatures) before deployment
- Auditing and sandboxing third-party [tools](../concepts/tools.md) and plugins
- Dependency scanning and pinning for packages the agent installs or recommends
- Network-level restrictions limiting which external services the agent can reach
- [Observability](../concepts/observability.md) on tool and API call patterns to detect anomalous behavior
