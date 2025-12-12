"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";
import Link from "next/link";

type Billing = "mesic" | "rok";

const plans = [
  {
    name: "LITE",
    monthly: 690,
    yearly: 7062,
    highlight: false,
    features: [
      "FAČR automatické zápasy a tabulky",
      "Týmy a hráči",
      "Články + CMS",
      "Galerie a videa",
      "Sponzoři a bannery",
      "Kontaktní formuláře",
    ],
    cta: "Vybrat LITE",
    optionalSetup: 2990,
  },
  {
    name: "STANDARD",
    monthly: 1990,
    yearly: 20202,
    highlight: true,
    features: [
      "Všechno z LITE",
      "MyUIbrix drag & drop builder",
      "Plná automatizace FAČR",
      "Marketing & analytika",
      "Scoreboard, newsletter",
      "Role a oprávnění",
    ],
    cta: "Vybrat STANDARD",
    optionalSetup: 4990,
  },
  {
    name: "PRO",
    monthly: 4900,
    yearly: 49980,
    highlight: false,
    features: [
      "Všechno ze STANDARD",
      "Custom design",
      "Prioritní SLA",
      "Prioritní podpora",
      "Rychlé úpravy",
      "Rozšířené moduly",
    ],
    cta: "Kontaktovat",
  },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<Billing>("mesic");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Ceník</h1>
        <p className="mt-3 text-muted-foreground">
          Roční fakturace se slevou ~15 %.
        </p>
        <Tabs value={billing} onValueChange={(v) => setBilling(v as Billing)} className="mt-6">
          <TabsList>
            <TabsTrigger value="mesic">Měsíčně</TabsTrigger>
            <TabsTrigger value="rok">Ročně</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((p) => {
          const price = billing === "mesic" ? p.monthly : p.yearly;
          const suffix = billing === "mesic" ? "/ měsíc" : "/ rok";
          return (
            <Card key={p.name} className={p.highlight ? "border-primary" : ""}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.highlight && <Badge className="bg-primary text-primary-foreground">Nejoblíbenější</Badge>}
                </div>
                <div className="mt-4 text-3xl font-semibold">
                  {price.toLocaleString("cs-CZ")} Kč
                  <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">{suffix}</span>
                </div>
                {p.optionalSetup && (
                  <p className="mt-2 text-xs text-muted-foreground">
                    Volitelné zřízení: {p.optionalSetup.toLocaleString("cs-CZ")} Kč (roční plán bez poplatku)
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button asChild className="mt-6 w-full">
                  <Link href="/kontakt">{p.cta}</Link>
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="mt-10">
        <Card>
          <CardContent className="flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="text-lg font-semibold">Self‑Hosting (jednorázová licence)</h3>
              <p className="text-sm text-muted-foreground">
                Zdrojový kód + nasazení, základní support
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-2xl font-semibold">69 000 Kč</div>
              <Button asChild variant="outline"><Link href="/kontakt">Mám zájem</Link></Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
