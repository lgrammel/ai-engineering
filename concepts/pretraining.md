# Pretraining

Pretraining is large-scale [training](./training.md) of a model on broad data to learn general representations (for [LLMs](./llm.md), typically via self-supervised objectives like next-[token](./token.md) prediction over sequences from a [tokenizer](./tokenizer.md)), producing a general-purpose base model.

Pretraining is commonly the first phase of training that establishes broad capabilities; later [post-training](./post-training.md) phases such as [fine-tuning](./fine-tuning.md) adapt the model to specific tasks, formats, or policies.

Note: Some workflows continue training an existing model on additional broad or domain data using the same pretraining objective ("continued pretraining"), which is often contrasted with fine-tuning even though both update weights.

## Examples

- Pretraining a [transformer architecture](./transformer-architecture.md) language model on a mixture of web text and code using next-token prediction
- Continued pretraining of a base model on a large corpus of biomedical papers using the same objective

## Synonyms

pre-training, base model training, foundation model training
