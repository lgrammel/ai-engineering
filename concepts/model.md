# Model

A model is a trained machine-learning system that maps inputs to outputs; in LLM-based products, "model" commonly refers to the large language model that generates or transforms text (and sometimes other modalities).

Here, models refer to [transformer architecture](./transformer-architecture.md) language models trained to predict the next [token](./token.md) (as defined by a [tokenizer](./tokenizer.md)) on large text (and sometimes multimodal) datasets; after [training](./training.md), they are run during [inference](./inference.md) and are commonly used in chatbots and [agents](./agent.md).

An LLM processes inputs within a bounded context window (see [context size](./context-size.md)); the information an application expects the model to use is limited to what is placed into its [context](./context.md) (instructions, history, retrieved content, tool outputs), which is why [context engineering](./context-engineering.md) is a core practice for production systems.

## Synonyms

large language model, LLM
