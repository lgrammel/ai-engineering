# AI Gateway

A service layer between an application/[agent](./agent.md) and one or more [model providers](./inference-provider.md) that standardizes access to models and centralizes operational controls.

Typically provides request routing (model selection, fallbacks), unified auth and key management, rate limiting/quotas, retries/timeouts, cost controls, caching, and logging/metrics (often with PII redaction).

## Examples

- OpenRouter
- Vercel AI Gateway

## Synonyms

model gateway, LLM gateway
