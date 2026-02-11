# RLHF

RLHF (reinforcement learning from human feedback) is a [post-training](./post-training.md) technique that uses human preference judgments to [fine-tune](./fine-tuning.md) an [LLM](./llm.md), steering it toward outputs that humans rate as more helpful, honest, or safe. It is a primary mechanism for establishing [instruction following](./instruction-following.md) behavior and model-level [alignment](./alignment.md).

## Details

The core idea is to train a reward model on human comparisons of model outputs, then optimize the LLM's policy against that reward model using [reinforcement learning](./reinforcement-learning.md). DPO (direct preference optimization) is a variant that skips the explicit reward model by optimizing directly on preference pairs. RLHF and its variants are typically applied after supervised [fine-tuning](./fine-tuning.md) and before deployment. Because the reward model is a learned proxy for human preferences, RLHF is susceptible to [reward hacking](./reward-hacking.md) - the model may learn to exploit the reward signal (for example producing sycophantic or verbose outputs) rather than genuinely improving on the intended objective.

## Synonyms

reinforcement learning from human feedback, preference-based alignment
