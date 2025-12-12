import Image from "next/image";

export function LogoCloud() {
  const logos = [
    { name: "FK Hradečná", src: "/myclub.svg", width: 28, height: 28 },
    { name: "TJ Sokol Nová Ves", src: "/myclub.svg", width: 28, height: 28 },
    { name: "Winnersport", src: "/myclub.svg", width: 28, height: 28 },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="rounded-xl border bg-card p-6 sm:p-8">
        <p className="text-center text-sm text-muted-foreground">Důvěřují nám kluby a týmy</p>
        <div className="mt-6 grid grid-cols-2 items-center justify-items-center gap-6 sm:grid-cols-3">
          {logos.map((l) => (
            <div key={l.name} className="flex items-center gap-2 text-sm text-foreground/80">
              <Image src={l.src} alt="" width={l.width} height={l.height} />
              <span>{l.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
