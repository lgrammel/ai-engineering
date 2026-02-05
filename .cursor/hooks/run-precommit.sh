#!/usr/bin/env bash
set -euo pipefail

# Cursor hooks communicate over JSON via stdin/stdout.
# - Consume stdin so the hook never blocks.
# - Write ONLY JSON to stdout (tool output goes to stderr).
payload="$(cat || true)"

status="$(
  PAYLOAD="$payload" node -e '
    const s = process.env.PAYLOAD || "{}";
    try {
      const j = JSON.parse(s);
      process.stdout.write(String(j.status ?? ""));
    } catch {
      process.stdout.write("");
    }
  '
)"

# Only run checks when the agent run completed normally.
if [[ "$status" != "completed" ]]; then
  printf '%s\n' '{}'
  exit 0
fi

# Skip quickly when there are no changes vs HEAD.
# (lint-staged otherwise prints a confusing "No staged files found" message.)
if [[ -z "$(git diff --name-only HEAD --)" ]]; then
  printf '%s\n' '{}'
  exit 0
fi

# Run the same checks as `.husky/pre-commit` (lint-staged),
# but against working tree changes so it works outside of git commit.
pnpm exec lint-staged --diff="HEAD" 1>&2

printf '%s\n' '{}'
