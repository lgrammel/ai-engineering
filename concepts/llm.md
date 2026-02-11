# LLM

An LLM (large language model) is a trained machine-learning model that maps text to text by predicting sequences of tokens. When extended to accept or produce additional modalities (images, audio, video), the result is a [multimodal model](./multimodal-model.md); the core LLM mechanism remains token prediction over text.

## Details

In this repository, LLMs are assumed to follow the [transformer architecture](./transformer-architecture.md): language models trained to predict the next [token](./token.md) (as defined by a [tokenizer](./tokenizer.md)) on large datasets. After [training](./training.md), an LLM is run during [inference](./inference.md) and is commonly used in [chatbots](./chatbot.md) and [agents](./agent.md). Many deployed LLMs are [instruction following](./instruction-following.md) variants created via [post-training](./post-training.md) such as [fine-tuning](./fine-tuning.md). Compact variants with roughly under 10 billion parameters are often called [small language models](./small-language-model.md) (SLMs).

An LLM processes inputs within a bounded context window (see [context size](./context-size.md)); the information an application expects the LLM to use is limited to what is placed into its [context](./context.md) via the [prompt](./prompt.md) (instructions, history, retrieved content, tool outputs). Across tasks, outcomes often depend on both knowledge and [reasoning](./reasoning.md).

## Synonyms

large language model
