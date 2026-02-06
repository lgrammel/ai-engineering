# Agent Instructions

This repository is a lightweight knowledge base of my notes on **AI** and **security for AI systems**. The content is intentionally short and "definition-first": each note captures a concept, role, or practice in a way that's easy to reference while designing, building, or reviewing AI products.

## How agents should reason (use the repo's definitions)

- Treat `concepts/` as the **canonical source of truth** for terminology and definitions in this repo.
- Don't invent new definitions in-line. If you need a definition that's missing/unclear, **update or add a note under `concepts/`**, then proceed using it.

## What you'll find here

- **`concepts/`**: bite-sized markdown notes defining core terms (e.g. LLMs, evals, fine-tuning, inference providers, observability/telemetry).
- **Occasional artifacts**: as the repo grows, it may also include small scripts, JSON, or other files that support the notes (examples, snippets, checklists, etc.).

## How to use it

- Start with `concepts/` when you need a shared definition for a discussion, design doc, or review.
- Treat the notes as a living glossary: update entries as understanding changes or best practices evolve.

## Writing concept notes

Concept notes live in `concepts/` and define core terms for reference across the repo. Keep them **short** (one screen when possible), **definition-first**, and **linked** to related concepts.

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
- **Link, don't duplicate**. If another concept is needed, use a relative link (e.g. `[model](./model.md)`) rather than restating the definition.
- **Update related notes** when changing a definition/scope--check parent/child concepts and `## Synonyms` for consistency.

### General conventions

- Keep notes **practical**--prefer clear definitions plus 1-2 sentences on practical implications (in the definition or additional context).
- **Connect concepts** when relevant (e.g. how telemetry feeds evals, how evals gate releases).
- For non-concept files, reference/link to concept notes rather than duplicating definitions.

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
