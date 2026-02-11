# Library Evals for Model Training

Library evals for model training is the idea that [tool](../concepts/tools.md) and library vendors can work directly with frontier [model developers](../concepts/model-developer.md) to create [evals](../concepts/evals.md) that demonstrate correct usage of their tools, which are then used to adjust model [training](../concepts/training.md) to improve those eval scores.

## Details

This is a paid mechanism for reducing the awareness cost described in [Agent SEO](./agent-seo.md). Rather than waiting for organic adoption to generate public training data, vendors create eval suites that show how (and how not) to use their tool, and model developers tune training to score well on these evals - effectively baking tool familiarity into the model's weights.

This creates a potential asymmetry: well-funded vendors can pay for training influence, while smaller or open-source tools rely on organic data. It also introduces a [supply chain](../threats/supply-chain-attack.md) consideration - if model training can be commercially influenced to favor specific tools, the integrity of that influence channel becomes security-relevant.

## Examples

- A tool vendor collaborating with a frontier lab to build evals demonstrating correct and incorrect tool invocations, then using those evals to adjust training.
- A database vendor creating eval suites that teach models to generate correct queries for their specific SQL dialect.

## External references

- https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b
