import fs from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { extractHeadings, getDocContent, getPrevNext, slugifyHeading } from "@/lib/docs";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = await getDocContent(params.slug);
  const fallback = params?.slug?.replace(/-/g, " ") || "docs";
  return { title: doc?.title ?? fallback };
}

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), "content", "docs");
  try {
    const items = await fs.promises.readdir(dir);
    return items
      .filter((f) => f.endsWith(".md"))
      .map((f) => ({ slug: f.replace(/\.md$/, "") }));
  } catch {
    return [] as { slug: string }[];
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const doc = await getDocContent(params.slug);
  if (!doc) {
    notFound();
  }
  const toc = extractHeadings(doc.content);
  const { prev, next } = await getPrevNext(params.slug);
  const hasH1 = /(^|\n)\s*#\s+/.test(doc.content);
  let highlight: any = null;
  try {
    // Optional: enable syntax highlighting if rehype-highlight is installed
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    highlight = (await import("rehype-highlight")).default;
  } catch {}

  // Custom heading components with anchors
  const components = {
    h2: ({ node, ...props }: any) => {
      const raw = String(
        (node?.children || [])
          .map((n: any) => (n.value ? n.value : n.children?.[0]?.value || ""))
          .join("")
      ).trim();
      const id = slugifyHeading(raw);
      return (
        <h2 id={id} {...props} className="group scroll-mt-24">
          <a href={`#${id}`} className="no-underline hover:underline">
            {props.children}
            <span className="ml-2 align-middle text-primary opacity-0 group-hover:opacity-100">#</span>
          </a>
        </h2>
      );
    },
    h3: ({ node, ...props }: any) => {
      const raw = String(
        (node?.children || [])
          .map((n: any) => (n.value ? n.value : n.children?.[0]?.value || ""))
          .join("")
      ).trim();
      const id = slugifyHeading(raw);
      return (
        <h3 id={id} {...props} className="group scroll-mt-24">
          <a href={`#${id}`} className="no-underline hover:underline">
            {props.children}
            <span className="ml-2 align-middle text-primary opacity-0 group-hover:opacity-100">#</span>
          </a>
        </h3>
      );
    },
    h4: ({ node, ...props }: any) => {
      const raw = String(
        (node?.children || [])
          .map((n: any) => (n.value ? n.value : n.children?.[0]?.value || ""))
          .join("")
      ).trim();
      const id = slugifyHeading(raw);
      return (
        <h4 id={id} {...props} className="group scroll-mt-24">
          <a href={`#${id}`} className="no-underline hover:underline">
            {props.children}
            <span className="ml-2 align-middle text-primary opacity-0 group-hover:opacity-100">#</span>
          </a>
        </h4>
      );
    },
  } as any;

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl lg:max-w-4xl lg:grid lg:grid-cols-[1fr_260px] lg:gap-8">
        <article className="min-w-0">
          {!hasH1 && (
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl mb-6">{doc.title}</h1>
          )}
          <div className="prose">
            <Markdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={highlight ? [highlight] : undefined}
              components={components}
            >
              {doc.content}
            </Markdown>
          </div>
          <nav className="mt-12 flex items-center justify-between border-t pt-6 text-sm">
            {prev ? (
              <Link className="text-primary hover:underline" href={`/docs/${prev.slug}`}>
                ← {prev.title}
              </Link>
            ) : (
              <span />
            )}
            {next ? (
              <Link className="text-primary hover:underline" href={`/docs/${next.slug}`}>
                {next.title} →
              </Link>
            ) : (
              <span />
            )}
          </nav>
        </article>
        {toc.length > 0 && (
          <aside className="sticky top-24 hidden self-start lg:block max-h-[calc(100vh-6rem)] overflow-auto pl-4">
            <h2 className="text-sm font-semibold text-zinc-500">Na této stránce</h2>
            <ul className="mt-3 space-y-2">
              {toc.map((item) => (
                <li key={item.id} className={item.depth >= 3 ? "ml-4" : "ml-0"}>
                  <a className="text-sm text-zinc-800 hover:text-primary" href={`#${item.id}`}>
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </div>
  );
}
