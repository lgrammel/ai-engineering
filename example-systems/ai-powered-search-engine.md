# AI-Powered Search Engine

An AI-powered search engine takes a user query, [retrieves](../concepts/retrieval.md) results via [web search](../concepts/web-search-tool.md), and uses an [LLM](../concepts/llm.md) to synthesize a direct, cited answer from the retrieved content - replacing the traditional list of links with a [grounded](../concepts/grounding.md) natural-language response.

## Details

The core pipeline is a [RAG](../concepts/rag.md) workflow over the open web: the system reformulates the user query into one or more search queries, retrieves pages or snippets, and generates a concise answer with inline citations linking back to sources. [Streaming](../concepts/streaming.md) is critical because users expect search-like [latency](../concepts/latency.md) - the answer begins rendering within seconds, even though generation may take longer than a traditional search results page.

Most AI-powered search engines are single-turn or lightly conversational: each query is largely independent, with optional follow-up questions that carry minimal prior context. This contrasts with [deep research agents](./deep-research-agent.md), which run autonomously for minutes across dozens of retrieval cycles to produce comprehensive reports. The search engine variant prioritizes speed and conciseness over depth and comprehensiveness.

The number of sources consulted per query is typically small (5-15 pages) compared to deep research, and the retrieval is usually a single pass rather than an iterative [agentic RAG](../concepts/agentic-rag.md) loop. Some implementations add a lightweight reasoning step to decompose complex queries before searching, but the overall architecture remains a fixed [AI workflow](../concepts/ai-workflow.md) rather than an open-ended agent loop.

Because these systems serve high query volumes across a broad user base, the attack surface scales with traffic: a single [SEO-poisoned page](../ideas/agent-seo.md) that ranks well for common queries can influence millions of generated answers.

## Capabilities

- [Web search tool](../concepts/web-search-tool.md) (primary retrieval mechanism)
- [RAG](../concepts/rag.md) ([retrieval](../concepts/retrieval.md) from web search results, snippet extraction)
- [Grounding](../concepts/grounding.md) (inline citations to source URLs)
- [Streaming](../concepts/streaming.md) (incremental answer delivery for low perceived [latency](../concepts/latency.md))
- [Context engineering](../concepts/context-engineering.md) (assembling retrieved snippets, system instructions, and optional conversation history)
- [Guardrails](../concepts/guardrail.md) (content filtering on both retrieved content and generated answers)

## Trust analysis

The entire evidence base comes from the open web, making every retrieved page a potential [prompt injection](../threats/prompt-injection.md) and [context poisoning](../threats/context-poisoning.md) surface. This is the same fundamental exposure as [deep research agents](./deep-research-agent.md), but the shorter retrieval pipeline (fewer pages, single pass) limits the compounding effect - there is no iterative loop where poisoned content redirects subsequent searches.

The high query volume is the defining trust amplifier. Traditional search engines serve billions of queries; an AI-powered variant inherits that scale. A compromised page that enters the top results for a popular query affects not just a list of links the user can evaluate individually, but the synthesized answer itself - the LLM may incorporate attacker-chosen claims directly into its response, laundered through authoritative-sounding prose. [Agent SEO](../ideas/agent-seo.md) - content optimized for AI consumption rather than human reading - is a direct threat: pages can be crafted to influence the generated answer while appearing benign in traditional search results.

[Grounding](../concepts/grounding.md) through inline citations provides a partial trust signal: users can click through to verify individual claims. However, the concise answer format discourages source verification - users adopt AI search specifically to avoid reading multiple pages, so most citations go unchecked. [Hallucinated](../concepts/hallucination.md) citations (plausible URLs that do not support the stated claim) or subtly misattributed claims are difficult to detect in casual use.

The system has no write access to external systems and no tool access beyond search. The blast radius of any compromise is limited to the quality and accuracy of the generated answer - similar to an [enterprise RAG chatbot](./enterprise-rag-chatbot.md) but with an adversary-controlled corpus (the open web) instead of a curated internal one.

## Interaction effects

- **RAG + open web corpus**: Unlike enterprise RAG where the corpus has a known trust level, the web corpus is adversary-influenced. Content ranking in search results determines what enters the LLM's [context](../concepts/context.md), so SEO manipulation translates directly into context manipulation. Pages optimized for AI extraction (clean structure, authoritative tone, direct answers) may receive disproportionate weight in the synthesis even if they are less trustworthy than messier but more authoritative sources.
- **Grounding + user trust**: The citation format creates an appearance of rigor that discourages independent verification. Users trust a cited AI answer more than an uncited one, but the citations themselves may be superficially correct (the URL exists) while the attributed claim is distorted or fabricated. The grounding mechanism thus amplifies rather than mitigates [user manipulation](../threats/user-manipulation.md) when the underlying synthesis is flawed.
- **High volume + single poisoned source**: A single compromised page that ranks for a high-traffic query can influence answers at scale. Unlike a deep research agent where each task is independent and expensive, search engine queries are cheap and frequent, so the attacker's reach per compromised source is orders of magnitude larger.
- **Streaming + reduced scrutiny**: The streaming delivery format encourages reading the answer as it appears rather than waiting for the complete response and evaluating it holistically. Contradictions or dubious claims that might be caught in a full-document review are less likely to be noticed when consumed incrementally.

## Threats

| Threat                                                                 | Relevance | Note                                                                                                             |
| ---------------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| [Prompt injection](../threats/prompt-injection.md)                     | Primary   | Every retrieved web page is an injection surface; high query volume amplifies impact of any successful injection |
| [Context poisoning](../threats/context-poisoning.md)                   | Primary   | Open web corpus is adversary-influenced; SEO manipulation translates directly into context manipulation          |
| [Tool output poisoning](../threats/tool-output-poisoning.md)           | Primary   | Web search results are the sole evidence base, fully influenced by search ranking manipulation                   |
| [Hallucination exploitation](../threats/hallucination-exploitation.md) | Elevated  | Fabricated or misattributed citations in concise answers; users unlikely to verify most sources                  |
| [User manipulation](../threats/user-manipulation.md)                   | Elevated  | Authoritative citation format discourages verification; biased synthesis laundered through scholarly tone        |
| [Supply chain attack](../threats/supply-chain-attack.md)               | Elevated  | SEO-poisoned pages and compromised search indices inject adversarial content at scale                            |
| [Guardrail bypass](../threats/guardrail-bypass.md)                     | Elevated  | Harmful content from retrieved pages synthesized into answers that bypass output filters                         |
| [Data exfiltration](../threats/data-exfiltration.md)                   | Elevated  | User queries leaked through search API calls to third-party search providers                                     |
| [Denial of service](../threats/denial-of-service.md)                   | Standard  | Per-query cost higher than traditional search but lower than deep research; rate limiting is standard practice   |
| [Misaligned model behaviors](../threats/misaligned-model-behaviors.md) | Standard  | Baseline risk; single-turn format limits compounding across turns                                                |
| [System prompt extraction](../threats/system-prompt-extraction.md)     | Standard  | Adversarial web content may attempt extraction, but single-turn limits leverage                                  |
| [Training data poisoning](../threats/training-data-poisoning.md)       | Standard  | Baseline risk, no architecture-specific amplifier                                                                |

## Examples

- Perplexity: AI-native search engine that retrieves web sources and generates cited answers, with optional follow-up questions and Pro Search for more thorough multi-step retrieval.
- Google AI Overviews: AI-generated summaries displayed above traditional search results, synthesizing information from top-ranking pages with source links.
- Microsoft Copilot (Bing): integrates LLM-generated answers with Bing search results, providing cited responses alongside traditional web links.
- You.com: AI search engine that retrieves web content and generates direct answers with source citations.
