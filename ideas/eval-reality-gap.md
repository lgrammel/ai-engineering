# Eval-Reality Gap

The eval-reality gap is the disconnect between strong [eval](../concepts/evals.md) performance and weak real-world utility, where models ace hard [benchmarks](../concepts/benchmarks.md) but fail at basic tasks in practical deployment.

## Details

One explanation is that [RL](../concepts/reinforcement-learning.md) environment design is inadvertently shaped by evals: teams create training environments inspired by the benchmarks they want to perform well on, producing models that are highly specialized for eval-like distributions. This is compounded by inadequate generalization - because models do not transfer skills robustly, narrow RL training on benchmark-like tasks does not translate into broad real-world capability, even when the underlying knowledge is present.

The analogy is two students: one who practiced 10,000 hours of competitive programming (memorized all proof techniques and algorithms, became one of the best) versus one who practiced 100 hours but has an intuitive "it" factor. The first student is the current model - heavily optimized for the benchmark distribution - while the second represents what robust generalization would look like. The 10,000-hour student's preparation does not necessarily transfer to a career building real software, just as a model trained on every competitive programming problem does not necessarily maintain a real codebase without oscillating between bugs.

This is a form of systemic [reward hacking](../concepts/reward-hacking.md): not the model exploiting its reward signal, but the human researchers inadvertently optimizing the training pipeline for eval scores rather than real-world performance.

## Examples

- A model that scores in the top percentile on coding benchmarks but alternates between introducing and reintroducing bugs when fixing real code
- A model that solves hard math competition problems but makes basic errors in applied settings with unfamiliar framing
- An RL-trained model whose training environments were designed to match specific eval distributions, producing high benchmark scores that do not predict deployment quality

## External references

- https://www.dwarkesh.com/p/ilya-sutskever-2
