import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LogoCloud } from "@/components/logo-cloud";
import { ProductMock } from "@/components/product-mock";
import { StatsBlock } from "@/components/stats-block";
import { HowItWorks } from "@/components/how-it-works";
import { ScreenshotsMosaic } from "@/components/screenshots-mosaic";
import { Check, Shield, Users, Calendar, Megaphone, ShoppingCart, BarChart3, Lock } from "lucide-react";
import { InspoPricing01 } from "@/components/inspo/pricing-01";
import { InspoTestimonials01 } from "@/components/inspo/testimonials-01";
import { ProductsGrid } from "@/components/products-grid";

export default function Home() {
  const features = [
    { icon: Users, title: "Správa členů a rolí", desc: "Registrace, profily, role a přístupy." },
    { icon: Megaphone, title: "CMS a novinky", desc: "Publikace článků, galerie, kategorie a tagy." },
    { icon: Calendar, title: "Zápasy a události", desc: "Plánování zápasů, kalendář, RSVP a docházka." },
    { icon: ShoppingCart, title: "E‑shop a vstupenky", desc: "Merch, permanentky, platby a objednávky." },
    { icon: BarChart3, title: "Analytika a reporty", desc: "Návštěvnost, engagement a export dat." },
    { icon: Shield, title: "Bezpečnost", desc: "JWT, role, rate‑limit, ochrana formulářů." },
  ];

  const testimonials = [
    {
      quote:
        "MyClub nám sjednotil web, tým i komunikaci s fanoušky. Přechod byl rychlý a bez starostí.",
      author: "FK Hradečná",
    },
    {
      quote: "Konečně máme přehled nad zápasy i články na jednom místě – a skvěle to vypadá.",
      author: "TJ Sokol Nová Ves",
    },
  ];

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(80%_60%_at_50%_-10%,theme(colors.primary)/10%,transparent_60%)]" />

      <section className="mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 sm:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Badge className="mb-4 bg-accent text-accent-foreground">Novinka</Badge>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Moderní web a správa klubu
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">v jednom produktu</span>
            </h1>
            <p className="mt-5 text-pretty text-lg text-muted-foreground">
              MyClub je SaaS platforma pro sportovní kluby. Publikujte novinky, spravujte tým, plánujte zápasy,
              prodávejte merch a zapojte fanoušky – vše bez starostí o techniku.
            </p>
            <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
              <Button asChild>
                <Link href="/cenik">Vybrat plán</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/funkce">Zjistit více</Link>
              </Button>
            </div>
            <ul className="mt-6 grid grid-cols-1 gap-2 text-sm text-foreground/80 sm:grid-cols-3 lg:max-w-lg">
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Hotovo do 7 dní</li>
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Bez obsluhy IT</li>
              <li className="flex items-center justify-center gap-2 sm:justify-start"><Check className="size-4 text-primary" /> Pro kluby všech úrovní</li>
            </ul>
          </div>
          <div>
            <ProductMock />
          </div>
        </div>
      </section>

      <div className="mb-10">
        <LogoCloud />
      </div>

      <div className="mb-10">
        <StatsBlock />
      </div>

      <section className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <ScreenshotsMosaic />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="mx-auto mb-6 max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight">Produkty</h2>
          <p className="mt-2 text-sm text-muted-foreground">Samostatné nástroje k MyClubu – pro streamy, obrazovky i komunitu.</p>
        </div>
        <ProductsGrid />
        <div className="mt-6 flex justify-center">
          <Button asChild variant="outline">
            <Link href="/produkty">Všechny produkty</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <Card key={i}>
              <CardContent className="p-6">
                <p className="text-base leading-relaxed">“{t.quote}”</p>
                <div className="mt-4 text-sm text-muted-foreground">{t.author}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Pro koho je MyClub</h2>
            <p className="mt-2 text-sm text-muted-foreground">Vyberte si pohled podle vaší role v klubu.</p>
          </div>
          <Tabs defaultValue="klub" className="w-full">
            <TabsList>
              <TabsTrigger value="klub">Kluby</TabsTrigger>
              <TabsTrigger value="fanousci">Fanoušci</TabsTrigger>
              <TabsTrigger value="admini">Admini</TabsTrigger>
            </TabsList>
            <TabsContent value="klub" className="mt-4 text-sm text-muted-foreground">
              Přehledný web, publikace novinek a správa týmu z jednoho místa. Žádné starosti s technikou.
            </TabsContent>
            <TabsContent value="fanousci" className="mt-4 text-sm text-muted-foreground">
              Aktuální výsledky, události, galerie i e‑shop. Vše přístupné na mobilu v moderním designu.
            </TabsContent>
            <TabsContent value="admini" className="mt-4 text-sm text-muted-foreground">
              Role a oprávnění, bezpečné přihlášení, rychlá publikace a analytika pro data‑driven rozhodnutí.
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <div className="mb-10">
        <HowItWorks />
      </div>
      <InspoPricing01 />
      <InspoTestimonials01 />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border bg-gradient-to-r from-primary/10 via-primary/5 to-transparent p-8 sm:p-10">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h3 className="text-xl font-semibold">Připraveni na lepší web klubu?</h3>
              <p className="mt-1 text-sm text-muted-foreground">Začněte zdarma a kdykoliv přejděte na vyšší plán.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild>
                <Link href="/cenik">Porovnat plány</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/kontakt">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
