# Instruction Following

Instruction following is an [LLM](./llm.md) behavior where the model treats parts of the input (often system/developer/user messages in a [prompt](./prompt.md)) as instructions and generates outputs that aim to satisfy those constraints.

It is typically strengthened during [post-training](./post-training.md) via instruction [fine-tuning](./fine-tuning.md) and preference-based methods (for example RLHF), and it strongly influences how "chat" models behave across multi-turn conversations.

Note: Instruction following is not the same as task capability; a model can understand an instruction yet fail to complete it due to missing knowledge, weak [reasoning](./reasoning.md), or missing tools.

## Examples

- "Answer in JSON with keys ...", "Be brief", "Use the provided context only", "Do not reveal secrets".
- Following a malicious instruction embedded in retrieved content is a common failure mode in [prompt injection](./prompt-injection.md).

## Synonyms

instruction adherence, instruction compliance
