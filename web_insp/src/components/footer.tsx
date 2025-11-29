import Link from "next/link";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
              © {year} MyClub · Vyvíjí <Link href="/" className="underline-offset-4 hover:underline">SportCreative</Link>
            </p>
            <p className="text-xs text-muted-foreground">
              Všechna práva vyhrazena.
            </p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-foreground/80">
            <Link href="/cenik" className="hover:text-foreground">Ceník</Link>
            <Link href="/kontakt" className="hover:text-foreground">Kontakt</Link>
            <Link href="/obchodni-podminky" className="hover:text-foreground">Obchodní podmínky</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
