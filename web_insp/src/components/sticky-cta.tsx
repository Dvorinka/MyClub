"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function StickyCTA() {
  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-40 mx-auto mb-4 flex w-full justify-center px-4 md:hidden">
      <div className="pointer-events-auto inline-flex items-center gap-3 rounded-full border bg-background/95 px-3 py-2 shadow-lg backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <span className="hidden text-sm text-muted-foreground xs:inline">Připraveni začít?</span>
        <Button size="sm" asChild>
          <Link href="/cenik">Vybrat plán</Link>
        </Button>
      </div>
    </div>
  );
}
