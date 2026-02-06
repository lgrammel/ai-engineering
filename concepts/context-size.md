# Context Size

Context size is the maximum amount of input (measured in tokens) a model can attend to in a single request--its context window.

If the provided [context](./context.md) exceeds the model's context size, something must be dropped (truncation) or compressed (summarization), which can change quality, safety, and behavior.

## Examples

- A model with a 128k-token context window can accept longer documents than a 8k-token model.
- When a chat thread grows too long, older turns may be summarized to fit the window.
