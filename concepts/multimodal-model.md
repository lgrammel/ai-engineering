# Multimodal Model

A multimodal model processes inputs from, and/or generates outputs across, more than one modality (e.g., text, images, audio, video). Most modern multimodal models extend the [transformer architecture](./transformer-architecture.md) by pairing modality-specific encoders (such as vision encoders for images) with an [LLM](./llm.md) backbone, converting non-text inputs into [token](./token.md)-like representations that the model processes alongside text tokens.

The most common variant is the vision-language model, which accepts images and text as input and generates text. Other variants support audio input, video understanding, or multimodal output generation (producing images, audio, or video in addition to text). Multimodal capabilities are typically established during [pretraining](./pretraining.md) on paired multimodal data (e.g., image-text pairs) and can be refined through [fine-tuning](./fine-tuning.md) on modality-specific tasks.

In practice, multimodal models are accessed through the same [inference](./inference.md) APIs as text-only LLMs, with requests containing mixed-modality inputs (e.g., an image alongside a text prompt). The additional modality encoders add [latency](./latency.md) and compute cost compared to text-only inference.

## Examples

- A vision-language model that accepts an image and a text question, then generates a text answer describing the image content.
- A model that processes audio input alongside text for speech understanding and transcription.
- A multimodal [embedding model](./embedding-model.md) that maps images and text into a shared vector space for cross-modal retrieval (e.g., CLIP).
- A model that generates both text and images from a text prompt.

## Synonyms

multimodal AI, multi-modal model, vision-language model (subset)
