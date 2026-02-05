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

## Conventions for new notes

- Keep notes **short** and **practical** (one screen when possible).
- Prefer **clear definitions** plus 1–2 sentences on why it matters in production.
- Put **term definitions** in `concepts/`. In other files, reference/link to the relevant concept note rather than duplicating definitions.
- When relevant, connect concepts (e.g. how **telemetry** feeds **evals**, how **evals** gate releases, how **observability** catches regressions).

## Consistency rules for concepts (when adding or updating)

- Prefer **one canonical concept note per idea**. Before creating a new file, check whether the concept already exists under a synonym; if it does, update the existing note and add the synonym under "Also called".
- Keep **names consistent**:
  - File name: kebab-case (e.g. `ai-gateway.md`).
  - Title: matches the primary term (first line `# Term Name`).
  - Use the same term casing/spelling across notes; avoid introducing near-duplicates (e.g. "AI Observability" vs "Observability Tools") unless you intentionally split scope.
- Use a **definition-first shape**:
  - Start with a crisp 1–2 sentence definition.
  - Use optional, consistent labels when helpful: "Also called: …", "Why it matters: …", "Examples: …", "See also: …".
- Avoid **duplicating definitions across notes**. If another concept is needed, link to it (relative link within `concepts/`) rather than restating it.
- When you **change a definition/scope**, do a quick pass over related notes and update any links/wording that would now be inconsistent (especially parent/child concepts and "Also called" synonyms).

## Tools

### Link checking (pre-commit hook)

A pre-commit hook validates markdown links before each commit using `markdown-link-check`.

- **Setup**: Run `pnpm install` to install dependencies and configure the hook.
- **What it checks**: All staged `.md` files are scanned for broken links (both relative and external).
- **If a commit fails**: Fix the broken link(s) and try again.
- **Manual check**: Run `pnpm check-links <file.md>` to check a specific file.

Configuration lives in `.markdown-link-check.json` (timeouts, retries, ignored patterns).
