# Agent Instructions

This repository is a lightweight knowledge workspace about [AI engineering](./concepts/ai-engineering.md) in practice. Each note captures a concept, role, or practice in a concise, definition-first format, covering what matters when building, integrating, and operating AI-powered systems on top of foundation models, and how they behave in production.

## Scope

The focus is AI engineering - the application layer of building with foundation models. ML engineering concepts (model training, data curation, architecture design) are out of scope: reference them with brief context where needed, but do not define them in depth. When an ML concept is relevant, link to it or provide a minimal description sufficient for an AI engineering audience.

## Repository structure

| Directory        | Contains                                                                   | Canonical for                          |
| ---------------- | -------------------------------------------------------------------------- | -------------------------------------- |
| `architectures/` | Concrete deployment/trust topologies for AI systems                        | System configurations and trust models |
| `concepts/`      | Core term definitions (e.g. [LLMs](./concepts/llm.md), evals, fine-tuning) | Terminology and definitions            |
| `ideas/`         | Speculative/emerging ideas, optionally attributed to external sources      | Opinion-driven or unproven ideas       |
| `threats/`       | AI agent threat descriptions (e.g. context poisoning, tool misuse)         | Attack vectors and vulnerabilities     |

Don't invent definitions in-line. If one is missing or unclear, **add or update a note** in the appropriate directory, then use it.

Treat notes as a living glossary: update entries as understanding changes.

## Writing notes

All note types (concept, idea, threat, architecture) share these conventions. Type-specific rules follow in later sections.

### Naming

- **File name**: kebab-case (e.g. `ai-gateway.md`)
- **Title**: `# Term Name` on line 1, matching the primary term
- Avoid near-duplicate names (e.g. "AI Observability" vs "Observability Tools") unless scope intentionally differs

### Template

```markdown
# Term Name

A 1-2 sentence definition (executive summary).

## Details

Optional additional context: typical behaviors, scope, or how it works in practice.

## Examples

- Concrete examples if helpful.

## Synonyms

synonym1, synonym2.

## External references

- https://example.com/source
```

**Required:** title + executive summary (1-2 sentences immediately after title). The executive summary is the first paragraph after the H1 and stands alone as a useful definition of the term.

**Optional sections** (include only when they add significant value, in this order):

- `## Details` - additional context paragraphs when the executive summary alone is insufficient (scope, boundaries, how it works in practice, `Note:` clarifications). Omit this section when the executive summary fully covers the term.
- `## Examples` - concrete instances
- `## Synonyms` - plain text only, no links
- `## External references` - external URLs only; include only references you actually fetched and used

### What to avoid

- `Why it matters:` or `See also:` sections - fold relevance into the definition; use inline links instead of link lists.
- Unverified references or generic link lists (e.g. a standalone "Related concepts:" sentence).
- Prescriptive language in the main section ("should", "must", "do X", "avoid Y"). Phrase operationally as description ("common practice is...") or put guidance under `## Examples`.

### Linking and deduplication

- **One canonical note per idea.** Before creating a file, check for an existing note under a synonym; if found, update it and add the synonym under `## Synonyms`.
- **Link, don't duplicate.** Reference other notes with relative links (e.g. `[LLM](./concepts/llm.md)`) rather than restating definitions.
- **Update related notes** when changing a definition or scope.
- **Cross-link** to relevant concept, threat, and idea notes where it aids understanding.
- Keep each directory's `index.md` sorted alphabetically by visible name.

### Concise but complete

A note is "complete" when a reader can understand the term without guessing key scope details. The executive summary should stand alone as a useful definition; `## Details` expands with scope, boundaries, and variants. A good note typically covers:

- What it is (core definition - in the executive summary)
- Where it applies (scope)
- Key boundary or distinction (what it's not)
- If relevant, the most important variants (kept minimal)

## Concept notes

Concept notes live in `concepts/` and define core terms. Keep them **concise**, **complete**, **definition-first**, and **linked** to related concepts. All concept notes start with an executive summary paragraph, followed by an optional `## Details` section for additional context.

The main section is **descriptive only**: it explains what the term is, how it behaves, and where it applies. If operational guidance is important, phrase it descriptively or put concrete instances under `## Examples`.

ML engineering concepts (e.g. training, pretraining, reinforcement learning, transformer architecture) may be included as brief reference notes when AI engineering notes link to them. Keep these to an executive summary and minimal `## Details`; deep ML mechanics (training loop internals, architectural variants, optimization algorithms) can be omitted.

## Idea notes

Idea notes live in `ideas/` and capture speculative, emerging, or opinion-driven ideas from specific external sources. They follow concept note conventions (including the executive summary + optional `## Details` structure) with these additions:

- The main section **may use analytical and speculative language** ("the idea that...", "this suggests...", "this creates a potential...").
- `## Counterarguments` is an optional section listing the strongest objections or limitations as bullet points. Place it after `## Examples` and before `## Synonyms` / `## External references`. Counterarguments should be substantive and specific rather than generic disclaimers.
- `## External references` is optional. When present, every listed source must have been actually read.

## Threat notes

Threat notes live in `threats/` and describe attack vectors, vulnerabilities, or adversarial behaviors targeting AI agents. They follow concept note conventions (including the executive summary + optional `## Details` structure) with these additions:

- `## Mitigations` is an optional section listing countermeasures as bullet points with links to relevant notes. Place it after `## Examples` and before `## Synonyms` / `## External references`.

## Architecture notes

Architecture notes live in `architectures/` and describe concrete deployment and trust topologies for AI systems - specific configurations of components, capabilities, and trust boundaries that can be systematically analyzed for security. They differ from concept notes (which define vocabulary) by describing how building blocks are physically arranged and what the resulting trust model looks like.

Architecture notes reference concepts as building blocks (link, don't duplicate). Each architecture is defined by its capability boundaries: what the system can access (tools, filesystem, shell, network) and how components are isolated from each other.

Architectures are layered: each more-capable architecture inherits the full threat surface of simpler ones. An agent with tools inherits all threats that apply to a single generation call; an agent with a colocated filesystem inherits all threats that apply to an agent with tools.

Architecture notes follow concept note conventions (including the executive summary + optional `## Details` structure) with these additions:

- `## Trust boundaries` is a required section describing what is inside and outside each boundary, and what crosses them. Place it after `## Details` (or after the executive summary if `## Details` is omitted).
- `## Applicable threats` is a required section listing applicable threat notes as bullet points with links. Place it after `## Trust boundaries`.
- `## Examples` and other optional sections follow after `## Applicable threats`.

### Prose style

Every sentence must add new information.

- **No origin stories or etymology.** Just use the term directly.
- **No inline attribution.** The `## External references` section handles sourcing.
- **No redundant restatements.** Each paragraph should advance the idea, not echo the previous one.
- **Compress repeated patterns.** Merge items that make the same structural point into one tighter statement with inline examples.
- **No filler analogies** unless essential to understanding.
- **Keep examples distinct.** Each example should illustrate a different facet, not repeat the same point with different nouns.

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
| Em dash                         | `-`                       |
| En dash                         | `-`                       |
| Ellipsis character              | `...`                     |

- **Manual check**: `pnpm check-quotes <file.md>`
- **Script**: `scripts/check-quotes.js`

### Link checking (check-links)

Validates markdown links (both relative and external). Only dead links are reported, with file path, URL, and HTTP status.

- **Check all files**: `pnpm check-links`
- **Manual check**: `pnpm check-links <file.md>`
- **Script**: `scripts/check-links.js`
- **Config**: `.markdown-link-check.json` (timeouts, retries, ignored patterns)

### Index checking (check-indexes)

Validates that each directory index (`architectures/index.md`, `concepts/index.md`, `ideas/index.md`, `threats/index.md`) lists all `.md` files in that directory (excluding `index.md`) and that entries are sorted alphabetically by visible name.

- **Check all indexes**: `pnpm check-indexes`
- **Script**: `scripts/check-indexes.js`
