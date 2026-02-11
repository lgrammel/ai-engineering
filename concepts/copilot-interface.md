# Copilot Interface

An application interface where AI capabilities - chat, inline suggestions, autonomous [agent](./agent.md) actions - are embedded directly into a professional tool's UI, allowing a human and AI to collaborate within the same workspace and context.

## Details

Copilot interfaces differ from standalone [chatbots](./chatbot.md) in that the AI operates inside an existing application (IDE, design tool, spreadsheet, etc.) rather than in a separate conversational window. The human retains primary control of the workspace while the AI augments their workflow through multiple interaction patterns that coexist in the same UI: chat panels for open-ended requests, inline completions and suggestions, background [agents](./agent.md) that perform multi-step tasks, and contextual actions triggered from UI elements.

A defining characteristic is shared context: because the AI is embedded in the application, it can observe the user's current state - open files, cursor position, selected text, terminal output - and tailor its assistance accordingly. This tight integration enables a [human-in-the-loop](./human-in-the-loop.md) workflow where the user steers, reviews, and overrides AI actions in real time, rather than delegating entire tasks to an autonomous system.

Copilot interfaces sit between fully manual work and fully autonomous agents on the automation spectrum. They are most effective for tasks that benefit from human judgment (architectural decisions, nuanced edits, exploratory work) combined with AI speed (boilerplate generation, code search, refactoring across files).

## Examples

- Cursor: an IDE with integrated chat, inline completions, and agent modes that read/write project files and run commands.
- GitHub Copilot in VS Code: inline code suggestions and a chat panel for code-related questions, embedded in the editor.
- Windsurf: an IDE with AI agent capabilities woven into the editing experience.
- Microsoft Copilot in Office 365: AI assistance embedded in Word, Excel, and PowerPoint for drafting, summarizing, and data analysis.

## Synonyms

AI-augmented interface, AI-assisted UI, copilot UX
