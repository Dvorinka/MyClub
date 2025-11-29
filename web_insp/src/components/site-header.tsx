"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/myclub.svg" alt="MyClub" width={28} height={28} />
          <Image
            className="hidden md:block"
            src="/myclub_text.svg"
            alt="MyClub"
            width={120}
            height={28}
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Domů
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/funkce">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Funkce
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/sluzby">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Služby
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/produkty">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Produkty
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cenik">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Ceník
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/kontakt">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Kontakt
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/o-nas">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    O nás
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    FAQ
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs">
                  <NavigationMenuLink className="text-sm font-medium text-foreground/80 hover:text-foreground">
                    Dokumentace
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <ThemeToggle />
          <Button asChild>
            <Link href="/cenik">Vybrat plán</Link>
          </Button>
        </div>

        <div className="md:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Menu">
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>MyClub</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 grid gap-4">
                <Link href="/" onClick={() => setOpen(false)} className="text-base">Domů</Link>
                <Link href="/funkce" onClick={() => setOpen(false)} className="text-base">Funkce</Link>
                <Link href="/sluzby" onClick={() => setOpen(false)} className="text-base">Služby</Link>
                <Link href="/produkty" onClick={() => setOpen(false)} className="text-base">Produkty</Link>
                <Link href="/cenik" onClick={() => setOpen(false)} className="text-base">Ceník</Link>
                <Link href="/kontakt" onClick={() => setOpen(false)} className="text-base">Kontakt</Link>
                <Link href="/o-nas" onClick={() => setOpen(false)} className="text-base">O nás</Link>
                <Link href="/faq" onClick={() => setOpen(false)} className="text-base">FAQ</Link>
                <Link href="/docs" onClick={() => setOpen(false)} className="text-base">Dokumentace</Link>
                <Button className="mt-2" asChild>
                  <Link href="/kontakt">Získat demo</Link>
                </Button>
                <div className="mt-2"><ThemeToggle /></div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
