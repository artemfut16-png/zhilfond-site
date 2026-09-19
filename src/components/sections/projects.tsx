import Link from "next/link";
import Image from "next/image";
import { RulerIcon, BedDoubleIcon, BathIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SpecRow, type CardSpec } from "@/components/catalog/card-specs";
import { ProjectCatalogCta } from "@/components/sections/project-catalog-cta";
import { projects } from "@/lib/site-data";
import { catalogHouses, roomCounts } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";
import { plural } from "@/lib/utils";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function Projects() {
  return (
    <section id="projects" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
          <h2 className="font-heading text-[30px] leading-[1.05] font-medium tracking-[-0.04em] text-ink-2 sm:text-[44px] lg:text-[50px]">
            Типовые проекты
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Готовые планировки, которые можно адаптировать под ваш участок
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-3">
          {projects.map((project, index) => {
            // Планировка живёт в каталоге — оттуда берём состав помещений
            const rooms =
              catalogHouses.find((h) => h.id === project.id)?.rooms ?? [];
            const { bedrooms, bathrooms } = roomCounts(rooms);

            const specs: CardSpec[] = [
              {
                icon: RulerIcon,
                label: "Площадь",
                value: `${areaFormatter.format(project.area)} м²`,
              },
              bedrooms > 0 && {
                icon: BedDoubleIcon,
                label: "Спальни",
                value: `${bedrooms} ${plural(bedrooms, [
                  "спальня",
                  "спальни",
                  "спален",
                ])}`,
              },
              bathrooms > 0 && {
                icon: BathIcon,
                label: "Санузлы",
                value: `${bathrooms} ${plural(bathrooms, [
                  "санузел",
                  "санузла",
                  "санузлов",
                ])}`,
              },
            ].filter(Boolean) as CardSpec[];

            return (
              <Reveal
                key={project.id}
                delay={Math.min(index, 4) * 60}
                className="h-full"
              >
                <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-paper">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={assetPath(`/catalog/${project.id}.png`)}
                      alt={project.title}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-paper px-3 py-1 text-sm font-medium text-ink-2 tnum">
                      {areaFormatter.format(project.area)} м²
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
                    <p className="font-heading text-2xl font-medium tracking-[-0.04em] text-ink-2">
                      {project.title}
                    </p>

                    <SpecRow specs={specs} />

                    <p className="font-heading text-3xl font-medium tracking-[-0.04em] text-ink-2 tnum">
                      от {priceFormatter.format(project.priceFrom)} ₽
                    </p>

                    <div className="rounded-lg bg-surface px-3 py-2">
                      <p className="text-sm">
                        <span className="font-medium tnum">
                          от {priceFormatter.format(project.mortgageFrom)} ₽/мес
                        </span>{" "}
                        <span className="text-muted-foreground">в ипотеку</span>
                      </p>
                    </div>

                    <Button className="mt-auto" asChild>
                      <Link href={`/catalog/${project.id}`}>Подробнее</Link>
                    </Button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-6 rounded-lg bg-paper px-4 py-5 text-center text-base font-medium text-ink-2">
          И ещё +{catalogHouses.length - projects.length} проектов в полном каталоге
        </div>

        <ProjectCatalogCta />
      </div>
    </section>
  );
}
