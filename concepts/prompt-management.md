# Prompt Management

Prompt management is the practice of treating [prompt templates](./prompt-template.md) as versioned, testable artifacts with their own lifecycle - versioning, testing, deploying, and monitoring them systematically rather than embedding them as hard-coded strings in application code.

## Details

Prompt management addresses the operational challenge that [prompt](./prompt.md) changes can shift LLM behavior as significantly as model changes, yet in many codebases prompts are scattered across application code without dedicated version tracking or deployment controls. Core practices include storing templates in a central registry or repository with version history, gating deployments on [eval](./evals.md) results (regression tests and quality metrics), supporting rollback to previous versions when quality degrades, and tracking which template version produced each response through [observability](./observability.md) telemetry.

Decoupling prompt templates from application deployments allows prompt changes to be shipped, tested, and rolled back independently, reducing the blast radius of a bad prompt edit and enabling faster iteration. This decoupling also supports A/B testing of template variants in production and per-environment template overrides (development, staging, production).

Dedicated prompt management platforms provide collaborative editing, version diffing, eval integration, and deployment controls in a unified interface. Simpler setups achieve similar goals by storing templates in version control alongside eval datasets and using CI pipelines as release gates.

## Examples

- A prompt management platform that stores template versions, runs [evals](./evals.md) on each change, and deploys approved versions to production without a code release.
- A Git repository of prompt templates with CI-triggered eval suites that block merging when quality metrics regress.
- An [observability](./observability.md) dashboard that correlates response quality metrics with specific template versions to identify regressions.

## Synonyms

prompt versioning, prompt ops
