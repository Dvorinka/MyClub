import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "MyClub nám sjednotil web, tým i komunikaci s fanoušky. Přechod byl rychlý a bez starostí.",
    author: "FK Hradečná",
  },
  {
    quote: "Konečně máme přehled nad zápasy i články na jednom místě – a skvěle to vypadá.",
    author: "TJ Sokol Nová Ves",
  },
  {
    quote: "Obsah publikujeme během minut. Fanoušci mají vše přehledně i na mobilu.",
    author: "HC Vršovice",
  },
];

export function InspoTestimonials01() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Co říkají kluby</h2>
        <p className="mt-2 text-sm text-muted-foreground">Zkušenosti klubů, které přešly na MyClub</p>
      </div>
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card key={i}>
            <CardContent className="p-6">
              <p className="leading-relaxed">“{t.quote}”</p>
              <div className="mt-3 text-sm text-muted-foreground">{t.author}</div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
