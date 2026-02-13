# Customer Support Agent

A customer-facing [chatbot](../concepts/conversational-interface.md) that combines a [multi-turn](../concepts/multi-turn-conversation.md) [agent](../concepts/agent.md) loop with [agentic RAG](../concepts/agentic-rag.md) over a knowledge base and schema-constrained business API [tools](../concepts/tools.md) that can take real-world actions (process refunds, modify orders, update accounts), with [human-in-the-loop](../concepts/human-in-the-loop.md) escalation to human agents for complex or sensitive cases.

## Details

This architecture extends the [Enterprise RAG Chatbot](./enterprise-rag-chatbot.md) pattern with an [agent](../concepts/agent.md) loop and transactional [tools](../concepts/tools.md). The Enterprise RAG Chatbot has no tool access or agent behavior - its blast radius is limited to text output quality. Adding an agent loop with business API tools means a successful attack can trigger real-world financial and operational consequences, fundamentally changing the trust model. Customer support agents also illustrate elements of the [agent-native application](../ideas/agent-native-applications.md) pattern: schema-constrained API tools serve as atomic primitives, and the agent loop handles routing and edge cases rather than hard-coded branching logic. Observing what customers ask the agent to do - and where it fails or escalates - is a form of [latent demand discovery](../ideas/latent-demand-discovery.md), revealing unmet support needs and missing knowledge base content.

## Capabilities

- [Multi-turn conversation](../concepts/multi-turn-conversation.md)
- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Agentic RAG](../concepts/agentic-rag.md) (dynamic knowledge base [retrieval](../concepts/retrieval.md) via tool calls)
- [Function calling](../concepts/tools.md) (schema-constrained business API tools: order lookup, refund processing, account modification, ticket creation, escalation routing)
- [Human-in-the-loop](../concepts/human-in-the-loop.md) (escalation to human agents for complex/sensitive cases, approval gates for high-value actions)
- [Conversational](../concepts/conversational-interface.md) interface
- [Guardrails](../concepts/guardrail.md) (input/output classifiers, action authorization, PII filtering)
- [Context engineering](../concepts/context-engineering.md) (separating customer data, conversation history, retrieved documents, system instructions)
- [Structured output](../concepts/structured-output.md)

## Trust analysis

Four input surfaces feed the agent's [context](../concepts/context.md): system instructions (developer-controlled), conversation history (customer-supplied, untrusted), retrieved knowledge base content (semi-trusted internal content maintained by the organization), and customer data from CRM/backend lookups (sensitive but necessary for task completion). The conversation history and retrieved content are the primary [prompt injection](../threats/prompt-injection.md) surfaces, while customer data from backend systems introduces PII that must not leak into responses or tool calls directed at the wrong account.

Business API tools are schema-constrained by [function calling](../concepts/tools.md) definitions - the agent can only invoke predefined operations with typed arguments, unlike [code execution](../concepts/code-execution-tool.md) where generated code can do anything a sandbox permits. The schema constrains the shape of actions but not their correctness: the agent can call a valid refund endpoint with the wrong amount, process a return on the wrong order, or modify an account based on manipulated context. The tools operate on real money and customer data, making every incorrect tool call a potential financial or operational incident.

[Human-in-the-loop](../concepts/human-in-the-loop.md) functions as a tiered escalation boundary rather than per-action approval. Routine queries and low-value actions proceed autonomously, while complex cases, high-value transactions, or low-confidence situations route to human agents. The escalation decision is itself a model judgment call - an overconfident agent may fail to escalate cases that require human judgment, and [prompt injection](../threats/prompt-injection.md) or [goal manipulation](../threats/goal-manipulation.md) can suppress escalation to keep the conversation under attacker influence.

The system typically serves many customers through shared infrastructure. [Context isolation](../concepts/context-isolation.md) between sessions must prevent one customer's data from leaking into another's context. The knowledge base is a shared resource: anyone who can write to the corpus can influence how the agent handles all customer interactions when those documents are retrieved.

## Interaction effects

- **Agent loop + transactional tools + prompt injection**: Unlike RAG-only systems where compromise affects text output, a successful [prompt injection](../threats/prompt-injection.md) here can trigger real-world actions - processing fraudulent refunds, modifying accounts, or exfiltrating customer data through tool calls. The blast radius extends from text quality to financial and operational consequences.
- **Agentic RAG + tools + policy enforcement**: The agent retrieves policy documents and uses them to make authorization decisions (e.g., refund eligibility, discount limits). If the knowledge base contains incorrect or manipulated policy content, the agent may authorize actions beyond intended limits - a [context poisoning](../threats/context-poisoning.md) vector with direct financial impact.
- **Customer data in context + multi-turn accumulation**: Customer PII enters context from CRM lookups and conversation, accumulating across turns. Each tool result adds more sensitive data (order details, payment information, account history). A successful [prompt injection](../threats/prompt-injection.md) late in a conversation has access to all previously loaded PII, amplifying the [data exfiltration](../threats/data-exfiltration.md) risk.
- **Human escalation + agent confidence**: The model decides when to escalate to human agents. [Goal manipulation](../threats/goal-manipulation.md) or [prompt injection](../threats/prompt-injection.md) can suppress escalation, keeping the conversation under attacker influence when it should have been routed to a human. Conversely, [misaligned model behaviors](../threats/misaligned-model-behaviors.md) like sycophancy can lead the agent to grant unauthorized concessions rather than escalating.
- **Multi-tenant + shared knowledge base**: Multiple customers interact with the same system and knowledge base. Insufficient session isolation creates [cross-tenant data leakage](../threats/cross-tenant-data-leakage.md) risk, while the shared corpus creates a single [context poisoning](../threats/context-poisoning.md) surface that affects all customers when manipulated documents are retrieved.

## Threats

| Threat                                                                               | Relevance | Note                                                                                         |
| ------------------------------------------------------------------------------------ | --------- | -------------------------------------------------------------------------------------------- |
| [Prompt injection](../threats/prompt-injection.md)                                   | Primary   | Customer messages, knowledge base docs, and CRM data can direct transactional tools          |
| [Context poisoning](../threats/context-poisoning.md)                                 | Primary   | Poisoned knowledge base documents have direct financial impact through tool-mediated actions |
| [Tool misuse](../threats/tool-misuse.md)                                             | Primary   | Wrong refund amounts, wrong account modifications; real financial consequences               |
| [Data exfiltration](../threats/data-exfiltration.md)                                 | Elevated  | Customer PII accumulates across turns from CRM lookups and conversation                      |
| [Cross-tenant / cross-session data leakage](../threats/cross-tenant-data-leakage.md) | Elevated  | Multi-tenant shared infrastructure; customer data isolation failures                         |
| [Goal manipulation](../threats/goal-manipulation.md)                                 | Elevated  | Suppressing escalation, redirecting toward unauthorized refunds or account changes           |
| [Tool output poisoning](../threats/tool-output-poisoning.md)                         | Elevated  | Corrupted CRM or backend data hijacks subsequent reasoning                                   |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md)               | Elevated  | Sycophancy leads to unauthorized concessions; skipping verification before transactions      |
| [Hallucination exploitation](../threats/hallucination-exploitation.md)               | Elevated  | Incorrect policy interpretations cause inappropriate transactional actions                   |
| [Guardrail bypass](../threats/guardrail-bypass.md)                                   | Elevated  | Circumventing action authorization, PII filters; multi-turn jailbreaking                     |
| [Denial of service](../threats/denial-of-service.md)                                 | Elevated  | Tool-call loops exhaust backend resources or inflate inference costs                         |
| [System prompt extraction](../threats/system-prompt-extraction.md)                   | Standard  | Revealing tool schemas or internal policy rules                                              |
| [User manipulation](../threats/user-manipulation.md)                                 | Standard  | Customer trust in retrieval-grounded responses                                               |
| [Training data poisoning](../threats/training-data-poisoning.md)                     | Standard  | Baseline risk, no architecture-specific amplifier                                            |

## Examples

- An e-commerce support agent that looks up orders, processes returns and refunds, and retrieves from a help center knowledge base.
- A banking support agent that checks account balances, initiates disputes, and answers policy questions from internal documentation.
- A telecom support agent that modifies plans, troubleshoots service issues using diagnostic tools, and escalates to human agents for complex billing disputes.
