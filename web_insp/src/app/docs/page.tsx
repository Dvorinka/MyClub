import Link from "next/link";

export default async function DocsIndex() {
  const { getDocsMeta } = await import("@/lib/docs");
  const docs = await getDocsMeta();
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="prose">
        <h1>Dokumentace</h1>
      </div>
      <ul className="mt-6 space-y-3">
        {docs.map((d) => (
          <li key={d.slug} className="list-none">
            <div>
              <Link className="text-primary no-underline hover:underline text-lg" href={`/docs/${d.slug}`}>
                {d.title}
              </Link>
            </div>
            {d.summary && (
              <p className="text-sm text-muted-foreground mt-1">{d.summary}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
