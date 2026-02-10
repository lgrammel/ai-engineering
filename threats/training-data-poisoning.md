# Training Data Poisoning

Training data poisoning is an attack that corrupts a model's behavior by injecting malicious, biased, or backdoored examples into its [training](../concepts/training.md) dataset, causing the resulting model to exhibit attacker-chosen behaviors during [inference](../concepts/inference.md).

Training data poisoning targets the model development phase rather than runtime inputs. Unlike [context poisoning](./context-poisoning.md) (which manipulates data the model reads at inference time) and [supply chain attack](./supply-chain-attack.md) (which targets external components the agent depends on), training data poisoning embeds malicious behavior directly into the model's weights during [pretraining](../concepts/pretraining.md) or [fine-tuning](../concepts/fine-tuning.md). The resulting [misaligned model behaviors](./misaligned-model-behaviors.md) can be difficult to detect because they may only activate under specific trigger conditions (backdoor attacks) while the model performs normally on standard [evals](../concepts/evals.md).

Poisoning can occur at multiple stages: during large-scale pretraining data collection (where an attacker contributes content to web sources that get scraped), during fine-tuning on curated datasets (where poisoned examples are inserted), or during preference data collection for [RLHF](../concepts/rlhf.md) (where annotators or automated pipelines introduce biased preferences). [Synthetic data](../concepts/synthetic-data.md) pipelines introduce an additional vector: if the generator model is compromised or its outputs are not validated, poisoned examples can propagate at scale.

## Examples

- An attacker publishes code snippets containing subtle vulnerabilities on public repositories, which get included in a [coding agent's](../concepts/coding-agent.md) pretraining data and cause the model to reproduce those patterns.
- Poisoned fine-tuning data teaches a model to insert a specific backdoor when it encounters a trigger phrase, while behaving normally otherwise.
- An attacker contributes biased preference annotations during RLHF data collection, skewing the model's [alignment](../concepts/alignment.md) toward attacker-preferred behaviors.
- Malicious examples in a [synthetic data](../concepts/synthetic-data.md) pipeline propagate at scale because the generated data is not validated before use in training.

## Mitigations

- Data provenance tracking and integrity verification for training datasets
- Automated and manual data quality filtering, deduplication, and anomaly detection
- [Evals](../concepts/evals.md) targeting backdoor detection and robustness under trigger conditions
- Diversifying data sources to reduce the impact of any single poisoned source
- [Red teaming](../concepts/red-teaming.md) against known poisoning techniques
