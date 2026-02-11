# Human-in-the-Loop

Human-in-the-loop is a design pattern where human review, approval, or correction is integrated into an AI or [agent](./agent.md) workflow, giving a person the opportunity to inspect, modify, or override system decisions before they take effect.

## Details

Human-in-the-loop operates on a spectrum from fully autonomous (no human involvement) to fully supervised (every action reviewed). In [agent](./agent.md) systems, the most common form is [tool execution approval](./tool-execution-approval.md), where high-risk [tool](./tools.md) calls are paused for human confirmation while low-risk actions proceed automatically. Beyond tool approval, human-in-the-loop encompasses review checkpoints (a human reviews agent output before it is published or deployed), escalation triggers (the agent hands off to a human when confidence is low or the task exceeds its scope), and feedback loops (human corrections are used to improve future behavior via [fine-tuning](./fine-tuning.md) or [evals](./evals.md)).

Human-in-the-loop acts as a system-level [guardrail](./guardrail.md): it catches errors, [hallucinations](./hallucination.md), and [tool misuse](../threats/tool-misuse.md) that automated checks miss. The tradeoff is reduced autonomy and throughput - every review step adds latency and requires human attention. This makes all forms of human-in-the-loop review - tool approval, code review, content sign-off - vulnerable to [human approval fatigue exploitation](../threats/human-approval-fatigue-exploitation.md), where high volumes or complexity of requests degrade reviewer attentiveness and allow harmful actions to slip through.

## Examples

- A [local coding agent](./local-coding-agent.md) working in a pair-programming model where the developer reviews each proposed change before it is applied.
- A content generation pipeline where a human editor reviews and approves agent-drafted articles before publication.
- A [multi-agent system](./multi-agent-system.md) that escalates to a human operator when agents disagree or encounter ambiguous instructions.
- A customer support agent that handles routine queries autonomously but routes complex or sensitive cases to a human representative.

## Synonyms

HITL, human oversight, human review, human supervision
