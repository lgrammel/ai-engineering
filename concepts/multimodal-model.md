# Multimodal Model

A multimodal model processes inputs from, and/or generates outputs across, more than one modality (e.g., text, images, audio, video). Most modern multimodal models extend the [transformer architecture](./transformer-architecture.md) by pairing modality-specific encoders (such as vision encoders for images) with an [LLM](./llm.md) backbone, converting non-text inputs into [token](./token.md)-like representations that the model processes alongside text tokens.

## Details

The most common variant is the vision-language model, which accepts images and text as input and generates text. Other variants support audio input, video understanding, or multimodal output generation (producing images, audio, or video in addition to text). Multimodal capabilities are typically established during [pretraining](./pretraining.md) on paired multimodal data (e.g., image-text pairs) and can be refined through [fine-tuning](./fine-tuning.md) on modality-specific tasks.

In practice, multimodal models are accessed through the same [inference](./inference.md) APIs as text-only LLMs, with requests containing mixed-modality inputs (e.g., an image alongside a text prompt). The additional modality encoders add [latency](./latency.md) and compute cost compared to text-only inference.

### Image understanding

Image understanding is the capability to process images as input and reason about their visual content alongside text. In [AI engineering](./ai-engineering.md), this is typically accessed by including images in API requests alongside text [prompts](./prompt.md). The model's vision encoder converts the image into token-like representations, allowing the model to describe image contents, answer questions about visual elements, extract text from screenshots or documents, and reason about spatial relationships.

Image understanding introduces a distinct [prompt injection](../threats/prompt-injection.md) surface: adversarial content can be embedded directly in images (as visible or near-invisible text, QR codes, or steganographic patterns) that the model processes as instructions. This visual prompt injection is particularly concerning because images appear benign to human reviewers while containing instructions that redirect model behavior. In [agent](./agent.md) systems where images enter the [context](./context.md) from untrusted sources (user uploads, web pages, screenshots), this creates an injection vector that bypasses text-based input filters.

### Image generation

Image generation is the capability to produce images from text descriptions (text-to-image) or transform existing images based on text instructions (image editing). In [AI engineering](./ai-engineering.md), image generation is typically accessed through APIs that accept text [prompts](./prompt.md) and return generated images. Models like DALL-E, Stable Diffusion, and Midjourney produce photorealistic or stylized images from natural language descriptions. When integrated into [agent](./agent.md) systems, image generation becomes a [tool](./tools.md) the model can invoke, producing visual content as part of a conversation or workflow.

Image generation introduces distinct trust concerns: generated images can be photorealistic enough to create convincing but fabricated visual content, and the model's interpretation of ambiguous prompts may produce unexpected or harmful outputs. [Guardrails](./guardrail.md) typically operate at both the prompt level (rejecting requests for harmful content) and the output level (filtering generated images), but these are probabilistic and can be circumvented through [guardrail bypass](../threats/guardrail-bypass.md) techniques.

## Examples

- A vision-language model that accepts an image and a text question, then generates a text answer describing the image content.
- A model that processes audio input alongside text for speech understanding and transcription.
- A multimodal [embedding model](./embedding-model.md) that maps images and text into a shared vector space for cross-modal retrieval (e.g., CLIP).
- A model extracting structured data from a screenshot of a table or form.
- A chatbot generating a diagram or illustration in response to a user request.
- An adversarial image containing near-invisible text that instructs the model to ignore previous instructions.

## Synonyms

multimodal AI, multi-modal model, vision-language model (subset), image understanding, image generation, text-to-image generation
