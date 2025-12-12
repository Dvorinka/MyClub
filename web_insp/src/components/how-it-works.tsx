import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Upload, CheckCircle } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      icon: CheckCircle,
      title: "Vyberte plán",
      desc: "Zvolte LITE, STANDARD nebo PRO dle potřeb klubu.",
    },
    {
      icon: Upload,
      title: "Nastavení a import",
      desc: "Doména, šablona, import obsahu a základní SEO během pár dní.",
    },
    {
      icon: Rocket,
      title: "Spuštění a růst",
      desc: "Publikujte novinky, spravujte tým a sledujte výsledky v analytice.",
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-3 bg-accent text-accent-foreground">Jak to funguje</Badge>
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Od dema ke spuštění za 7 dní</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Jednoduchý proces, minimum administrativy a podpora na každém kroku.
        </p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {steps.map((s) => (
          <Card key={s.title}>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
