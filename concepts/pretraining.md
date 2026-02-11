# Pretraining

Pretraining is large-scale [training](./training.md) of a model on broad data to learn general representations, producing a general-purpose base model. For [LLMs](./llm.md), this typically involves self-supervised next-[token](./token.md) prediction over sequences from a [tokenizer](./tokenizer.md). The temporal boundary of the pretraining data defines the model's [knowledge cutoff](./knowledge-cutoff.md).

## Details

Pretraining establishes broad capabilities; later [post-training](./post-training.md) phases such as [fine-tuning](./fine-tuning.md) and [reinforcement learning](./reinforcement-learning.md) adapt the model to specific tasks, formats, or policies. Some workflows continue training an existing model on additional broad or domain data using the same pretraining objective ("continued pretraining"), which is often contrasted with fine-tuning even though both update weights.

## Synonyms

pre-training, base model training, foundation model training
