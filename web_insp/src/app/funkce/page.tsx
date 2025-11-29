import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Users, ShieldCheck, Newspaper, Calendar, Megaphone, Image, BarChart3, Lock } from "lucide-react";

export default function FunkcePage() {
  const sections = [
    {
      icon: Users,
      title: "Uživatelské účty a role",
      bullets: [
        "Registrace a přihlášení",
        "Role: Admin, Editor, Člen",
        "Správa profilů a reset hesla",
      ],
    },
    {
      icon: Newspaper,
      title: "CMS a obsah",
      bullets: [
        "Publikace článků a novinek",
        "Kategorie, tagy a WYSIWYG editor",
        "Knihovna médií (obrázky, dokumenty)",
      ],
    },
    {
      icon: Megaphone,
      title: "Fan engagement",
      bullets: [
        "Komentáře s moderací",
        "Ankety a newsletter",
        "Sdílení na sociální sítě",
      ],
    },
    {
      icon: Calendar,
      title: "Zápasy a události",
      bullets: [
        "Plánování zápasů a výsledky",
        "Kalendář a RSVP",
        "Fotogalerie k událostem",
      ],
    },
    {
      icon: Image,
      title: "Galerie a média",
      bullets: [
        "Fotogalerie a alba",
        "Nahrávání souborů",
        "Sdílení a stahování",
      ],
    },
    {
      icon: BarChart3,
      title: "Analytika a reporty",
      bullets: [
        "Návštěvnost webu",
        "Engagement metriky",
        "Export dat a přehledy",
      ],
    },
    {
      icon: ShieldCheck,
      title: "Týmy a hráči",
      bullets: [
        "Soupisky, profily hráčů",
        "Statistiky výkonu",
        "Sestavy a nominace",
      ],
    },
    {
      icon: Lock,
      title: "Bezpečnost",
      bullets: [
        "JWT, rate‑limit, XSS/CSRF ochrana",
        "Validace vstupů",
        "Šifrování hesel (bcrypt)",
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Funkce</h1>
        <p className="mt-3 text-muted-foreground">
          MyClub propojuje web, obsah, tým a fanoušky do jedné moderní platformy.
        </p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((s) => (
          <Card key={s.title}>
            <CardContent className="p-6">
              <div className="mb-4 inline-flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="size-5" />
              </div>
              <h3 className="text-lg font-semibold">{s.title}</h3>
              <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
                {s.bullets.map((b) => (
                  <li key={b}>• {b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mx-auto mt-12 max-w-3xl">
        <Accordion type="single" collapsible>
          <AccordionItem value="detail-1">
            <AccordionTrigger>Proč MyClub místo více nástrojů?</AccordionTrigger>
            <AccordionContent>
              Jeden systém = méně administrativy, rychlejší publikace a konzistentní vzhled. Není třeba řešit integrace a rozbité pluginy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="detail-2">
            <AccordionTrigger>Lze propojit se stávajícím webem?</AccordionTrigger>
            <AccordionContent>
              Ano. S plánem Connect napojíme MyClub na váš současný web a synchronizujeme obsah.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
