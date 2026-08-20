import type { Metadata } from "next";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { HousesForSale } from "@/components/catalog/houses-for-sale";
import { LandPlots } from "@/components/catalog/land-plots";
import { Contacts } from "@/components/sections/contacts";

export const metadata: Metadata = {
  title: "Каталог домов — СК Жилищный Фонд",
  description:
    "Готовые проекты домов, дома и участки в продаже в Саратовской области: площадь, стоимость под ключ в комплектации «Теплый контур» и «White Box», расчет ипотеки",
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

        <div id="house-projects" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">
              Проекты домов
            </h2>
            <CatalogGrid />
          </div>
        </div>

        <div id="houses-for-sale" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="mb-8 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Дома в продаже
              </h2>
              <p className="text-muted-foreground">
                Готовые дома с участками — можно въехать сразу после сделки
              </p>
            </div>
            <HousesForSale />
          </div>
        </div>

        <div id="land-plots" className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <div className="mb-8 flex flex-col gap-2">
              <h2 className="text-3xl font-semibold tracking-tight">
                Участки в продаже
              </h2>
              <p className="text-muted-foreground">
                Участки под строительство в Саратове, Энгельсе и области
              </p>
            </div>
            <LandPlots />
          </div>
        </div>

        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
