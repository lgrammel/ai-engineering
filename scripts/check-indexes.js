import fs from "node:fs/promises";
import path from "node:path";

const ROOT = process.cwd();
const INDEX_DIRS = ["example-systems", "concepts", "ideas", "threats"];
const collator = new Intl.Collator("en", { sensitivity: "base" });

function parseIndexEntries(indexContent, indexPathForErrors) {
  const entries = [];

  for (const rawLine of indexContent.split("\n")) {
    const line = rawLine.trim();
    if (!line.startsWith("- ")) continue;

    // Expected: - [Visible Name](./file.md)
    const match = line.match(/^- \[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) {
      throw new Error(
        `Unrecognized list item format in ${indexPathForErrors}: "${rawLine}"`
      );
    }

    const title = match[1].trim();
    const link = match[2].trim();
    const file = path.posix.basename(link);

    if (!link.startsWith("./")) {
      throw new Error(
        `Index link must start with "./" in ${indexPathForErrors}: "${rawLine}"`
      );
    }
    if (!file.endsWith(".md")) {
      throw new Error(
        `Index link must target a .md file in ${indexPathForErrors}: "${rawLine}"`
      );
    }

    entries.push({ title, link, file, rawLine });
  }

  return entries;
}

async function listMarkdownFiles(dir) {
  const absDir = path.join(ROOT, dir);
  const dirEntries = await fs.readdir(absDir, { withFileTypes: true });
  return dirEntries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => name.endsWith(".md"))
    .filter((name) => name !== "index.md")
    .sort((a, b) => collator.compare(a, b));
}

function formatList(items) {
  return items.map((x) => `- ${x}`).join("\n");
}

async function checkIndex(dir) {
  const indexPath = path.join(ROOT, dir, "index.md");
  const indexContent = await fs.readFile(indexPath, "utf8");
  const entries = parseIndexEntries(indexContent, `${dir}/index.md`);

  const filesOnDisk = await listMarkdownFiles(dir);
  const filesInIndex = entries.map((e) => e.file);

  const missing = filesOnDisk.filter((f) => !filesInIndex.includes(f));
  const extra = filesInIndex.filter((f) => !filesOnDisk.includes(f));

  const duplicates = Object.entries(
    filesInIndex.reduce((acc, file) => {
      acc[file] = (acc[file] ?? 0) + 1;
      return acc;
    }, {})
  )
    .filter(([, count]) => count > 1)
    .map(([file]) => file);

  const expectedOrder = [...entries]
    .sort((a, b) => collator.compare(a.title, b.title))
    .map((e) => e.title);
  const actualOrder = entries.map((e) => e.title);
  const outOfOrder = expectedOrder.some((t, i) => t !== actualOrder[i]);

  const errors = [];
  if (missing.length) {
    errors.push(
      `Missing entries in ${dir}/index.md:\n${formatList(missing.map((f) => `./${f}`))}`
    );
  }
  if (extra.length) {
    errors.push(
      `Entries in ${dir}/index.md not present on disk:\n${formatList(
        extra.map((f) => `./${f}`)
      )}`
    );
  }
  if (duplicates.length) {
    errors.push(
      `Duplicate entries in ${dir}/index.md:\n${formatList(
        duplicates.map((f) => `./${f}`)
      )}`
    );
  }
  if (outOfOrder) {
    errors.push(
      `Entries in ${dir}/index.md are not sorted alphabetically by visible name.\n` +
        `Expected order:\n${formatList(expectedOrder)}`
    );
  }

  return errors;
}

async function main() {
  const allErrors = [];

  for (const dir of INDEX_DIRS) {
    allErrors.push(...(await checkIndex(dir)));
  }

  if (allErrors.length) {
    console.error(allErrors.join("\n\n"));
    process.exit(1);
  }

  console.log("Index checks passed.");
}

await main();
