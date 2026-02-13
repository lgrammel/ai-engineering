# Transformer Architecture

The transformer architecture is a neural network design for sequence modeling built around attention (especially self-attention), enabling a model to relate [tokens](./token.md) to each other across a [context window](./context.md) while processing inputs in parallel. It is the architecture underlying virtually all current [LLMs](./llm.md) and [embedding models](./embedding-model.md), established during [pretraining](./pretraining.md).

## Details

The attention mechanism allows each token in a sequence to attend to every other token, which is what gives [LLMs](./llm.md) their [context window](./context.md): the model can reference any part of the input when generating each output [token](./token.md). Self-attention also enables parallel processing of input sequences (unlike recurrent architectures that process tokens sequentially), which makes [pretraining](./pretraining.md) on large datasets and fast [inference](./inference.md) prefill practical on GPU hardware. [Embedding models](./embedding-model.md) typically use the encoder component of the transformer to produce fixed-dimensional [embeddings](./embedding.md) from variable-length inputs.

## Synonyms

transformer, attention-based architecture
