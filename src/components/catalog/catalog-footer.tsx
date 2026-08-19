import Link from "next/link";
import { site } from "@/lib/site-data";

export function CatalogFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <p className="font-semibold tracking-tight">{site.name}</p>
          <p className="text-sm text-muted-foreground">{site.address}</p>
        </div>
        <div className="flex flex-col gap-2 text-sm sm:items-end">
          <a href={site.phoneHref} className="font-medium hover:underline">
            {site.phone}
          </a>
          <Link href="/" className="text-muted-foreground hover:text-foreground">
            На главную
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-2 border-t border-border px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p>
          © {new Date().getFullYear()} {site.name}. Все права защищены
        </p>
        <Link href="/#contacts" className="hover:text-foreground">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
}
