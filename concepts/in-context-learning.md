# In-Context Learning

In-context learning is the ability of an [LLM](./llm.md) to adapt its behavior based on examples or instructions provided in the [context](./context.md) at [inference](./inference.md) time, without any update to the model's weights.

## Details

Unlike [fine-tuning](./fine-tuning.md), which permanently alters model weights, in-context learning works entirely through the input [prompt](./prompt.md): the model processes provided examples and generalizes from them within a single request. This capability emerges from [pretraining](./pretraining.md) on large corpora. The underlying mechanism is still debated - proposed explanations include implicit Bayesian inference, gradient-descent-like updates within the forward pass, and task-vector formation in the attention layers of the [transformer architecture](./transformer-architecture.md). In practice, this means the reliability boundaries of ICL are not fully understood: it can fail unpredictably when examples fall outside the distributions the model learned to generalize from during pretraining.

In-context learning spans a spectrum of example density. Zero-shot prompting provides only instructions and no examples. Few-shot prompting includes a handful of input-output demonstrations. Many-shot prompting scales to tens or hundreds of examples, bounded by the model's [context size](./context.md). Example selection, ordering, and formatting all affect output quality, making this a key concern of [context engineering](./context-engineering.md).

## Examples

- Providing three labeled sentiment examples (positive, negative, neutral) in the prompt so the model classifies new reviews in the same format.
- A zero-shot instruction asking the model to translate text into formal English without any demonstration pairs.
- Including dozens of domain-specific Q&A pairs in the prompt to steer the model toward a particular terminology and response structure.

## Synonyms

ICL, few-shot learning, few-shot prompting, many-shot prompting
