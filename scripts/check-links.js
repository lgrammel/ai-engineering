#!/usr/bin/env node

/**
 * Check markdown files for dead links.
 * Wraps markdown-link-check to produce concise, agent-friendly output:
 * - Only dead links are printed (one per line with file, URL, and status)
 * - Exits with code 1 when any dead link is found
 */

import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { pathToFileURL } from "url";
import markdownLinkCheck from "markdown-link-check";

const configPath = resolve(process.cwd(), ".markdown-link-check.json");
let config = {};
try {
  config = JSON.parse(readFileSync(configPath, "utf-8"));
} catch {
  // proceed without config
}

const files = process.argv.slice(2);

if (files.length === 0) {
  console.error("Usage: check-links.js <file1.md> [file2.md] ...");
  process.exit(1);
}

let deadCount = 0;
let checkedCount = 0;
let fileCount = 0;

function checkFile(file) {
  return new Promise((resolvePromise, reject) => {
    let markdown;
    try {
      markdown = readFileSync(file, "utf-8");
    } catch (err) {
      reject(new Error(`Cannot read ${file}: ${err.message}`));
      return;
    }

    const baseUrl = pathToFileURL(resolve(dirname(file))) + "/";
    const opts = { ...config, baseUrl };

    markdownLinkCheck(markdown, opts, (err, results) => {
      if (err) {
        reject(err);
        return;
      }

      fileCount++;
      const dead = results.filter((r) => r.status === "dead");
      checkedCount += results.length;
      deadCount += dead.length;

      for (const r of dead) {
        const status = r.statusCode != null ? ` (status: ${r.statusCode})` : "";
        console.error(`${file}: ${r.link}${status}`);
      }

      resolvePromise();
    });
  });
}

// Process files sequentially to keep output grouped
async function run() {
  for (const file of files) {
    await checkFile(file);
  }

  if (deadCount > 0) {
    console.error(
      `\nLink check failed: ${deadCount} dead link(s) found across ${fileCount} file(s) (${checkedCount} links checked).`
    );
    process.exit(1);
  }
}

run().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
