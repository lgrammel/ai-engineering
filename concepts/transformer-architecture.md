# Transformer Architecture

The transformer architecture is a neural network design for sequence modeling built around attention (especially self-attention), enabling a model to relate [tokens](./token.md) to each other across a [context window](./context-size.md) while processing inputs in parallel.

In [LLM](./llm.md) systems, "transformer" usually refers to stacked attention and feed-forward layers used in variants such as decoder-only (autoregressive generation), encoder-only (representation learning), and encoder-decoder (sequence-to-sequence). These architectures are established during [pretraining](./pretraining.md) and define the model's core structure throughout subsequent [training](./training.md) phases.

## Examples

- GPT-style decoder-only transformers for text generation.
- BERT-style encoder-only transformers for [embeddings](./embedding.md) and classification.
- T5-style encoder-decoder transformers for translation or summarization.
- Vision transformer (ViT) encoders for image representation in [multimodal models](./multimodal-model.md).

## Synonyms

transformer, attention-based architecture
