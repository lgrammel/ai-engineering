# Model-as-a-Judge

Model-as-a-judge is an [eval](./evals.md) technique that uses an [LLM](./llm.md) to score, grade, or compare outputs from another AI system, replacing or supplementing human evaluation with automated model-based assessment.

## Details

A judge model receives the original input, the system's output, and typically a rubric or scoring criteria, then produces a structured assessment - a numeric score, a categorical label, or a pairwise preference between two candidate outputs. Judges commonly use [structured output](./structured-output.md) (e.g., JSON with score and rationale fields) for reliable downstream parsing by [eval runners](./eval-runner.md).

Model-as-a-judge scales evaluation beyond what human review can cover: it enables continuous scoring of production traffic, fast iteration on [prompt](./prompt.md) and model changes, and automated quality gates in CI/CD pipelines. It is widely used in [evals](./evals.md) for dimensions that lack deterministic metrics - helpfulness, coherence, safety, instruction adherence, and factual [grounding](./grounding.md) - where exact-match or similarity-based scoring is insufficient.

The technique also appears outside of traditional evals. [Guardrails](./guardrail.md) that classify outputs for safety or policy compliance are functionally model-as-a-judge applied at inference time. [Synthetic data](./synthetic-data.md) pipelines use judge models to filter or rank generated examples before they enter [training](./training.md) or [fine-tuning](./fine-tuning.md) datasets. [Benchmarks](./benchmarks.md) increasingly adopt model-as-a-judge scoring for open-ended tasks where fixed-answer evaluation is impractical (e.g., MT-Bench, AlpacaEval).

Known limitations include systematic biases: judge models tend to prefer verbose outputs over concise ones (verbosity bias), favor the first option in pairwise comparisons (position bias), and rate their own outputs higher than those of other models (self-preference bias). Judges can also be fooled by fluent but factually incorrect outputs, making them unreliable for detecting subtle [hallucinations](./hallucination.md) without [grounding](./grounding.md) checks. Using a stronger model as the judge than the model being evaluated, providing detailed rubrics, and requiring chain-of-thought rationales before scores are common practices for improving judge reliability.

## Examples

- An eval pipeline that sends each model response to a frontier LLM with a rubric, collecting helpfulness and safety scores in structured JSON.
- A pairwise comparison setup where the judge picks the better of two model outputs for each prompt, used to compute an Elo-style leaderboard.
- An output [guardrail](./guardrail.md) that uses a model to classify responses as safe or unsafe before returning them to users.
- A [synthetic data](./synthetic-data.md) pipeline that uses a judge model to score and filter generated training examples by quality.

## Synonyms

LLM-as-a-judge, LLM judge, automated judge, model-based evaluation

## External references

- https://arxiv.org/abs/2306.05685
