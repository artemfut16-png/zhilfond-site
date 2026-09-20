import type { Metadata } from "next";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { HubScrollTracker } from "@/components/hub-scroll-tracker";
import { CatalogGrid } from "@/components/catalog/catalog-grid";
import { HousesForSale } from "@/components/catalog/houses-for-sale";
import { LandPlots } from "@/components/catalog/land-plots";
import { Contacts } from "@/components/sections/contacts";
import { Reveal } from "@/components/motion";

export const metadata: Metadata = {
  title: "Каталог домов — СК Жилищный Фонд",
  description:
    "Готовые проекты домов, дома и участки в продаже в Саратовской области: площадь, стоимость под ключ в комплектации «Теплый контур» и «White Box», расчет ипотеки",
};

const h2Class =
  "font-heading text-[30px] leading-[1.05] font-medium tracking-[-0.04em] text-ink-2 sm:text-[44px] lg:text-[50px]";

export default function CatalogPage() {
  return (
    <>
      <HubScrollTracker path="/catalog" />
      <CatalogHeader />
      <main className="flex-1">
        <section id="house-projects" className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <Reveal className="mb-10 sm:mb-14">
              <h1 className={h2Class}>Проекты домов</h1>
            </Reveal>
            <CatalogGrid />
          </div>
        </section>

        <section id="houses-for-sale" className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
              <h2 className={h2Class}>Дома в продаже</h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Готовые дома с участками — можно въехать сразу после сделки
              </p>
            </Reveal>
            <HousesForSale />
          </div>
        </section>

        <section id="land-plots" className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
            <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
              <h2 className={h2Class}>Участки в продаже</h2>
              <p className="text-base text-muted-foreground sm:text-lg">
                Участки под строительство в Саратове, Энгельсе и области
              </p>
            </Reveal>
            <LandPlots />
          </div>
        </section>

        <Contacts tone="paper" />
      </main>
      <SiteFooter />
    </>
  );
}
