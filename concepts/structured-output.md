# Structured Output

Structured output is an [LLM](./llm.md) capability where the model generates responses that conform to a predefined format or schema (typically JSON, but also XML, YAML, enums, or other constrained formats).

## Details

[Inference](./inference.md) providers implement structured output through constrained decoding or through [post-training](./post-training.md) that teaches the model to produce well-formed structured data. Some providers combine both techniques.

Constrained decoding is the primary implementation mechanism for structured output guarantees. During standard LLM generation, the model produces a probability distribution over its full vocabulary at each step, and [sampling parameters](./sampling-parameters.md) shape this distribution before a [token](./token.md) is selected. Constrained decoding adds an additional filtering layer: at each generation step, a grammar-derived mask zeroes out the probabilities of all tokens that would lead to an invalid partial output, then sampling proceeds over the remaining valid tokens. The grammar is typically derived from a JSON Schema or a context-free grammar specification (e.g., GBNF) and compiled into a finite-state automaton or pushdown automaton that tracks which continuations are valid given the tokens generated so far. [Inference providers](./inference-provider.md) that offer constrained decoding typically accept a JSON Schema alongside the request and guarantee parseability for non-truncated outputs.

Constrained decoding guarantees syntactic schema compliance for completed outputs, while training-based approaches improve but do not guarantee compliance. However, syntactic compliance does not imply semantic correctness: by forcing the model away from its preferred token distribution, constrained decoding can push generation into low-probability regions, producing outputs that parse correctly but contain nonsensical, [hallucinated](./hallucination.md), or low-quality field values. This quality degradation is more pronounced when the schema tightly constrains the output space or when the model's [training](./training.md) distribution does not align well with the required format. This distinction matters for [agent](./agent.md) tasks that depend on the meaning of structured fields, not just parseability. A notable limitation is max-token truncation: if generation hits the token limit before the structure is closed, the output may be syntactically incomplete even under constrained decoding.

Structured output is foundational for reliable [tool](./tools.md) calling (tool calls are structured by definition), [agent](./agent.md) systems (where downstream code must parse model outputs), and application-level [guardrails](./guardrail.md) (constraining the output space reduces the surface for policy violations). [Evals](./evals.md) for structured output typically verify schema compliance, field correctness, and robustness under adversarial inputs.

## Examples

- An inference API that accepts a JSON Schema and masks invalid tokens at each generation step, guaranteeing the response parses against the schema.
- A local inference engine using GBNF grammars to constrain generation to valid SQL syntax.
- A classification task where the model outputs one of a fixed set of enum values, with only tokens forming allowed values selectable during generation.
- A tool call where the model generates a structured function name and argument object.

## Synonyms

constrained output, JSON mode, constrained decoding, guided generation, grammar-based decoding, grammar-constrained decoding, structured generation
