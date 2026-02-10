# Pretraining

Pretraining is large-scale [training](./training.md) of a model on broad data to learn general representations, producing a general-purpose base model. For [LLMs](./llm.md), this typically involves self-supervised next-[token](./token.md) prediction over sequences from a [tokenizer](./tokenizer.md). Pretraining establishes broad capabilities; later [post-training](./post-training.md) phases such as [fine-tuning](./fine-tuning.md) adapt the model to specific tasks, formats, or policies. The temporal boundary of the pretraining data defines the model's [knowledge cutoff](./knowledge-cutoff.md).

## Details

Pretraining data is finite, and as high-quality text data becomes harder to source at scale, the pretraining scaling recipe yields diminishing returns (see [scaling laws](./scaling-laws.md)). A common view is that pretraining achieves breadth through sheer data volume rather than deep [generalization](./generalization.md) -- coverage partially substitutes for robust transfer, which may explain why models can exhibit broad knowledge while generalizing less reliably than humans on novel tasks. The field has shifted significant compute toward [reinforcement learning](./reinforcement-learning.md) and other [post-training](./post-training.md) methods as returns from pretraining data scaling diminish in some regimes.

Note: Some workflows continue training an existing model on additional broad or domain data using the same pretraining objective ("continued pretraining"), which is often contrasted with fine-tuning even though both update weights.

## Examples

- Pretraining a [transformer architecture](./transformer-architecture.md) language model on a mixture of web text and code using next-token prediction
- Continued pretraining of a base model on a large corpus of biomedical papers using the same objective

## Synonyms

pre-training, base model training, foundation model training
