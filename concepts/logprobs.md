# Logprobs

Logprobs (log probabilities) are the logarithmic probability values that an [LLM](./llm.md) assigns to [tokens](./token.md) during [inference](./inference.md), representing how likely the model considered each token as the next in the sequence. Many [inference providers](./inference-provider.md) expose logprobs as an optional API parameter, giving applications direct access to the model's output distribution.

## Details

During generation, an LLM produces a probability distribution over its vocabulary for each output position. Logprobs are the natural logarithm of these probabilities - values range from negative infinity (impossible) to zero (certain), with higher (less negative) values indicating stronger model confidence. APIs typically return logprobs for the chosen token and optionally for the top-k alternative tokens at each position, making it possible to inspect what the model "almost" generated.

Logprobs enable several practical capabilities in AI engineering. Confidence estimation uses per-token or per-sequence logprobs to gauge how certain the model is about its output - low logprobs on key tokens can signal potential [hallucinations](./hallucination.md) or out-of-distribution inputs. [Model routing](./model-routing.md) systems use logprob-derived confidence to decide whether to accept a cheaper model's output or escalate to a stronger model. Classification tasks can read logprobs on candidate label tokens directly rather than parsing generated text, improving reliability and reducing [latency](./latency.md). Logprobs also support [eval](./evals.md) workflows by providing per-token scoring of model outputs against reference completions.

Logprobs expose the distribution that [sampling parameters](./sampling-parameters.md) act upon: temperature, top-p, and top-k reshape or filter this distribution before a token is selected, but logprobs capture the model's raw assessment before sampling.

## Examples

- Flagging a generated answer for human review when the average logprob across output tokens falls below a threshold, indicating low model confidence.
- A cascade routing system that accepts a small model's output when its logprobs are high and falls back to a frontier model when they are low.
- Reading the logprob assigned to "true" vs "false" tokens to perform binary classification without generating free-form text.
- Comparing per-token logprobs across model versions during [evals](./evals.md) to detect capability regressions on specific input patterns.

## Synonyms

log probabilities, token log probabilities, token logprobs
