import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Все права защищены ·{" "}
          {site.legalName}, ИНН {site.inn}
        </p>
        <Link href="/privacy" className="hover:text-foreground">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
