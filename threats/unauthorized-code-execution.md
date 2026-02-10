# Unauthorized Code Execution

Unauthorized Code Execution occurs when attackers exploit AI-generated or AI-managed execution environments to inject malicious code, trigger unintended system behaviors, or execute unauthorized scripts outside the intended [sandbox](../concepts/sandbox.md) boundaries.

These attacks target the code generation and execution capabilities of [agents](../concepts/agent.md), rather than their authorized [tool](../concepts/tools.md) use (which falls under [tool misuse](./tool-misuse.md)). Common vectors include injecting shell commands or scripts through crafted inputs that the agent executes via [code execution tools](../concepts/code-execution-tool.md), exploiting template rendering or serialization to achieve code execution, and escaping [sandbox](../concepts/sandbox.md) restrictions to reach the host system.

The risk is elevated when agents generate and run code dynamically, because the model cannot reliably distinguish safe from unsafe code patterns, especially when processing untrusted input that may contain [prompt injection](./prompt-injection.md) payloads.

## Examples

- An attacker crafts input that causes an agent's code interpreter to execute a reverse shell instead of the intended data analysis script.
- A model generates code that includes a malicious dependency import, which runs arbitrary code when installed (see also [supply chain compromise](./supply-chain-compromise.md)).
- Adversarial input triggers server-side template injection in an agent-generated web page, achieving code execution on the host.

## Mitigations

- [Sandboxing](../concepts/sandbox.md) all agent-generated code execution
- Restricting available system calls and network access in execution environments
- Input sanitization before code generation and execution
- Static analysis or review of generated code before execution
