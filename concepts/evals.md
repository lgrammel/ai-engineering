# Evals

Evals (evaluations) are systematic tests used to measure and monitor [LLM](./llm.md) or system performance on specific tasks. Unlike conventional software tests that assert binary pass/fail on deterministic outputs, evals handle non-deterministic model behavior and typically use statistical or qualitative scoring (e.g., accuracy rates, human preference rankings). They are used to compare variants, catch regressions, and track metrics like accuracy, safety, and robustness.

## Details

Standardized [benchmarks](./benchmarks.md) are a subset of evals designed for repeatable comparisons, often with fixed datasets and scoring.

Eval approaches include automated metrics (exact match, similarity scores), model-as-judge (using an LLM to grade outputs), and human evaluation. Evals can run offline (on curated datasets before deployment) or online (against live traffic in production).

Evals are commonly built from real user traffic and failure cases surfaced by [observability](./observability.md) telemetry, and they are often used as release gates when changing [prompts](./prompt.md), tools, [LLMs](./llm.md), or [infrastructure](./ai-infrastructure.md). An [eval runner](./eval-runner.md) is the software component that orchestrates eval execution end-to-end.

Evals can inadvertently shape [reinforcement learning](./reinforcement-learning.md) training targets when teams design training environments to match the [benchmarks](./benchmarks.md) they want to score well on, creating a feedback loop that inflates benchmark scores without improving real-world utility (see [eval-reality gap](../ideas/eval-reality-gap.md)). This is a form of systemic [reward hacking](./reward-hacking.md) that operates at the pipeline level rather than the model level.

## Examples

- A regression suite that checks whether prompt changes break known-good outputs.
- A model-as-judge pipeline that scores helpfulness and safety on sampled production requests.
- Human reviewers rating output quality on a labeled dataset before a model swap.

## Synonyms

evaluations
