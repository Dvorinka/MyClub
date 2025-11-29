import { Card, CardContent } from "@/components/ui/card";
import { Users, Megaphone, Calendar, Image, BarChart3, Shield } from "lucide-react";

const features = [
  { icon: Users, title: "Správa členů", desc: "Profily, role a přístupy" },
  { icon: Megaphone, title: "CMS a novinky", desc: "Články, galerie, kategorie" },
  { icon: Calendar, title: "Zápasy a události", desc: "Plán, RSVP a docházka" },
  { icon: Image, title: "Galerie a média", desc: "Fotky, videa a dokumenty" },
  { icon: BarChart3, title: "Analytika", desc: "Návštěvnost a reporty" },
  { icon: Shield, title: "Bezpečnost", desc: "Role, ochrany, šifrování" },
];

export function InspoFeatureGrid01() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Co získáte</h2>
        <p className="mt-2 text-sm text-muted-foreground">Vybrané funkce z platformy MyClub</p>
      </div>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <Card key={f.title} className="border-muted">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <f.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
