import Link from "next/link";
import { PhoneIcon } from "lucide-react";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";

// Тот же формат времени, что в site-header.tsx: «Пн–Пт: 9:00–18:00» -> «Пн–Пт 09:00–18:00»
function formatHours(raw: string) {
  return raw
    .replace(/^([^:\d]+):\s*/, "$1 ")
    .replace(/(^|\D)(\d):(\d{2})/g, "$10$2:$3");
}
const hoursLabel = formatHours(site.hours);

function WorkHours() {
  return (
    <span className="flex items-center gap-2 text-[13px] leading-tight font-medium whitespace-nowrap text-muted-foreground">
      <span aria-hidden="true" className="relative inline-flex size-2 shrink-0">
        <span className="live-dot-ring absolute inset-0 rounded-full bg-[#22C55E]" />
        <span className="live-dot relative size-2 rounded-full bg-[#22C55E]" />
      </span>
      {hoursLabel}
    </span>
  );
}

export function CatalogHeader({ title = "Каталог" }: { title?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper text-ink-2">
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between gap-4 px-4 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="font-heading text-xl font-medium tracking-[-0.02em]"
          >
            {site.name}
          </Link>
          <span className="hidden text-muted-foreground sm:inline">/</span>
          <span className="hidden truncate font-heading text-xl font-medium tracking-[-0.02em] sm:inline">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-1 sm:flex">
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
          <Button variant="outline" size="icon" className="sm:hidden" asChild>
            <a href={site.phoneHref} aria-label={site.phone}>
              <PhoneIcon className="size-4" />
            </a>
          </Button>
          <div className="hidden flex-col items-start gap-0.5 sm:flex">
            <a
              href={site.phoneHref}
              className="text-sm leading-tight font-medium whitespace-nowrap"
            >
              {site.phone}
            </a>
            <WorkHours />
          </div>
        </div>
      </div>
    </header>
  );
}
