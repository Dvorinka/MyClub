import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

export function InspoHero02() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_-10%,theme(colors.primary)/12%,transparent_60%)]" />
        <div className="absolute -top-24 right-1/2 h-72 w-72 translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <div className="mx-auto max-w-7xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-primary/10 text-primary">Pro sportovní kluby</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Moderní web klubu
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">bez starostí</span>
            </h1>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              Vše v jednom: obsah, tým, zápasy a fanoušci. Nasazení do 7 dnů.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild><Link href="/cenik">Vybrat plán</Link></Button>
              <Button asChild variant="outline"><Link href="/kontakt">Kontakt</Link></Button>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-3 lg:max-w-lg">
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Hotovo do 7 dní</li>
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Správa obsahu</li>
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Mobilní design</li>
            </ul>
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border bg-secondary">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10" />
            <div className="absolute inset-x-6 bottom-6 rounded-xl border bg-background/80 p-4 backdrop-blur">
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-md bg-primary/15" />
                <div className="h-16 rounded-md bg-accent/20" />
                <div className="h-16 rounded-md bg-muted" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
