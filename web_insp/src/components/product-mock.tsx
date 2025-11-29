import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function ProductMock() {
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-10 blur-2xl [mask-image:radial-gradient(60%_60%_at_50%_40%,#000_30%,transparent_60%)]">
        <div className="h-full w-full bg-gradient-to-b from-primary/20 to-transparent" />
      </div>
      <div className="rounded-xl border bg-card shadow-sm">
        <div className="flex items-center gap-2 border-b px-4 py-2">
          <span className="size-2.5 rounded-full bg-red-400" />
          <span className="size-2.5 rounded-full bg-yellow-400" />
          <span className="size-2.5 rounded-full bg-green-400" />
          <div className="ml-auto text-xs text-muted-foreground">myclub.app</div>
        </div>
        <div className="p-4">
          <Tabs defaultValue="news">
            <TabsList>
              <TabsTrigger value="news">Novinky</TabsTrigger>
              <TabsTrigger value="team">Tým</TabsTrigger>
              <TabsTrigger value="events">Zápasy</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="rounded-lg border p-3 transition hover:border-primary/40 hover:shadow-sm"
              >
                <div className="h-28 rounded-md bg-muted" />
                <div className="mt-3 h-3 w-2/3 rounded bg-muted" />
                <div className="mt-2 h-3 w-1/2 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
