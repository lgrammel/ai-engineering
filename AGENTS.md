# Agent Instructions

This repository is a lightweight knowledge workspace about AI systems built on transformer architecture models. The content is intentionally short and "definition-first": each note captures a concept, role, or practice in a way that's easy to reference while designing, building, or reviewing AI products.

## How agents should reason (use the repo's definitions)

- Treat `concepts/` as the **canonical source of truth** for terminology and definitions in this repo.
- Treat `threats/` as the **canonical source of truth** for AI agent threat descriptions in this repo.
- Treat `ideas/` as the **canonical source of truth** for speculative and emerging ideas about AI systems in this repo.
- Don't invent new definitions in-line. If you need a definition that's missing/unclear, **update or add a note under `concepts/`** (or `threats/` for threats, `ideas/` for speculative ideas), then proceed using it.

## What you'll find here

- **`concepts/`**: bite-sized markdown notes defining core terms (e.g. [LLMs](./concepts/llm.md), evals, fine-tuning, inference providers, observability/telemetry).
- **`threats/`**: bite-sized markdown notes describing threats to AI agent systems (e.g. context poisoning, tool misuse, privilege compromise).
- **`ideas/`**: bite-sized markdown notes capturing speculative and emerging ideas about AI systems, attributed to specific external sources (e.g. agent UX, agent SEO, token economics of tool use).
- **Occasional artifacts**: as the repo grows, it may also include small scripts, JSON, or other files that support the notes (examples, snippets, checklists, etc.).

## How to use it

- Start with `concepts/` when you need a shared definition for a discussion, design doc, or review.
- Start with `threats/` when you need a description of a specific AI agent threat.
- Start with `ideas/` when you need a reference on a speculative or emerging idea, or when exploring higher-level reasoning about how AI concepts interact.
- Treat the notes as a living glossary: update entries as understanding changes or best practices evolve.

## Writing concept notes

Concept notes live in `concepts/` and define core terms for reference across the repo. Keep them **concise** but also **complete**, **definition-first**, and **linked** to related concepts.

### "Concise but complete"

A note is "complete" when a reader can understand the term without guessing key scope details.

In practice, a good note typically covers (in very few words):

- What it is (the core definition).
- What it applies to / where it shows up (scope).
- Key boundary or distinction (what it's not, or what is commonly confused with it).
- If relevant, the most important moving parts or variants (kept minimal, often as examples).

### Naming

- **File name**: kebab-case (e.g. `ai-gateway.md`)
- **Title**: `# Term Name` on line 1, matching the primary term
- Use consistent casing/spelling across notes; avoid near-duplicates (e.g. "AI Observability" vs "Observability Tools") unless scope intentionally differs

### Structure

Every concept note follows this shape:

```markdown
# Term Name

A 1-2 sentence definition of what the term means.

Optional additional context: typical behaviors, scope, or how it works in practice.

## Examples

- Concrete examples if helpful.

## Synonyms

synonym1, synonym2.

## External references

- https://example.com/source
```

**Required elements:**

- Title (`# Term Name`)
- Definition (1-2 sentences immediately after title)

**Optional sections:**

- `## Examples`, `## Synonyms`, and `## External references` are optional and should only be included when they add significant value (clarify meaning, disambiguate terminology, or provide a necessary citation you actually used).

**Main section rule (descriptive-only):**

- The main section (definition + any additional context paragraphs before the first `##` heading) is **descriptive only**: it explains what the term is, how it behaves, and where it applies.
- Avoid prescriptive/normative language in the main section (for example: "should", "must" as advice, "do X", "avoid Y", "best practice is..."). If operational guidance is important, either phrase it descriptively ("common practice is...") or put concrete instances under `## Examples`.

**Optional elements** (use when helpful, in this order):

- Additional context paragraphs
- `Note:` -- clarifications
- `## Examples` -- concrete instances
- `## Synonyms` -- synonyms for the term, placed after `## Examples` (if present) and before `## External references`. Do not include links here; use plain text only.
- `## External references` -- external sources/links only (URLs outside this repo), placed at the bottom of the note. Only include a reference if you actually fetched/opened and used it while writing the concept note.

Do not include `Why it matters:` sections in concept notes. If production relevance is important, incorporate it briefly into the definition or the additional context instead.

Do not include `See also:` sections in concept notes.

Only include links when they materially help define or clarify the concept (i.e., the source is actually used in the definition, a note, or the additional context) and the reference is strictly necessary. Do not include unverified references, and do not add generic link lists (for example, a standalone "Related concepts:" sentence).

### Linking and avoiding duplication

- **One canonical note per idea**. Before creating a new file, check if the concept exists under a synonym; if so, update the existing note and add the synonym under `## Synonyms`.
- **Link, don't duplicate**. If another concept is needed, use a relative link (e.g. `[LLM](./concepts/llm.md)`) rather than restating the definition.
- **Update related notes** when changing a definition/scope--check parent/child concepts and `## Synonyms` for consistency.

### General conventions

- Keep notes **practical**--prefer clear definitions plus 1-2 sentences on practical implications (in the definition or additional context).
- **Connect concepts** when relevant (e.g. how telemetry feeds evals, how evals gate releases).
- For non-concept files, reference/link to concept notes rather than duplicating definitions.
- Keep `concepts/index.md` sorted alphabetically by the visible concept name.

## Writing threat notes

Threat notes live in `threats/` and describe threats to AI agent systems. They follow the same structure and conventions as concept notes (see above), with these adjustments:

- Threat notes describe attack vectors, vulnerabilities, or adversarial behaviors targeting AI agents.
- Cross-link to concept notes where relevant (e.g. `[agent](../concepts/agent.md)`, `[tools](../concepts/tools.md)`).
- Cross-link to other threat notes where relevant (e.g. `[Tool Misuse](./tool-misuse.md)`).
- Keep `threats/index.md` sorted alphabetically by the visible threat name.
- `## Mitigations` is an optional section specific to threat notes. It lists common countermeasures as bullet points with links to relevant concept notes or other threat notes. Place it after `## Examples` and before `## Synonyms` / `## External references`.

## Writing idea notes

Idea notes live in `ideas/` and capture speculative, emerging, or opinion-driven ideas about AI systems from specific external sources. They follow the same structure and conventions as concept notes (see above), with these adjustments:

- Idea notes describe unproven, analytical, or speculative ideas that build on top of established `concepts/` and `threats/`.
- The main section **may use analytical and speculative language** (unlike concept notes, which are descriptive-only). Framing such as "the idea that...", "this suggests...", or "this creates a potential..." is appropriate.
- `## External references` is **mandatory**. Every idea must be attributed to at least one external source that was actually read. Ideas without attribution belong in `concepts/` (if they are established) or should not be written.
- Cross-link to concept notes where relevant (e.g. `[agent](../concepts/agent.md)`, `[tools](../concepts/tools.md)`).
- Cross-link to threat notes where relevant (e.g. `[supply chain compromise](../threats/supply-chain-compromise.md)`).
- Cross-link to other idea notes where relevant (e.g. `[Agent SEO](./agent-seo.md)`).
- Keep `ideas/index.md` sorted alphabetically by the visible idea name.
- Do not duplicate concept definitions; link to the canonical concept note instead.

### Prose style

Idea notes should be **concise and non-redundant**. Every sentence must add new information.

- **No origin stories or etymology.** Don't explain where a term or metaphor comes from (e.g., "borrowed from urban planning", "the term originates in..."). Just use the term directly.
- **No inline attribution.** Don't name specific people or frame ideas with "In X's view..." -- the `## External references` section handles sourcing.
- **No redundant restatements.** If the definition already says it, don't rephrase it in the next paragraph. Each paragraph should advance the idea, not echo the previous one.
- **Compress repeated patterns.** When multiple items make the same structural point (e.g., "if agents don't know X, X loses"), merge them into one tighter statement with inline examples rather than listing each separately.
- **No filler analogies.** Don't pad with comparisons to unrelated domains (e.g., "similar to the algorithmic attention economy in human-facing platforms") unless the analogy is essential to understanding.
- **Keep examples distinct.** Each example under `## Examples` should illustrate a different facet of the idea, not repeat the same point with different nouns.

## Tools

Pre-commit hooks run automatically on staged files. Run `pnpm install` to set up.

### Code formatting (Prettier)

Auto-formats markdown, JavaScript, TypeScript, and JSON files.

- **Format all files**: `pnpm format`
- **Check formatting**: `pnpm format:check`
- **Config**: `.prettierrc`

Prettier runs first in the pre-commit hook and auto-fixes formatting issues.

### Markdown linting (markdownlint)

Enforces consistent markdown structure and style.

- **Manual check**: `pnpm lint:md <file.md>` or `pnpm lint:md concepts/`
- **Config**: `.markdownlint.jsonc`

### Typography rules (check-quotes)

Enforces plain ASCII characters for consistency and tooling compatibility.

| Don't use                       | Use instead               |
| ------------------------------- | ------------------------- |
| Curly double quotes             | `"` (straight quote)      |
| Curly single quotes/apostrophes | `'` (straight apostrophe) |
| Em dash                         | `--`                      |
| En dash                         | `-`                       |
| Ellipsis character              | `...`                     |

- **Manual check**: `pnpm check-quotes <file.md>`
- **Script**: `scripts/check-quotes.js`

### Link checking (markdown-link-check)

Validates markdown links (both relative and external).

- **Manual check**: `pnpm check-links <file.md>`
- **Config**: `.markdown-link-check.json` (timeouts, retries, ignored patterns)
