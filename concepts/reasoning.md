# Reasoning

Reasoning is an [LLM](./llm.md) capability involving multi-step inference, deduction, or planning to arrive at an answer -- for example breaking a problem into parts, evaluating constraints, or sequencing actions.

Some models and [inference](./inference.md) APIs expose reasoning as a separate output stream (a reasoning trace or "thinking" block) produced before the final answer, while in other models reasoning occurs implicitly within the generation process. In tool-using systems, reasoning often drives an iterative loop: reasoning over the current [context](./context.md), choosing a [tool](./tools.md) call, reasoning over the result, and repeating until a final response is produced.

## Examples

- Multi-step arithmetic or unit conversion (for example "If A costs X and B costs Y, what is the total?")
- Following a set of constraints to derive a consistent answer (logic puzzles, scheduling)
- Choosing and sequencing tool calls in an [agent](./agent.md)
- Returning a separate reasoning trace alongside a final answer in an inference API

## Synonyms

thinking
