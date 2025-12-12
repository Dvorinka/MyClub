import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center sm:px-6">
      <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
        404 · Stránka nenalezena
      </div>
      <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Tady nic není.
      </h1>
      <p className="text-muted-foreground">Zkontrolujte URL nebo se vraťte na domovskou stránku.</p>
      <div className="mt-2">
        <Button asChild>
          <Link href="/">Zpět domů</Link>
        </Button>
      </div>
    </div>
  );
}
