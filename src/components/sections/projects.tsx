import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ProjectCatalogCta } from "@/components/sections/project-catalog-cta";
import { projects } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function Projects() {
  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Типовые проекты
          </h2>
          <p className="text-muted-foreground">
            Готовые планировки, которые можно адаптировать под ваш участок
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {projects.map((project) => (
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
                <div className="flex items-baseline justify-between gap-2">
                  <p className="font-medium">{project.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {areaFormatter.format(project.area)} м²
                  </p>
                </div>
                <p className="text-lg font-semibold">
                  от {priceFormatter.format(project.priceFrom)} ₽
                </p>
                <div className="rounded-(--radius) bg-muted px-3 py-2">
                  <p className="text-sm">
                    <span className="font-medium">
                      от {priceFormatter.format(project.mortgageFrom)} ₽/мес
                    </span>{" "}
                    <span className="text-muted-foreground">в ипотеку</span>
                  </p>
                </div>
                <Button className="mt-1" asChild>
                  <Link href={`/catalog/${project.id}`}>Подробнее</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-4 flex justify-center">
          <span className="rounded-(--radius) bg-muted px-4 py-2 text-sm text-muted-foreground">
            И ещё +6 проектов в полном каталоге
          </span>
        </div>

        <ProjectCatalogCta />
      </div>
    </section>
  );
}
