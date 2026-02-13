# Deep Research Agent

A deep research agent is an [agent](../concepts/agent.md) that autonomously [searches the web](../concepts/web-search-tool.md), reads and evaluates multiple sources, and synthesizes findings into a comprehensive, cited research report - combining an [agentic RAG](../concepts/agentic-rag.md) loop with extended [reasoning](../concepts/reasoning.md) and [grounding](../concepts/grounding.md) over a large volume of web content.

## Details

Deep research agents accept a research query, then operate autonomously for minutes to tens of minutes: planning sub-questions, issuing multiple [web searches](../concepts/web-search-tool.md), reading retrieved pages, evaluating source quality, refining queries based on intermediate findings, and assembling a final report with citations. The research loop is [agentic RAG](../concepts/agentic-rag.md) at scale - dozens to hundreds of retrieval-evaluate-refine cycles per task, with the agent deciding when it has sufficient coverage to stop.

The autonomous execution model distinguishes deep research from conversational web search: there is no [human-in-the-loop](../concepts/human-in-the-loop.md) during the research phase. The user provides the initial query and receives the completed report. This makes the output the only review surface - the user cannot inspect or redirect the agent mid-process, and the dozens of intermediate search-and-read steps are opaque.

Deep research tasks are [inference-cost](../concepts/inference-cost.md) intensive. Each task processes large volumes of web content through the [context](../concepts/context.md) across many agent loop iterations, consuming significantly more tokens than a standard chat turn. [Prompt compaction](../concepts/prompt-compaction.md) and progressive summarization of intermediate findings are necessary to fit accumulated research into the [context size](../concepts/context.md) limits. Providers typically rate-limit deep research queries separately from standard chat because of the [token economics](../concepts/token-economics.md).

## Capabilities

- [Agent](../concepts/agent.md) loop with [tool](../concepts/tools.md) calling
- [Agentic RAG](../concepts/agentic-rag.md) (iterative search, evaluate, refine cycle)
- [Web search tool](../concepts/web-search-tool.md) (primary retrieval mechanism)
- [Reasoning](../concepts/reasoning.md) (extended thinking for query decomposition, source evaluation, and synthesis)
- [Grounding](../concepts/grounding.md) (citation of sources in the final report)
- [Prompt compaction](../concepts/prompt-compaction.md) (progressive summarization of accumulated findings)
- [Context engineering](../concepts/context-engineering.md) (managing retrieved content, intermediate summaries, and synthesis instructions)
- [Structured output](../concepts/structured-output.md) (formatted reports with citations and section structure)

## Trust analysis

The defining trust property is that the agent's entire evidence base comes from the open web - an adversary-controlled environment. Every page the agent reads is a potential [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md) surface. Unlike [enterprise RAG chatbots](./enterprise-rag-chatbot.md) where the corpus has a known trust level, a deep research agent ingests content from arbitrary domains with no prior trust relationship.

The volume of ingested content amplifies this exposure: a single research task may read dozens of web pages, each of which could contain adversarial content. The agentic loop means poisoned content from early retrievals can influence subsequent search queries, creating a compounding [context poisoning](../threats/context-poisoning.md) chain where the agent progressively steers itself toward attacker-chosen sources. [Agent SEO](../ideas/agent-seo.md) - websites optimized for agent consumption rather than human readers - is a direct manifestation of this attack surface.

There is no [human-in-the-loop](../concepts/human-in-the-loop.md) during execution. The user reviews only the final report, not the intermediate retrieval steps, source evaluation decisions, or reasoning traces. A subtly manipulated report - one that selectively omits sources, emphasizes biased perspectives, or includes fabricated citations - is difficult for the user to detect without independently verifying each claim.

[Grounding](../concepts/grounding.md) through citations provides partial mitigation: cited claims are verifiable in principle, and readers can check individual references. However, the volume of citations in a comprehensive report means most will go unchecked, and [hallucinated](../concepts/hallucination.md) citations (plausible-looking URLs or slightly altered source claims) may pass casual review.

The agent has no write access to external systems - it searches and reads but does not take actions beyond generating the report. This limits the blast radius of any compromise to the quality and trustworthiness of the output, similar to a RAG chatbot and unlike [computer use agents](./openai-operator.md) or [coding agents](./local-coding-agent.md) where compromised outputs translate to real-world actions.

## Interaction effects

- **Agentic RAG + open web content**: The iterative retrieval loop means poisoned content from one source can redirect subsequent searches. An attacker who controls a high-ranking page for the initial query can embed instructions or misleading claims that cause the agent to search for specific follow-up terms, leading it to additional attacker-controlled pages. This creates a cascading poisoning effect across the research session.
- **Reasoning + poisoned context**: Extended reasoning over large volumes of retrieved content means the model must weigh and synthesize potentially contradictory sources. Adversarial content that mimics authoritative tone or academic structure may receive disproportionate weight in the synthesis step, especially when legitimate sources are ambiguous or less clearly stated.
- **Prompt compaction + context poisoning**: As the agent compacts intermediate findings to fit context limits, adversarial content that was incorporated early in the research loop may persist in summarized form through the entire session, while later legitimate findings compete for remaining context space. The compaction process cannot reliably distinguish poisoned summaries from legitimate ones.
- **Grounding + citation hallucination**: The grounding requirement (citing sources) creates pressure to produce citations. When the agent's intermediate context has been compacted and original source details are partially lost, the model may fabricate plausible-looking citations or subtly misattribute claims to wrong sources - producing a report that appears well-grounded but contains unverifiable references.
- **Autonomous execution + volume of sources**: The lack of human oversight during execution, combined with the large number of sources processed, means there is no opportunity to catch a compromised research direction mid-task. The user receives a polished final report that may reflect a systematically biased evidence selection process they cannot reconstruct.

## Threats

| Threat                                                                 | Relevance | Note                                                                                                           |
| ---------------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| [Prompt injection](../threats/prompt-injection.md)                     | Primary   | Every retrieved web page is an injection surface; dozens of pages per task                                     |
| [Context poisoning](../threats/context-poisoning.md)                   | Primary   | Cascading poisoning across iterative retrieval loop; compacted summaries preserve poisoned content             |
| [Tool output poisoning](../threats/tool-output-poisoning.md)           | Primary   | Web search results and page content are the sole evidence base, fully adversary-influenced                     |
| [Hallucination exploitation](../threats/hallucination-exploitation.md) | Primary   | Fabricated citations, misattributed claims, and selectively omitted sources in synthesized reports             |
| [Goal manipulation](../threats/goal-manipulation.md)                   | Elevated  | Injected instructions in web content redirect research direction toward attacker-chosen topics                 |
| [User manipulation](../threats/user-manipulation.md)                   | Elevated  | Polished, cited reports carry perceived authority; biased synthesis is difficult to detect                     |
| [Supply chain attack](../threats/supply-chain-attack.md)               | Elevated  | SEO-poisoned pages and compromised search indices inject adversarial content into research results             |
| [Denial of service](../threats/denial-of-service.md)                   | Elevated  | High token consumption per task; adversarial content triggering unbounded retrieval loops ("denial of wallet") |
| [Data exfiltration](../threats/data-exfiltration.md)                   | Elevated  | User query content leaked through search queries to third-party search providers                               |
| [Guardrail bypass](../threats/guardrail-bypass.md)                     | Elevated  | Harmful content surfaced through retrieved web pages that bypass output filters in synthesis                   |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) | Elevated  | Confirmation bias in source selection; sycophantic alignment with perceived user stance                        |
| [System prompt extraction](../threats/system-prompt-extraction.md)     | Standard  | Research instructions extractable through adversarial web content                                              |
| [Training data poisoning](../threats/training-data-poisoning.md)       | Standard  | Baseline risk, no architecture-specific amplifier                                                              |

## Examples

- OpenAI Deep Research: uses an agent powered by a reasoning model to search, read, and synthesize web content into detailed reports with citations.
- Google Gemini Deep Research: creates a research plan, iteratively searches and reads sources, and produces a multi-section report with source links.
- Perplexity Deep Research: performs multi-step web research with source attribution, producing comprehensive answers with inline citations.
