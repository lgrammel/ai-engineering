# Prompt Template

A prompt template is a parameterized structure that defines the static instructions, formatting, and message layout of a [prompt](./prompt.md), with placeholders that are filled with dynamic content at runtime to produce the final prompt sent to an [LLM](./llm.md).

## Details

Templates separate what the developer authors (instructions, role assignments, output format specifications) from what the system provides at request time (user input, [retrieved context](./retrieval.md), tool outputs, conversation history). This separation enables reuse across requests, structured [prompt engineering](./prompt-engineering.md) iteration, and [prompt management](./prompt-management.md) workflows where templates are versioned and tested independently of application code.

Common template structures range from simple string interpolation (inserting variables into a text block) to message-array templates that define a sequence of role-tagged messages (system, user, assistant) with per-message placeholders. More complex templates include conditional sections that are included or omitted based on available context, and loops that expand over collections such as [in-context learning](./in-context-learning.md) examples or retrieved documents.

Structuring templates with a stable prefix (system instructions, few-shot examples) followed by variable content (user input, retrieved context) improves [prompt caching](./prompt-caching.md) hit rates, since caching operates on token-level prefix matches.

## Examples

- A customer support template with a fixed system message defining tone and policy rules, followed by placeholders for the customer's question and relevant knowledge base articles.
- A classification template with few-shot examples in fixed positions and a placeholder for the input text to classify.
- An [agent](./agent.md) system prompt template with conditional sections for available [tools](./tools.md) and [skills](./skill.md) that are included based on the current task.
