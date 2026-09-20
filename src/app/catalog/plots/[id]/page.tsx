import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPinIcon, RulerIcon, HashIcon, MapIcon } from "lucide-react";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink } from "@/components/back-link";
import { ImageLightbox } from "@/components/image-lightbox";
import { Reveal } from "@/components/motion";
import { Contacts } from "@/components/sections/contacts";
import { assetPath } from "@/lib/asset-path";
import { landPlots } from "@/lib/catalog-data";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

function getPlot(id: string) {
  return landPlots.find((plot) => plot.id === id);
}

export function generateStaticParams() {
  return landPlots.map((plot) => ({ id: plot.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const plot = getPlot(id);
  if (!plot) return {};
  return {
    title: `${plot.title} ${areaFormatter.format(plot.area)} сот — участок в продаже — СК Жилищный Фонд`,
    description: `${plot.title} ${areaFormatter.format(plot.area)} сот, ${plot.fullAddress}, ${priceFormatter.format(plot.price)} ₽`,
  };
}

const card =
  "flex items-start gap-4 rounded-(--radius) border border-line bg-paper p-6";
const badge =
  "flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink";

export default async function LandPlotPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const plot = getPlot(id);
  if (!plot) notFound();

  const title = `${plot.title} ${areaFormatter.format(plot.area)} сот`;

  return (
    <>
      <CatalogHeader title={title} />
      <main className="flex-1">
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
            <BackLink />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <Reveal>
                <ImageLightbox
                  src={assetPath(`/catalog/plots/${plot.image}`)}
                  alt={title}
                  ratio="cover"
                />
              </Reveal>

              <Reveal delay={100} className="flex flex-col gap-6">
                <h1 className="font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 text-balance sm:text-5xl">
                  {title}
                </h1>

                <div className="rounded-(--radius) border border-line bg-paper p-6">
                  <p className="text-sm text-muted-foreground">Стоимость</p>
                  <p className="mt-1 font-heading text-4xl font-normal tracking-[-0.03em] text-ink-2 sm:text-5xl">
                    {priceFormatter.format(plot.price)} ₽
                  </p>
                </div>

                <div className={card}>
                  <div className={badge}>
                    <MapPinIcon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-medium">{plot.fullAddress}</p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className={card}>
                    <div className={badge}>
                      <RulerIcon className="size-5" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Площадь</p>
                      <p className="font-medium">
                        {areaFormatter.format(plot.areaM2)} м²
                      </p>
                    </div>
                  </div>
                  <div className={card}>
                    <div className={badge}>
                      <HashIcon className="size-5" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm text-muted-foreground">
                        Кадастровый номер
                      </p>
                      <p className="font-medium break-words">
                        {plot.cadastralNumber}
                      </p>
                    </div>
                  </div>
                </div>

                <a
                  href={plot.cadastralMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${card} transition-colors hover:bg-surface`}
                >
                  <div className={badge}>
                    <MapIcon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">Кадастровая карта</p>
                    <p className="font-medium break-words underline underline-offset-2">
                      {plot.cadastralMapUrl}
                    </p>
                  </div>
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
