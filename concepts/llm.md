# LLM

An LLM (large language model) is a trained machine-learning model that maps text (and sometimes other modalities) to text by predicting sequences of tokens.

In this repository, LLMs are assumed to follow the [transformer architecture](./transformer-architecture.md): language models trained to predict the next [token](./token.md) (as defined by a [tokenizer](./tokenizer.md)) on large datasets. After [training](./training.md), an LLM is run during [inference](./inference.md) and is commonly used in chatbots and [agents](./agent.md).

An LLM processes inputs within a bounded context window (see [context size](./context-size.md)); the information an application expects the LLM to use is limited to what is placed into its [context](./context.md) (instructions, history, retrieved content, tool outputs).

## Synonyms

large language model
