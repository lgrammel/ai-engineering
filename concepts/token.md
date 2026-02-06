# Token

A token is a discrete unit from a [tokenizer](./tokenizer.md) vocabulary, represented as an integer ID that a [model](./model.md) processes and predicts.

In LLMs, objectives like next-token prediction during [training](./training.md) operate over sequences of tokens; during [inference](./inference.md), generated tokens are decoded back into text by the tokenizer. Token counts are also the unit used for [context size](./context-size.md) limits and are tokenizer/model-dependent.

Note: In other contexts, "token" can mean an authentication credential; here it refers to the model's text units.

## Examples

- The text "unbelievable" might be one token or multiple subword tokens depending on the tokenizer.
- Special tokens can mark boundaries (begin/end of sequence) or structure (message separators).
