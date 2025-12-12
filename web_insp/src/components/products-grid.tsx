import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MonitorPlay, Tv, Image as ImageIcon, type LucideIcon } from "lucide-react";

export type ProductItem = {
  key: "scoreboard" | "scoredisplay" | "clublogos";
  name: string;
  description: string;
  priceLabel: string;
  cta?: string;
  href?: string;
  icon: LucideIcon;
};

export const PRODUCTS: ProductItem[] = [
  {
    key: "scoreboard",
    name: "MyClub ScoreBoard",
    description:
      "Scoreboard pro stream – integrovaný v MyClub, nabízíme i samostatně pro menší cenu.",
    priceLabel: "Cena na dotaz",
    cta: "Kontakt",
    href: "/kontakt",
    icon: MonitorPlay,
  },
  {
    key: "scoredisplay",
    name: "MyClub ScoreDisplay",
    description:
      "Pro klubové obrazovky – funguje jako scoreboard, ale pro prezentační displeje a showcase.",
    priceLabel: "Cena na dotaz",
    cta: "Kontakt",
    href: "/kontakt",
    icon: Tv,
  },
  {
    key: "clublogos",
    name: "ClubLogos",
    description: "Platforma s logy klubů ve vysoké kvalitě.",
    priceLabel: "Zdarma",
    cta: "Více info",
    href: "/kontakt",
    icon: ImageIcon,
  },
];

export function ProductsGrid({ className = "" }: { className?: string }) {
  return (
    <div className={"grid gap-6 sm:grid-cols-2 lg:grid-cols-3 " + className}>
      {PRODUCTS.map((p) => (
        <Card key={p.key} className="border-muted">
          <CardContent className="p-6">
            <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
              <p.icon className="size-5" />
            </div>
            <h3 className="text-lg font-semibold">{p.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 text-base font-medium">{p.priceLabel}</div>
            {p.href && (
              <Button asChild className="mt-6 w-full">
                <Link href={p.href}>{p.cta ?? "Detail"}</Link>
              </Button>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
