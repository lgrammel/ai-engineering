#!/usr/bin/env node

/**
 * Check markdown files for typography issues:
 * - Curly/smart quotes should be straight quotes (" ')
 * - Curly apostrophes should be straight apostrophes (')
 * - Em dashes and en dashes flagged (use - instead)
 * - Ellipsis character flagged (use ... instead)
 */

import { readFileSync } from "fs";

// Using Unicode escapes to ensure correct patterns regardless of file encoding
const CHECKS = [
  { pattern: /\u201C/g, name: "curly double quote (open)", replacement: '"' },
  { pattern: /\u201D/g, name: "curly double quote (close)", replacement: '"' },
  { pattern: /\u2018/g, name: "curly single quote (open)", replacement: "'" },
  {
    pattern: /\u2019/g,
    name: "curly single quote/apostrophe (close)",
    replacement: "'",
  },
  { pattern: /\u2014/g, name: "em dash", replacement: "-" },
  { pattern: /\u2013/g, name: "en dash", replacement: "-" },
  { pattern: /\u2026/g, name: "ellipsis character", replacement: "..." },
];

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error("Usage: check-quotes.js <file1.md> [file2.md] ...");
  process.exit(1);
}

let hasErrors = false;

for (const file of files) {
  const content = readFileSync(file, "utf-8");
  const lines = content.split("\n");

  for (let lineNum = 0; lineNum < lines.length; lineNum++) {
    const line = lines[lineNum];

    for (const check of CHECKS) {
      let match;
      while ((match = check.pattern.exec(line)) !== null) {
        hasErrors = true;
        console.error(
          `${file}:${lineNum + 1}:${match.index + 1}: Found ${check.name} - use ${check.replacement} instead`
        );
      }
    }
  }
}

if (hasErrors) {
  console.error("\nTypography check failed. Please fix the issues above.");
  process.exit(1);
}
