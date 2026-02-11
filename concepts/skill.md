# Skill

A reusable, modular set of instructions and resources that extends an [agent's](./agent.md) capabilities for a specific task or domain. Skills provide procedural knowledge - step-by-step instructions, conventions, templates, or reference material - that an [agent runtime](./agent-runtime.md) injects into the agent's [context](./context.md) when relevant.

## Details

Skills are typically stored as markdown files (e.g., `SKILL.md`) in a project, user, or organization directory and are automatically discovered by the agent runtime. Each skill has a description that the runtime uses to decide when to load the full skill content into context. Users can also invoke skills explicitly, often via slash commands (e.g., `/deploy`). Skills can include supporting files such as templates, examples, and scripts that the agent loads on demand.

Skills are a [context engineering](./context-engineering.md) mechanism: rather than embedding all procedural knowledge in the base [prompt](./prompt.md), skills allow task-specific instructions to be loaded selectively, keeping the base prompt lean and the context focused. They differ from [tools](./tools.md) in that they provide knowledge and instructions rather than executable capabilities, though a skill may reference or orchestrate tools as part of its instructions.

An open Agent Skills standard defines a portable skill format that works across multiple [coding agents](./coding-agent.md) and IDEs. [Skill repositories](./skill-repository.md) such as skills.sh aggregate and rank skills by installation telemetry.

## Examples

- A code-review skill that instructs the agent to check for security issues, performance problems, and style violations before approving a pull request.
- A deployment skill that walks the agent through running tests, building the application, and pushing to a deployment target.
- A codebase-conventions skill that teaches the agent project-specific API patterns, naming conventions, and file organization rules.
- An explain-code skill that instructs the agent to use analogies, ASCII diagrams, and step-by-step walkthroughs when explaining code.

## Synonyms

agent skill, agent rule, custom command, playbook

## External references

- <https://skills.sh/docs>
- <https://docs.claude.com/en/docs/claude-code/skills>
- <https://agentskills.io>
