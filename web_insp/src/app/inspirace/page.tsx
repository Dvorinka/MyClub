import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function InspiracePage() {
  const samples = [
    { href: "/inspo/index.html", title: "Home 01", desc: "Komplexní landing se sekcemi a mega menu" },
    { href: "/inspo/home-page-02.html", title: "Home 02", desc: "AI software – alternativní hero a prvky" },
    { href: "/inspo/features-page-01.html", title: "Features 01", desc: "Přehled funkcí v sekcích a gridu" },
    { href: "/inspo/pricing-page-01.html", title: "Pricing 01", desc: "Ceník s kartami a CTA" },
    { href: "/inspo/contact-us-page.html", title: "Kontakt", desc: "Kontaktní formulář a detaily" },
    { href: "/inspo/faq-page.html", title: "FAQ", desc: "Často kladené dotazy – akordeony" },
    { href: "/inspo/blog-page-01.html", title: "Blog", desc: "Seznam článků s kartami" },
    { href: "/inspo/our-team-page-01.html", title: "Tým 01", desc: "Členové týmu s kartami" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="bg-accent text-accent-foreground">Ukázky</Badge>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Inspirace šablon</h1>
        <p className="mt-3 text-muted-foreground">
          Níže najdete katalog HTML ukázek. Otevírají se jako statické stránky ze složky <code>/inspo</code> a běží se svými styly.
        </p>
        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/inspirace/blocks">Ukázky React bloků</Link>
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {samples.map((s) => (
          <Card key={s.href}>
            <CardContent className="flex h-full flex-col justify-between p-6">
              <div>
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
              <div className="mt-6">
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:underline"
                >
                  Otevřít ukázku <ArrowUpRight className="size-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-sm text-muted-foreground">
        Tip: Pokud chcete jakoukoliv sekci převést do React komponenty v tomto projektu, řekněte mi název stránky a konkrétní blok.
      </div>
    </div>
  );
}
