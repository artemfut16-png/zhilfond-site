import Link from "next/link";
import Image from "next/image";
import { RulerIcon, BedDoubleIcon, BathIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    <section id="projects">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="font-heading text-3xl font-bold tracking-[-0.02em] sm:text-4xl">
            Типовые проекты
          </h2>
          <p className="text-muted-foreground">
            Готовые планировки, которые можно адаптировать под ваш участок
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((project) => {
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
              <Card key={project.id} className="h-full pt-0">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={assetPath(`/catalog/${project.id}.png`)}
                    alt={project.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-col gap-3">
                  <p className="font-medium">{project.title}</p>

                  <SpecRow specs={specs} />

                  <p className="text-lg font-semibold tnum">
                    от {priceFormatter.format(project.priceFrom)} ₽
                  </p>

                  <div className="rounded-(--radius) bg-muted px-3 py-2">
                    <p className="text-sm">
                      <span className="font-medium tnum">
                        от {priceFormatter.format(project.mortgageFrom)} ₽/мес
                      </span>{" "}
                      <span className="text-muted-foreground">в ипотеку</span>
                    </p>
                  </div>

                  <Button className="mt-1 bg-muted text-foreground hover:bg-muted/70" asChild>
                    <Link href={`/catalog/${project.id}`}>Подробнее</Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-4 rounded-(--radius) bg-muted px-4 py-4 text-center text-base font-medium text-foreground">
          И ещё +{catalogHouses.length - projects.length} проектов в полном каталоге
        </div>

        <ProjectCatalogCta />
      </div>
    </section>
  );
}
