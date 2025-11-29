import fs from "node:fs";
import path from "node:path";

export type DocMeta = {
  slug: string;
  title: string;
  order?: number;
  group?: string;
  hidden?: boolean;
  summary?: string;
};

const DOCS_DIR = path.join(process.cwd(), "content", "docs");

function humanizeSlug(slug: string) {
  return slug
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/(^|\s)\S/g, (s) => s.toUpperCase());
}

export async function listMarkdownFiles(): Promise<string[]> {
  try {
    const items = await fs.promises.readdir(DOCS_DIR);
    return items.filter((f) => f.toLowerCase().endsWith(".md")).sort();
  } catch {
    return [];
  }
}

export async function getDocsMeta(): Promise<DocMeta[]> {
  const files = await listMarkdownFiles();
  const metas = await Promise.all(
    files.map(async (file) => {
      const slug = file.replace(/\.md$/i, "");
      let title = humanizeSlug(slug);
      let order: number | undefined;
      let group: string | undefined;
      let hidden: boolean | undefined;
      let summary: string | undefined;
      try {
        const raw = await fs.promises.readFile(path.join(DOCS_DIR, file), "utf8");
        const { data, content } = parseFrontmatter(raw);
        if (typeof data.title === "string" && data.title.trim()) title = String(data.title).trim();
        // First H1 as title (fallback)
        const m = content.match(/^\s*#\s+(.+)\s*$/m);
        if (m) title = m[1].trim();
        if (typeof data.order !== "undefined") order = Number(data.order);
        if (typeof data.group === "string") group = data.group;
        if (typeof data.hidden !== "undefined") hidden = Boolean(data.hidden);
        if (typeof data.summary === "string" && data.summary.trim()) {
          summary = data.summary.trim();
        } else {
          summary = extractSummary(content);
        }
      } catch {}
      return { slug, title, order, group, hidden, summary } as DocMeta;
    })
  );
  // Filter hidden and sort by order then title
  const visible = metas.filter((m) => !m.hidden);
  return visible.sort((a, b) => {
    const ao = typeof a.order === "number" ? a.order : Number.POSITIVE_INFINITY;
    const bo = typeof b.order === "number" ? b.order : Number.POSITIVE_INFINITY;
    if (ao !== bo) return ao - bo;
    return a.title.localeCompare(b.title, "cs");
  });
}

export async function getDocContent(slug: string): Promise<{ content: string; title: string } | null> {
  const filePath = path.join(DOCS_DIR, `${slug}.md`);
  try {
    const raw = await fs.promises.readFile(filePath, "utf8");
    const { data, content } = parseFrontmatter(raw);
    let title = humanizeSlug(slug);
    if (typeof data.title === "string" && data.title.trim()) title = String(data.title).trim();
    const m = content.match(/^\s*#\s+(.+)\s*$/m);
    if (m) title = m[1].trim();
    return { content, title };
  } catch {
    return null;
  }
}

export function slugifyHeading(input: string): string {
  const s = input
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
  return s;
}

export type TocItem = { depth: number; text: string; id: string };

export function extractHeadings(markdown: string): TocItem[] {
  const lines = markdown.split(/\r?\n/);
  const toc: TocItem[] = [];
  let inCode = false;
  for (const line of lines) {
    if (/^```/.test(line)) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    const m = line.match(/^(#{2,6})\s+(.+?)\s*$/);
    if (m) {
      const depth = m[1].length;
      const text = m[2].trim();
      toc.push({ depth, text, id: slugifyHeading(text) });
    }
  }
  return toc;
}

export async function getPrevNext(slug: string): Promise<{
  prev: DocMeta | null;
  next: DocMeta | null;
}> {
  const metas = await getDocsMeta();
  const idx = metas.findIndex((m) => m.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? metas[idx - 1] : null;
  const next = idx < metas.length - 1 ? metas[idx + 1] : null;
  return { prev, next };
}

function parseFrontmatter(md: string): { data: Record<string, any>; content: string } {
  const lines = md.split(/\r?\n/);
  if (lines.length === 0 || lines[0].trim() !== "---") {
    return { data: {}, content: md };
  }
  const data: Record<string, any> = {};
  let i = 1;
  for (; i < lines.length; i++) {
    const line = lines[i];
    if (line.trim() === "---") {
      i++;
      break;
    }
    const m = line.match(/^\s*([A-Za-z0-9_-]+)\s*:\s*(.*)\s*$/);
    if (m) {
      let val = m[2].trim();
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1);
      }
      if (/^(true|false)$/i.test(val)) data[m[1]] = val.toLowerCase() === "true";
      else if (/^-?\d+(?:\.\d+)?$/.test(val)) data[m[1]] = Number(val);
      else data[m[1]] = val;
    }
  }
  const content = lines.slice(i).join("\n");
  return { data, content };
}

function extractSummary(content: string): string | undefined {
  const lines = content.split(/\r?\n/);
  let inCode = false;
  const paras: string[] = [];
  let buf: string[] = [];
  const flush = () => {
    const text = buf.join(" ").trim();
    if (text) paras.push(text);
    buf = [];
  };
  for (const line of lines) {
    if (/^```/.test(line)) {
      inCode = !inCode;
      continue;
    }
    if (inCode) continue;
    if (!line.trim()) {
      flush();
      continue;
    }
    if (/^\s*#/.test(line)) continue; // skip headings
    if (/^\s*>/.test(line)) continue; // skip blockquotes
    if (/^\s*[-*+]|^\s*\d+\./.test(line)) continue; // skip lists
    buf.push(line.trim());
  }
  flush();
  return paras[0]?.slice(0, 240);
}
