import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Wrench, PlugZap, Palette, Headphones, Rocket } from "lucide-react";
import Link from "next/link";

export default function SluzbyPage() {
  const services = [
    {
      icon: Rocket,
      title: "Onboarding & Nastavení",
      desc: "Rychlé spuštění MyClub: doména, šablona, import obsahu, základní SEO.",
      items: ["Doména a DNS", "Design šablony", "Import článků a médií"],
    },
    {
      icon: Wrench,
      title: "Správa & Podpora",
      desc: "Pravidelná správa obsahu a drobné úpravy – vy se soustředíte na klub.",
      items: ["Publikace novinek", "Grafická příprava", "Měsíční report"],
    },
    {
      icon: Palette,
      title: "Custom web (PRO)",
      desc: "Design a komponenty na míru vaší identitě v rámci MyClub.",
      items: ["Branding na míru", "Speciální sekce", "Konzultace UX"],
    },
    {
      icon: PlugZap,
      title: "Connect (Integrace)",
      desc: "Napojení na váš stávající web – obsah z MyClub se bezpečně synchronizuje.",
      items: ["Embed moduly", "API a feedy", "Přesměrování URL"],
    },
    {
      icon: Headphones,
      title: "Priority support",
      desc: "Rychlá podpora přes e‑mail/telefon se SLA pro STANDARD/PRO.",
      items: ["SLA reakce", "Asistence s obsahem", "Monitoring"],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-3 bg-accent text-accent-foreground">Služby</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Pomůžeme s nasazením i růstem</h1>
        <p className="mt-3 text-muted-foreground">K MyClub nabízíme doplňkové služby, abyste měli vše bez starostí.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <Card key={s.title}>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {s.items.map((it) => (
                  <li key={it}>• {it}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Button asChild>
          <Link href="/kontakt">Nezávazná konzultace</Link>
        </Button>
      </div>
    </div>
  );
}
