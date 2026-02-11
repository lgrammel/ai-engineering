# Computer Use Tool

A [tool](./tools.md) that lets an [LLM](./llm.md) or [agent](./agent.md) interact with a graphical user interface (GUI) by capturing screenshots of a display and performing mouse and keyboard actions, enabling it to operate desktop and web applications the same way a human would.

## Details

Computer use tools work through a screenshot-action loop: the model receives a screenshot of the current screen state, decides what action to take (click, type, scroll, press a key combination), the [agent runtime](./agent-runtime.md) executes that action in the environment, and a new screenshot is captured for the next step. This cycle repeats until the model determines the task is complete or requires user input. The model's [multimodal](./multimodal-model.md) vision capabilities are critical - it must accurately interpret UI elements, read text, and locate interactive controls from raw pixel data.

Computer use tools are [provider-defined tools](./tools.md): the [model developer](./model-developer.md) standardizes the tool interface, and the model is specifically [trained](./training.md) on it, but the developer's code executes the actions. Execution typically happens inside a [sandboxed](./sandbox.md) virtual machine or container with a virtual display, since giving a model direct control over a real desktop carries significant risk. The developer is responsible for translating the model's abstract action requests (e.g., "click at coordinates [450, 300]") into actual operations in the computing environment and returning screenshots as results.

The universal interface approach - interacting through screen pixels, mouse, and keyboard - means a computer use tool can operate any software with a GUI, including applications that lack APIs. This flexibility comes at the cost of reliability and speed: GUI interactions are slower than API calls, fragile to layout changes, and dependent on the model's visual understanding accuracy. Vision quality is the main bottleneck, as the model must correctly ground UI elements from screenshots to perform precise actions.

Computer use tools are a significant attack surface. [Prompt injection](../threats/prompt-injection.md) payloads embedded in on-screen content (web pages, documents, images) can manipulate the model's actions while it has control of the desktop. Common mitigations include running in isolated environments with minimal privileges, restricting internet access, requiring [human-in-the-loop](./human-in-the-loop.md) confirmation for sensitive actions (e.g., purchases, logins, sending messages), and monitoring for adversarial content on screen.

## Examples

- Anthropic's computer use tool: a provider-defined tool where Claude captures screenshots and controls mouse/keyboard in a developer-hosted sandbox environment, typically a Docker container running a Linux desktop with virtual display.
- OpenAI's Computer-Using Agent (CUA): combines GPT-4o's vision with reinforcement learning to interact with GUIs, powering the Operator product for web-based task automation.
- Google's Project Mariner: a browser-focused computer use approach for navigating and interacting with web content.

## Synonyms

computer use, GUI tool, desktop automation tool
