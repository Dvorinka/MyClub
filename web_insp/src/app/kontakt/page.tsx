"use client";

import { FormEvent, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function KontaktPage() {
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    // Placeholder submit – integrate your backend or Formspree here
    await new Promise((r) => setTimeout(r, 700));
    setSent(true);
    setSending(false);
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <div className="text-center">
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Kontakt</h1>
        <p className="mt-3 text-muted-foreground">Napište nám ohledně MyClub – ozveme se co nejdříve.</p>
      </div>

      <Card className="mt-8">
        <CardContent className="p-6">
          {sent ? (
            <div className="text-center">
              <p className="text-lg font-medium">Děkujeme! Ozveme se vám co nejdříve.</p>
              <Button className="mt-4" onClick={() => setSent(false)}>Poslat další zprávu</Button>
            </div>
          ) : (
            <form className="grid gap-4" onSubmit={onSubmit}>
              <div className="grid gap-2">
                <Label htmlFor="name">Jméno</Label>
                <Input id="name" name="name" required placeholder="Vaše jméno" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">E‑mail</Label>
                <Input id="email" type="email" name="email" required placeholder="vas@email.cz" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="club">Klub (nepovinné)</Label>
                <Input id="club" name="club" placeholder="FK Příklad" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="message">Zpráva</Label>
                <Textarea id="message" name="message" required placeholder="Stručně popište, co potřebujete..." />
              </div>
              <Button type="submit" className="mt-2" disabled={sending}>
                {sending ? "Odesílám..." : "Odeslat"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
