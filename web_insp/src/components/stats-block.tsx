export function StatsBlock() {
  const stats = [
    { value: "10+", label: "klubů na platformě" },
    { value: "35%", label: "vyšší engagement" },
    { value: "7 dní", label: "od demo ke spuštění" },
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="grid gap-4 rounded-xl border bg-card p-6 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className="text-center sm:text-left">
            <div className="text-3xl font-semibold tracking-tight">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
