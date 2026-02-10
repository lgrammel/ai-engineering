# Structured Output

Structured output is an [LLM](./llm.md) capability where the model generates responses that conform to a predefined format or schema (typically JSON, but also XML, YAML, enums, or other constrained formats).

## Details

[Inference](./inference.md) providers implement structured output through constrained decoding (restricting the model's token generation to only valid outputs given a schema) or through [post-training](./post-training.md) that teaches the model to produce well-formed structured data. Constrained decoding guarantees schema compliance at the token level, while training-based approaches improve but do not guarantee compliance. Some inference APIs accept a JSON schema alongside the request and return outputs that are guaranteed to parse against it when using constrained decoding modes.

Structured output is foundational for reliable [tool](./tools.md) calling (tool calls are structured by definition), [agent](./agent.md) systems (where downstream code must parse model outputs), and application-level [guardrails](./guardrail.md) (constraining the output space reduces the surface for policy violations). [Evals](./evals.md) for structured output typically verify schema compliance, field correctness, and robustness under adversarial inputs.

## Examples

- An API call that returns a JSON object matching a provided schema, using a constrained decoding mode that enforces parseability.
- A classification task where the model outputs one of a fixed set of enum values.
- A tool call where the model generates a structured function name and argument object.

## Synonyms

constrained output, constrained decoding, JSON mode, structured generation
