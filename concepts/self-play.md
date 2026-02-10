# Self-Play

Self-play is a [reinforcement learning](./reinforcement-learning.md) technique where a model generates its own training signal by competing or interacting with copies of itself, producing training data from compute alone without requiring external datasets.

## Details

Self-play is narrower than [pretraining](./pretraining.md) in the skills it develops: competition between agents improves capabilities in domains with clear win conditions -- game strategy, negotiation, mathematical reasoning, code generation, and verification tasks. It does not naturally produce broad capabilities like language understanding or factual knowledge. This narrowness limits its applicability as a general [training](./training.md) method for [LLMs](./llm.md), though it remains valuable for targeted capability development in verifiable domains.

In practice, self-play has found descendants in adversarial training setups used with LLMs: debate (two models argue opposing positions), prover-verifier games (one model generates solutions while another checks them), and LLM-as-a-Judge configurations where the judge is incentivized to find mistakes. These are not pure self-play but share the principle of using agent-vs-agent interaction to generate training signal. More broadly, competition between agents creates an incentive for differentiation -- agents exposed to each other's strategies naturally seek unexplored approaches, which can drive diversity in [multi-agent systems](./multi-agent-system.md).

## Examples

- AlphaGo Zero learning to play Go entirely through games against itself, without human game data
- A debate setup where two [LLM](./llm.md) instances argue opposing sides of a question to produce more reliable answers
- A prover-verifier game where one model generates mathematical proofs and another attempts to find flaws
- Multiple [agents](./agent.md) working on the same problem, each inspecting others' approaches and pursuing differentiated strategies

## Synonyms

self-play training, adversarial self-play
