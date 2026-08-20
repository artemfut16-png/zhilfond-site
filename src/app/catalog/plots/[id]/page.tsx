import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPinIcon } from "lucide-react";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink } from "@/components/back-link";
import { ImageLightbox } from "@/components/image-lightbox";
import { LeadDialog } from "@/components/lead-dialog";
import { Button } from "@/components/ui/button";
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
    description: `${plot.title} ${areaFormatter.format(plot.area)} сот, ${plot.location}, ${priceFormatter.format(plot.price)} ₽`,
  };
}

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
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <BackLink />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <ImageLightbox
                src={assetPath(`/catalog/plots/${plot.image}`)}
                alt={title}
                ratio="cover"
              />

              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-balance">
                    {title}
                  </h1>
                </div>

                <div className="rounded-(--radius) border border-primary bg-primary p-5 text-primary-foreground">
                  <p className="text-sm text-primary-foreground/70">Стоимость</p>
                  <p className="text-3xl font-semibold">
                    {priceFormatter.format(plot.price)} ₽
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-(--radius) border border-border bg-card p-5">
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Расположение</p>
                    <p className="font-medium">{plot.location}</p>
                  </div>
                </div>

                <LeadDialog
                  title={title}
                  description="Оставьте телефон — расскажем подробности участка и организуем показ"
                  trigger={<Button size="lg">Оставить заявку</Button>}
                />
              </div>
            </div>
          </div>
        </div>

        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
