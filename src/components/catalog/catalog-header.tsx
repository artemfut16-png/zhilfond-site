import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

export function CatalogHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur supports-backdrop-filter:bg-background/70">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-lg font-semibold tracking-tight">
            {site.name}
          </Link>
          <span className="hidden text-muted-foreground sm:inline">/</span>
          <span className="hidden text-muted-foreground sm:inline">
            Каталог домов
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 text-muted-foreground sm:flex">
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
          <Button variant="ghost" size="icon" className="sm:hidden" asChild>
            <a href={site.phoneHref} aria-label={site.phone}>
              <PhoneIcon className="size-4" />
            </a>
          </Button>
          <a
            href={site.phoneHref}
            className="hidden items-center gap-1.5 text-sm font-medium whitespace-nowrap sm:flex"
          >
            {site.phone}
          </a>
        </div>
      </div>
    </header>
  );
}
