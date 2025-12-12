import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FAQPage() {
  const faqs = [
    {
      q: "Je MyClub hostovaný jako SaaS?",
      a: "Ano. Běžíme jako SaaS s automatickými aktualizacemi a monitoringem. Nabízíme i Self‑Hosting jako jednorázovou licenci.",
    },
    {
      q: "Nabízíte napojení (Connect) na stávající web?",
      a: "Napojíme MyClub na váš stávající web. Obsah (články, zápasy, události) se synchronizuje a zobrazí se ve vašem současném designu.",
    },
    {
      q: "Můžeme přejít z jiného systému?",
      a: "Ano. Pomůžeme s migrací obsahu, přesměrováním URL i SEO. U varianty STANDARD/PRO migraci řešíme za vás.",
    },
    {
      q: "Je možné upravit vzhled na míru?",
      a: "Ano. V plánu PRO připravíme custom web dle vaší identity. U ostatních plánů lze vybrat z připravených šablon.",
    },
    {
      q: "Jaké jsou způsoby platby?",
      a: "Měsíční nebo roční fakturace (se slevou). U Self‑Hostingu jednorázová platba před nasazením.",
    },
    {
      q: "Jak řešíte bezpečnost?",
      a: "Role a oprávnění, přihlášení přes tokeny (JWT), rate‑limiting, ochrana formulářů, audit logy a pravidelné aktualizace.",
    },
  ];

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">FAQ</h1>
      <p className="mt-3 text-muted-foreground">Nejčastější otázky k MyClub.</p>

      <div className="mt-8">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{f.q}</AccordionTrigger>
              <AccordionContent>{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}
