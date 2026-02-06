# Large Language Model (LLM, Model)

A Large Language Model is a neural network trained to predict the next token using large text and multimodal datasets. It can generate and transform text and is commonly used in chatbots and [agents](./agent.md).

An LLM processes inputs within a bounded context window (see [context size](./context-size.md)); the information an application expects the model to use is limited to what is placed into its [context](./context.md) (instructions, history, retrieved content, tool outputs), which is why [context engineering](./context-engineering.md) is a core practice for production systems.
