import { getDocsMeta } from "@/lib/docs";
import { DocsSidebar } from "@/components/docs-sidebar";

export default async function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const docs = await getDocsMeta();
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:grid lg:grid-cols-[260px_1fr] lg:gap-8">
      <aside className="hidden lg:block sticky top-24 self-start max-h-[calc(100vh-6rem)] overflow-auto pr-4">
        <h2 className="text-sm font-semibold text-zinc-500">Dokumentace</h2>
        <div className="mt-3">
          <DocsSidebar docs={docs} />
        </div>
      </aside>
      <div>{children}</div>
    </div>
  );
}
