# Prompt Engineering

Prompt engineering is the practice of crafting and iterating on the instructions, examples, and formatting within a [prompt](./prompt.md) to elicit desired behavior from an [LLM](./llm.md).

## Details

Techniques include writing clear system instructions, selecting and ordering [in-context learning](./in-context-learning.md) examples (few-shot prompting), specifying output format constraints ([structured output](./structured-output.md)), chain-of-thought elicitation for improved [reasoning](./reasoning.md), and adjusting [sampling parameters](./sampling-parameters.md) such as temperature.

Prompt engineering focuses on what the developer directly writes in the [prompt template](./prompt-template.md). [Context engineering](./context-engineering.md) is a broader practice that encompasses prompt engineering but extends to the full lifecycle of all context sources: [retrieval](./retrieval.md), ranking, [prompt compaction](./prompt-compaction.md), [memory](./agent-memory.md) management, tool-output formatting, and context-budget allocation under a given [context size](./context-size.md). As LLM applications grew from single-turn completions to [agent](./agent.md)-based systems with dynamic context from tools, documents, and multi-turn history, the term context engineering emerged to describe this expanded scope.

## Examples

- Rewriting a system message to reduce [hallucination](./hallucination.md) by adding "only use the provided context" instructions.
- Adding few-shot examples to standardize the output format of a classification task.
- Inserting a "think step by step" directive to improve multi-step reasoning accuracy.
- Iterating on prompt wording guided by [evals](./evals.md) to improve task performance without changing the model or retrieval pipeline.
