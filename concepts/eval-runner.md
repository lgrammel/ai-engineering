# Eval Runner

An eval runner is the software component that executes [evaluation](./evaluations-evals.md) suites against an AI system (such as an [LLM](./llm.md), [agent](./agent.md), or pipeline). It orchestrates the end-to-end eval workflow: loading test cases or datasets, sending inputs to the system under test, collecting outputs, applying scoring or grading logic, and aggregating results into reports or metrics.

Eval runners are distinct from eval definitions (which describe _what_ to measure) -- the runner is the execution engine that carries out those definitions. They typically handle concurrency, retries, rate-limit backoff against [inference providers](./inference-provider.md), caching of intermediate results, and integration with [observability](./observability.md) for tracing and logging each eval step.

Eval runners can operate in different modes: locally during development (for fast iteration on [prompts](./prompt.md) or tool configurations), in CI pipelines (as automated release gates), or as hosted services that run on a schedule or in response to deployment events.

## Examples

- A CLI tool that reads a dataset of prompt/expected-output pairs, calls an LLM, scores each response, and writes a summary report.
- A CI job that runs an eval suite on every pull request and blocks merging if accuracy drops below a threshold.
- A hosted eval platform that schedules nightly runs against production model endpoints and tracks metrics over time.

## Synonyms

eval harness, evaluation runner, eval orchestrator
