# Sampling Parameters

Sampling parameters are [inference](./inference.md)-time settings that control the randomness and shape of the [token](./token.md) probability distribution during [LLM](./llm.md) generation, without changing the model's weights.

## Details

Common parameters include temperature (scales the logit distribution - lower values make the model more deterministic, higher values increase randomness), top-p / nucleus sampling (restricts sampling to the smallest set of tokens whose cumulative probability exceeds a threshold), top-k (restricts sampling to the k most probable tokens), and repetition penalties (frequency and presence penalties that discourage the model from repeating tokens it has already generated). These parameters interact: for example, temperature reshapes the distribution before top-p or top-k filtering is applied. [Logprobs](./logprobs.md) expose the underlying distribution that these parameters act upon, capturing the model's raw token probabilities before sampling occurs.

Sampling parameter choices affect output quality, diversity, and reliability. Lower temperature and tighter top-p values produce more focused, reproducible outputs suited to tasks like [structured output](./structured-output.md) generation and [tool](./tools.md) calling. Higher values encourage diversity and creativity but increase the risk of [hallucination](./hallucination.md) and incoherent outputs. [Inference providers](./inference-provider.md) expose these parameters through their APIs, and tuning them is a routine part of [prompt](./prompt.md) development and [eval](./evals.md) configuration.

## Examples

- Setting temperature to 0 for deterministic [tool](./tools.md) call generation in an [agent](./agent.md) system.
- Using top-p of 0.9 with moderate temperature for creative writing tasks.
- Lowering temperature during [evals](./evals.md) to reduce variance across runs and produce more comparable results.

## Synonyms

decoding parameters, generation parameters, temperature settings
