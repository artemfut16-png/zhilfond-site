"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks, site } from "@/lib/site-data";

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#hero" className="text-lg font-semibold tracking-tight">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm whitespace-nowrap text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Button variant="ghost" size="icon-sm" asChild>
              <a href={site.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" asChild>
              <a href={site.max} target="_blank" rel="noopener noreferrer" aria-label="MAX">
                <MaxIcon />
              </a>
            </Button>
          </div>
          <a
            href={site.phoneHref}
            className="flex items-center gap-1.5 text-sm font-medium whitespace-nowrap"
          >
            {site.phone}
          </a>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="xl:hidden">
              <MenuIcon />
              <span className="sr-only">Открыть меню</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>{site.name}</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-2 py-2.5 text-sm text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
              <div className="flex items-center justify-between">
                <a
                  href={site.phoneHref}
                  className="flex items-center gap-1.5 text-sm font-medium"
                >
                  {site.phone}
                </a>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Button variant="ghost" size="icon-sm" asChild>
                    <a href={site.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                      <TelegramIcon />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon-sm" asChild>
                    <a href={site.max} target="_blank" rel="noopener noreferrer" aria-label="MAX">
                      <MaxIcon />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
