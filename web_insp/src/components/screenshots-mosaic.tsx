import Image from "next/image";

export function ScreenshotsMosaic() {
  const shots = [
    { src: "/screenshots/clanky.png", alt: "Články – publikace novinek" },
    { src: "/screenshots/vyhledat.png", alt: "Vyhledávání napříč obsahem" },
    { src: "/screenshots/statistiky.png", alt: "Statistiky a přehledy" },
    { src: "/screenshots/soubory.png", alt: "Správa souborů a médií" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_10%,theme(colors.accent)/25%,transparent_60%)]" />
        <div className="grid auto-rows-[1fr] gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {shots.map((s, i) => (
            <div
              key={s.src}
              className="group relative overflow-hidden rounded-xl border bg-gradient-to-b from-background to-background/70 p-2 shadow-sm transition hover:shadow-md"
            >
              <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-primary/25 via-accent/20 to-transparent opacity-0 blur-md transition group-hover:opacity-100" />
              <div className="relative rounded-lg bg-card p-2">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={1200}
                  height={800}
                  className="h-44 w-full rounded-md object-cover shadow-sm md:h-56"
                />
                <div className="mt-2 line-clamp-1 text-center text-xs text-muted-foreground">{s.alt}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
