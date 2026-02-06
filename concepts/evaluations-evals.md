# Evaluations

Evals (evaluations) are systematic tests used to measure and monitor [LLM](./llm.md) or system performance on specific tasks. They are used to compare variants, catch regressions, and track metrics like accuracy, safety, and robustness.

Eval approaches include automated metrics (exact match, similarity scores), model-as-judge (using an LLM to grade outputs), and human evaluation. Evals can run offline (on curated datasets before deployment) or online (against live traffic in production).

Evals are commonly built from real user traffic and failure cases surfaced by telemetry, and they are often used as release gates when changing [prompts](./prompt.md), tools, [LLMs](./llm.md), or [infrastructure](./ai-infrastructure.md).

## Examples

- A regression suite that checks whether prompt changes break known-good outputs.
- A model-as-judge pipeline that scores helpfulness and safety on sampled production requests.
- Human reviewers rating output quality on a labeled dataset before a model swap.

## Synonyms

evals
