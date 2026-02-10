# RLHF

RLHF (reinforcement learning from human feedback) is a [post-training](./post-training.md) technique that uses human preference judgments to [fine-tune](./fine-tuning.md) an [LLM](./llm.md), steering it toward outputs that humans rate as more helpful, honest, or safe.

The typical RLHF pipeline has three stages: collect human comparisons of model outputs, train a reward model that predicts human preferences from those comparisons, and optimize the LLM's policy against the reward model using reinforcement learning (commonly PPO). DPO (direct preference optimization) is an alternative that skips the explicit reward model by optimizing directly on preference pairs, simplifying the pipeline while targeting similar [alignment](./alignment.md) goals. RLHF and its variants are a primary mechanism for establishing [instruction following](./instruction-following.md) behavior and model-level [alignment](./alignment.md), typically applied after supervised [fine-tuning](./fine-tuning.md) and before deployment.

## Examples

- Training a chat model to prefer detailed, accurate answers over short or evasive ones using human comparison data.
- Using DPO to reduce harmful outputs by optimizing on preference pairs where the safer response is preferred.
- Applying RLHF to teach a model to decline dangerous requests while remaining helpful for legitimate queries.

## Synonyms

reinforcement learning from human feedback, RLHF, DPO, direct preference optimization, preference-based alignment
