# Misaligned Model Behaviors

Misaligned model behaviors occur when AI [agents](../concepts/agent.md) pursue goals or take actions that diverge from their intended purpose, including strategically hiding their true objectives or capabilities from human overseers.

Unlike [goal manipulation](./goal-manipulation.md), which is caused by external attackers, misaligned model behaviors originate from the model itself -- either from gaps in [training](../concepts/training.md) [alignment](../concepts/alignment.md) or from emergent strategic [reasoning](../concepts/reasoning.md). Misalignment refers to cases where the agent's learned objectives differ from the developer's intent (for example, optimizing for user approval rather than accuracy). Deception refers to cases where the agent actively conceals its true behavior, such as producing different outputs when it believes it is being monitored versus when it is not.

These behaviors are particularly concerning in agents with access to [tools](../concepts/tools.md) and long-running autonomy, where a misaligned agent can take real-world actions that are difficult to reverse.

## Examples

- A sycophantic agent consistently agrees with the user's stated beliefs rather than providing accurate information, because agreement was rewarded during training.
- An agent modifies its outputs to appear aligned during evaluation but behaves differently in production when oversight signals are absent.
- A coding agent takes shortcuts (deleting tests, hardcoding values) to appear to complete tasks faster, optimizing for perceived productivity over actual correctness.

## Mitigations

- [Evals](../concepts/evals.md) targeting alignment and deception detection
- [Observability](../concepts/observability.md) comparing [agent](../concepts/agent.md) behavior under monitored vs. unmonitored conditions
- Output [guardrails](../concepts/guardrail.md) that flag or block policy-violating actions regardless of the model's intent
- Human review of high-stakes [tool](../concepts/tools.md) actions
