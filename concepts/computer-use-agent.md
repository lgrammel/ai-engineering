# Computer Use Agent

An [agent](./agent.md) that uses a [computer use tool](./computer-use-tool.md) as its primary interaction mechanism, operating software through graphical user interfaces (GUIs) via screenshots and mouse/keyboard actions rather than through APIs or structured data interfaces.

## Details

Computer use agents run the [computer use tool's](./computer-use-tool.md) screenshot-action loop as the dominant capability in a standard [tool](./tools.md)-using agent loop. Many augment GUI interaction with supplementary tools like [shell](./shell-tool.md) (bash) and text editor tools, or a [code execution tool](./code-execution-tool.md), for tasks where direct file or command-line access is more efficient than navigating a GUI.

Because the computer use tool can operate any application designed for human use, these agents are most valuable for the "long tail" of software that lacks programmatic interfaces - legacy enterprise applications, complex web workflows, and desktop software. In practice, web-based task automation (form filling, data entry, multi-step web workflows) dominates because browser environments are easier to sandbox and reproduce than full desktop environments.

Computer use agents are significantly slower and less reliable than API-based agents. Small errors (misidentifying a button, clicking the wrong coordinates) cascade through multi-step tasks, and benchmark success rates on desktop tasks remain well below human performance, with web-based tasks faring better. Performance improves with more allowed steps, suggesting a test-time scaling dynamic where the agent self-corrects through additional iterations.

The broad, unstructured screen access that makes these agents flexible also amplifies the [security risks inherent in the computer use tool](./computer-use-tool.md) - on-screen [prompt injection](../threats/prompt-injection.md) can hijack agent actions across multi-step workflows where each compromised action compounds.

## Examples

- OpenAI Operator: a consumer-facing web agent powered by CUA that performs web tasks (shopping, booking, research) in a cloud browser with user confirmation for sensitive actions.
- Anthropic's computer use reference implementation: a Docker-based Linux desktop where Claude controls applications through screenshots and mouse/keyboard, combining the computer use tool with [bash/shell](./shell-tool.md) and text editor tools.
- Browser automation agents built on open-source frameworks that use vision models to navigate web UIs for testing, scraping, or workflow automation.

## Synonyms

CUA, GUI agent, desktop agent, browser use agent
