"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const initialDark = saved ? saved === "dark" : document.documentElement.classList.contains("dark");
    setDark(initialDark);
    document.documentElement.classList.toggle("dark", initialDark);
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Přepnout motiv">
      {dark ? <Sun className="size-5" /> : <Moon className="size-5" />}
    </Button>
  );
}
