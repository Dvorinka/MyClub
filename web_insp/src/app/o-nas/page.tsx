import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Megaphone, Code2, Instagram, Linkedin, Globe, Twitter } from "lucide-react";

export default function ONasPage() {
  const team = [
    {
      initials: "ŠS",
      name: "Štěpán Stodůlka",
      role: "Zakladatel & CMO",
      icon: Megaphone,
      bio: "Marketingový stratég s vášní pro sport. Tvoří příběhy, které osloví publikum.",
      links: [{ href: "https://www.instagram.com/stodys/", icon: Instagram, label: "Instagram" }],
    },
    {
      initials: "TD",
      name: "Tomáš Dvořák",
      role: "Spoluzakladatel & CTO",
      icon: Code2,
      bio: "Technologický vizionář se zaměřením na vývoj, design a infrastrukturu.",
      links: [
        { href: "https://www.linkedin.com/in/tom%C3%A1%C5%A1-dvo%C5%99%C3%A1k-542bb7294/", icon: Linkedin, label: "LinkedIn" },
        { href: "https://x.com/TDv0rak", icon: Twitter, label: "X" },
        { href: "https://www.instagram.com/tdvorak_dev/", icon: Instagram, label: "Instagram" },
        { href: "https://www.tdvorak.dev/", icon: Globe, label: "Web" },
      ],
    },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl text-center">
        <Badge className="mb-3 bg-accent text-accent-foreground">O nás</Badge>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">SportCreative × MyClub</h1>
        <p className="mt-3 text-muted-foreground">
          Spojujeme lásku ke sportu a moderní technologie. MyClub je produkt SportCreative pro kluby, které chtějí růst.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {team.map((m) => (
          <Card key={m.name}>
            <CardContent className="flex gap-5 p-6">
              <Avatar className="h-14 w-14">
                <AvatarFallback>{m.initials}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-semibold">{m.name}</h3>
                </div>
                <div className="text-sm text-primary/80">{m.role}</div>
                <p className="mt-2 text-sm text-muted-foreground">{m.bio}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {m.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={l.label}
                      className="inline-flex items-center gap-1 text-sm text-foreground/80 hover:text-foreground"
                    >
                      <l.icon className="size-4" /> {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
