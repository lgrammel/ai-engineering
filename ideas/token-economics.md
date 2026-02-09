# Token Economics

Token economics is the idea that [agents](../concepts/agent.md) face a cost trade-off on every step: spend [tokens](../concepts/token.md) on GPU-based [inference](../concepts/inference.md) to reason through a problem, or delegate to a [tool](../concepts/tools.md) that executes on a CPU. Tools offer the traditional advantages of algorithms -- they are cheaper to run, faster, and produce precise, deterministic results. Inference is flexible and general-purpose but expensive per unit of work.

The decision boundary shifts with the task. Arithmetic, text search, data retrieval, and code compilation are far cheaper and more reliable as tool calls. Open-ended reasoning, natural language generation, and ambiguous judgment calls have no tool equivalent and must stay in inference. The economic sweet spot for an agent is to use inference only for what tools cannot do: understanding intent, planning steps, and interpreting results.

Tool adoption follows a cost logic: a tool gets used when the tokens saved by delegating to it exceed the tokens spent on knowing about it (schema in context) and operating it (formatting calls, parsing results). Tools with very high savings-to-cost ratios (e.g., grep, calculators, compilers) become permanent infrastructure. Tools where the ratio is marginal may be replaced when models become cheaper or more capable.

Some agents blur the boundary by generating tools on the fly through code execution -- writing and running a short program instead of reasoning through the answer token by token. This turns inference into a tool factory: the model spends a small number of tokens producing code, then offloads the actual computation to a CPU-based runtime. Tasks like data transformation, numerical analysis, or format conversion become hybrid operations where inference handles the "what" and generated code handles the "how."

Tools that encode hard-won domain knowledge (e.g., git, databases, workflow engines) have strong survival characteristics, because the token cost of re-deriving that knowledge through inference is prohibitive.

## Examples

- An agent using a calculator tool for arithmetic rather than performing multiplication via inference, because CPU computation is cheaper and exact.
- grep surviving as permanent infrastructure because CPU-based pattern matching vastly outperforms inference for text search.
- A coding agent writing and executing a Python script to process a CSV file rather than reasoning through the transformation row by row in tokens.
- A database query engine persisting because encoding decades of query optimization into inference would burn far more tokens than a tool call.

## External references

- https://steve-yegge.medium.com/software-survival-3-0-97a2a6255f7b
