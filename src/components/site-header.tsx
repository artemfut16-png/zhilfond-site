"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
import { cn } from "@/lib/utils";

function subscribeScroll(onChange: () => void) {
  window.addEventListener("scroll", onChange, { passive: true });
  return () => window.removeEventListener("scroll", onChange);
}

// «Пн–Пт: 9:00–18:00» -> «Пн–Пт 09:00–18:00» (только из site.hours; нестандартный формат остаётся как есть)
function formatHours(raw: string) {
  return raw
    .replace(/^([^:\d]+):\s*/, "$1 ")
    .replace(/(^|\D)(\d):(\d{2})/g, "$10$2:$3");
}
const hoursLabel = formatHours(site.hours);

function WorkHours({ overlay, className }: { overlay?: boolean; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-2 text-[13px] font-medium whitespace-nowrap transition-colors",
        overlay ? "text-white/70" : "text-muted-foreground",
        className
      )}
    >
      <span aria-hidden="true" className="relative inline-flex size-2 shrink-0">
        <span className="live-dot-ring absolute inset-0 rounded-full bg-[#22C55E]" />
        <span className="live-dot relative size-2 rounded-full bg-[#22C55E]" />
      </span>
      {hoursLabel}
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const scrolled = React.useSyncExternalStore(
    subscribeScroll,
    () => window.scrollY > 8,
    () => false
  );
  // На «/» Hero — фото на весь экран: шапка лежит поверх него и прозрачна до прокрутки.
  // Зависит только от pathname (одинаков на сервере и клиенте) — без прыжка при гидрации.
  const overPhotoPage = pathname === "/";
  const overlay = overPhotoPage && !scrolled;

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b transition-colors duration-300",
        overPhotoPage && "-mb-[72px]",
        overlay
          ? "border-transparent bg-transparent text-white"
          : "border-line bg-paper text-ink-2"
      )}
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="#hero" className="font-heading text-xl font-medium tracking-[-0.02em]">
          {site.name}
        </Link>

        <nav className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm whitespace-nowrap transition-colors",
                overlay ? "text-white/90 hover:text-white" : "text-ink-2 hover:text-ink"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon-sm" className={overlay ? "hover:bg-white/15 hover:text-white" : undefined} asChild>
              <a href={site.telegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <TelegramIcon />
              </a>
            </Button>
            <Button variant="ghost" size="icon-sm" className={overlay ? "hover:bg-white/15 hover:text-white" : undefined} asChild>
              <a href={site.max} target="_blank" rel="noopener noreferrer" aria-label="MAX">
                <MaxIcon />
              </a>
            </Button>
          </div>
          <div className="flex flex-col items-start gap-0.5">
            <a
              href={site.phoneHref}
              className="flex items-center gap-1.5 text-sm leading-tight font-medium whitespace-nowrap"
            >
              {site.phone}
            </a>
            <WorkHours overlay={overlay} className="leading-tight" />
          </div>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={cn(
                "xl:hidden",
                overlay && "border-white/60 bg-transparent text-white hover:bg-white/15 hover:text-white"
              )}
            >
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
                  className="rounded-(--radius) px-2 py-2.5 text-sm text-foreground hover:bg-muted"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-3 border-t border-border p-4">
              <div className="flex items-center justify-between">
                <div className="flex flex-col items-start gap-1">
                  <a
                    href={site.phoneHref}
                    className="flex items-center gap-1.5 text-sm font-medium"
                  >
                    {site.phone}
                  </a>
                  <WorkHours />
                </div>
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
