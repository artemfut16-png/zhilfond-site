import type { Metadata } from "next";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { CatalogFooter } from "@/components/catalog/catalog-footer";
import { CatalogGrid } from "@/components/catalog/catalog-grid";

export const metadata: Metadata = {
  title: "Каталог домов — СК Жилищный Фонд",
  description:
    "Готовые проекты домов с ценами в Саратовской области: площадь, стоимость под ключ в комплектации «Теплый контур» и «White Box», расчет ипотеки",
};

export default function CatalogPage() {
  return (
    <>
      <CatalogHeader />
      <main className="flex-1">
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
                Каталог домов
              </h1>
              <p className="max-w-prose text-lg text-muted-foreground">
                Готовые проекты домов в Саратовской области с ценами под
                ключ — выберите площадь и комплектацию, а мы адаптируем
                проект под ваш участок
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <CatalogGrid />
        </div>
      </main>
      <CatalogFooter />
    </>
  );
}
