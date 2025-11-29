"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "lucide-react";

export function InspoPricing01() {
  type Billing = "mesic" | "rok";
  const [billing, setBilling] = useState<Billing>("mesic");

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
      ],
      cta: "Vybrat LITE",
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
      ],
      cta: "Vybrat STANDARD",
    },
    {
      name: "PRO",
      monthly: 4900,
      yearly: 49980,
      highlight: false,
      features: ["Všechno ze STANDARD", "Custom design", "Prioritní SLA"],
      cta: "Kontaktovat",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="bg-accent text-accent-foreground">Ceník (ukázka)</Badge>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">Jednoduché a férové ceny</h2>
        <p className="mt-2 text-sm text-muted-foreground">Roční fakturace se slevou ~15 %</p>
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
            <Card key={p.name} className={p.highlight ? "border-primary shadow-[0_0_0_1px_theme(colors.primary)]" : "border-muted"}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  {p.highlight && (
                    <Badge className="bg-primary text-primary-foreground">Nejoblíbenější</Badge>
                  )}
                </div>
                <div className="mt-4 text-3xl font-semibold">
                  {price.toLocaleString("cs-CZ")} Kč
                  <span className="ml-2 align-middle text-sm font-normal text-muted-foreground">{suffix}</span>
                </div>
                <ul className="mt-4 space-y-2 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="size-4 text-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button className="mt-6 w-full">{p.cta}</Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
