# Benchmarks

Benchmarks are standardized evaluation suites (datasets, tasks, and scoring protocols) used to compare AI models or systems in a consistent way, often across teams or over time. They are a subset of [evals](./evals.md) where inputs and metrics are intentionally fixed to enable repeatable, apples-to-apples comparisons.

## Details

Benchmarks are often published with leaderboards, which can create incentives to optimize for benchmark-specific distributions rather than real-world performance (see [eval-reality gap](../ideas/eval-reality-gap.md)). They can also be compromised by data contamination (benchmark examples leaking into [training](./training.md) data) or metric gaming - a form of [reward hacking](./reward-hacking.md) where [LLM](./llm.md) developers or [reinforcement learning](./reinforcement-learning.md) pipelines optimize for benchmark scores rather than genuine capability.

## Examples

- **Common standardized benchmarks named in model cards**:
  - **MMLU**: multiple-choice questions across many academic/professional subjects.
  - **GSM8K**: grade-school math word problems.
  - **HumanEval**: Python coding tasks scored by passing unit tests.
  - **HellaSwag**: commonsense multiple-choice completion/inference.
  - **ARC-Challenge (ARC)**: grade-school science multiple-choice questions (challenge set).
- A public leaderboard benchmark for coding or tool use, used to compare model versions.
- An internal standardized suite run weekly to track performance across product surfaces.

## Synonyms

standardized eval suite, leaderboard benchmark

## External references

- https://www.anthropic.com/claude-3-model-card
- https://storage.googleapis.com/deepmind-media/gemini/gemini_1_report.pdf
- https://cdn.openai.com/papers/gpt-4.pdf
