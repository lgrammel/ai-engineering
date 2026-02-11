# Computer Use Agent

An [agent](./agent.md) that uses a [computer use tool](./computer-use-tool.md) as its primary interaction mechanism, operating software through graphical user interfaces (GUIs) via screenshots and mouse/keyboard actions rather than through APIs or structured data interfaces.

## Details

Computer use agents run a perception-reasoning-action loop: the agent captures a screenshot, reasons about the current screen state and what step to take next, executes a GUI action (click, type, scroll), and repeats. This loop is the same [tool](./tools.md)-using agent loop, but with the computer use tool as the dominant capability. Many computer use agents augment GUI interaction with supplementary tools like shell (bash) and text editor tools, or a [code execution tool](./code-execution-tool.md), for tasks where direct file or command-line access is more efficient than navigating a GUI.

The core advantage is universality: a computer use agent can operate any application designed for human use without requiring dedicated integrations or APIs. This makes it applicable to the "long tail" of software that lacks programmatic interfaces - legacy enterprise applications, complex web workflows, and desktop software. In practice, computer use agents are most commonly deployed for web-based task automation (form filling, data entry, multi-step web workflows) because browser environments are easier to sandbox and reproduce than full desktop environments.

Computer use agents are significantly slower and less reliable than API-based agents. GUI interactions require multiple screenshot-action cycles where each step depends on accurate visual understanding, and small errors (misidentifying a button, clicking the wrong coordinates) can cascade. Benchmark results reflect this gap: success rates on desktop tasks remain well below human performance, with web-based tasks (where environments are more constrained) faring better than full desktop automation. Performance improves with more allowed steps, suggesting a test-time scaling dynamic where the agent self-corrects through additional iterations.

Because computer use agents have broad, unstructured access to whatever is on screen, they face elevated security risks. On-screen [prompt injection](../threats/prompt-injection.md) - malicious instructions embedded in web pages, documents, or images - can hijack the agent's actions while it controls the desktop. Deployments typically mitigate this through isolated [sandboxed](./sandbox.md) environments, domain allowlists, [human-in-the-loop](./human-in-the-loop.md) confirmation for consequential actions, and adversarial content monitoring.

## Examples

- OpenAI Operator: a consumer-facing web agent powered by CUA that performs web tasks (shopping, booking, research) in a cloud browser with user confirmation for sensitive actions.
- Anthropic's computer use reference implementation: a Docker-based Linux desktop where Claude controls applications through screenshots and mouse/keyboard, combining the computer use tool with bash and text editor tools.
- Browser automation agents built on open-source frameworks that use vision models to navigate web UIs for testing, scraping, or workflow automation.

## Synonyms

CUA, GUI agent, desktop agent, browser use agent
