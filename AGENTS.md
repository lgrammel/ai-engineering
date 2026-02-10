# Agent Instructions

This repository is a lightweight knowledge workspace about AI engineering in practice. Each note captures a concept, role, or practice in a concise, definition-first format, covering what matters when building, integrating, and operating AI-powered systems, and how they behave in production.

## Repository structure

| Directory   | Contains                                                                   | Canonical for                      |
| ----------- | -------------------------------------------------------------------------- | ---------------------------------- |
| `concepts/` | Core term definitions (e.g. [LLMs](./concepts/llm.md), evals, fine-tuning) | Terminology and definitions        |
| `ideas/`    | Speculative/emerging ideas attributed to external sources                  | Opinion-driven or unproven ideas   |
| `threats/`  | AI agent threat descriptions (e.g. context poisoning, tool misuse)         | Attack vectors and vulnerabilities |

Don't invent definitions in-line. If one is missing or unclear, **add or update a note** in the appropriate directory, then use it.

Treat notes as a living glossary: update entries as understanding changes.

## Writing notes

All note types (concept, idea, threat) share these conventions. Type-specific rules follow in later sections.

### Naming

- **File name**: kebab-case (e.g. `ai-gateway.md`)
- **Title**: `# Term Name` on line 1, matching the primary term
- Avoid near-duplicate names (e.g. "AI Observability" vs "Observability Tools") unless scope intentionally differs

### Template

```markdown
# Term Name

A 1-2 sentence definition.

Optional additional context: typical behaviors, scope, or how it works in practice.

## Examples

- Concrete examples if helpful.

## Synonyms

synonym1, synonym2.

## External references

- https://example.com/source
```

**Required:** title + definition (1-2 sentences immediately after title).

**Optional sections** (include only when they add significant value, in this order):

- Additional context paragraphs
- `Note:` -- clarifications
- `## Examples` -- concrete instances
- `## Synonyms` -- plain text only, no links
- `## External references` -- external URLs only; include only references you actually fetched and used

### What to avoid

- `Why it matters:` or `See also:` sections -- fold relevance into the definition; use inline links instead of link lists.
- Unverified references or generic link lists (e.g. a standalone "Related concepts:" sentence).
- Prescriptive language in the main section ("should", "must", "do X", "avoid Y"). Phrase operationally as description ("common practice is...") or put guidance under `## Examples`.

### Linking and deduplication

- **One canonical note per idea.** Before creating a file, check for an existing note under a synonym; if found, update it and add the synonym under `## Synonyms`.
- **Link, don't duplicate.** Reference other notes with relative links (e.g. `[LLM](./concepts/llm.md)`) rather than restating definitions.
- **Update related notes** when changing a definition or scope.
- **Cross-link** to relevant concept, threat, and idea notes where it aids understanding.
- Keep each directory's `index.md` sorted alphabetically by visible name.

### Concise but complete

A note is "complete" when a reader can understand the term without guessing key scope details. A good note typically covers:

- What it is (core definition)
- Where it applies (scope)
- Key boundary or distinction (what it's not)
- If relevant, the most important variants (kept minimal)

## Concept notes

Concept notes live in `concepts/` and define core terms. Keep them **concise**, **complete**, **definition-first**, and **linked** to related concepts.

The main section is **descriptive only**: it explains what the term is, how it behaves, and where it applies. If operational guidance is important, phrase it descriptively or put concrete instances under `## Examples`.

## Idea notes

Idea notes live in `ideas/` and capture speculative, emerging, or opinion-driven ideas from specific external sources. They follow concept note conventions with these additions:

- The main section **may use analytical and speculative language** ("the idea that...", "this suggests...", "this creates a potential...").
- `## External references` is **mandatory**. Every idea must be attributed to at least one external source that was actually read. Ideas without attribution belong in `concepts/` or should not be written.

## Threat notes

Threat notes live in `threats/` and describe attack vectors, vulnerabilities, or adversarial behaviors targeting AI agents. They follow concept note conventions with these additions:

- `## Mitigations` is an optional section listing countermeasures as bullet points with links to relevant notes. Place it after `## Examples` and before `## Synonyms` / `## External references`.

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
| Em dash                         | `--`                      |
| En dash                         | `-`                       |
| Ellipsis character              | `...`                     |

- **Manual check**: `pnpm check-quotes <file.md>`
- **Script**: `scripts/check-quotes.js`

### Link checking (markdown-link-check)

Validates markdown links (both relative and external).

- **Manual check**: `pnpm check-links <file.md>`
- **Config**: `.markdown-link-check.json` (timeouts, retries, ignored patterns)
