"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import type { DocMeta } from "@/lib/docs";

export function DocsSidebar({ docs }: { docs: DocMeta[] }) {
  const segment = useSelectedLayoutSegment(); // [slug] when on a doc page
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    if (!s) return docs;
    return docs.filter((d) => d.title.toLowerCase().includes(s) || d.slug.toLowerCase().includes(s));
  }, [q, docs]);

  return (
    <div>
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Hledat v dokumentaci…"
        className="w-full rounded-md border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary"
        aria-label="Hledat v dokumentaci"
      />
      <nav className="mt-3 space-y-1">
        {filtered.map((d) => {
          const active = segment === d.slug;
          return (
            <div key={d.slug}>
              <Link
                className={
                  "block text-sm hover:underline " +
                  (active ? "font-medium text-primary" : "text-zinc-800 hover:text-primary")
                }
                href={`/docs/${d.slug}`}
                aria-current={active ? "page" : undefined}
              >
                {d.title}
              </Link>
            </div>
          );
        })}
        {filtered.length === 0 && (
          <div className="text-sm text-zinc-500">Nenalezeno…</div>
        )}
      </nav>
    </div>
  );
}
