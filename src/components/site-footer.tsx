import Link from "next/link";
import { site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="bg-ink-2 text-white/75">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-10 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Все права защищены ·{" "}
          {site.legalName}, ИНН {site.inn}
        </p>
        <Link href="/privacy" className="text-white hover:underline underline-offset-4">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
