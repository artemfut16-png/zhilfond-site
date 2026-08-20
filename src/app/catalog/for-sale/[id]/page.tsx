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
import { housesForSale } from "@/lib/catalog-data";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

function getHouse(id: string) {
  return housesForSale.find((house) => house.id === id);
}

export function generateStaticParams() {
  return housesForSale.map((house) => ({ id: house.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const house = getHouse(id);
  if (!house) return {};
  return {
    title: `${house.title} — дом в продаже — СК Жилищный Фонд`,
    description: `${house.title} на участке ${areaFormatter.format(house.plotArea)} сот, ${priceFormatter.format(house.price)} ₽. ${house.address}`,
  };
}

export default async function HouseForSalePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const house = getHouse(id);
  if (!house) notFound();

  return (
    <>
      <CatalogHeader title={house.title} />
      <main className="flex-1">
        <div>
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <BackLink />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <div className="flex flex-col gap-4">
                <ImageLightbox
                  src={assetPath(`/catalog/for-sale/${house.images[0]}`)}
                  alt={house.title}
                  ratio="cover"
                />
                {house.images.length > 1 && (
                  <div className="grid grid-cols-2 gap-4">
                    {house.images.slice(1).map((img) => (
                      <ImageLightbox
                        key={img}
                        src={assetPath(`/catalog/for-sale/${img}`)}
                        alt={house.title}
                        ratio="cover"
                      />
                    ))}
                  </div>
                )}
              </div>

              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-balance">
                    {house.title}
                  </h1>
                  <p className="mt-1 text-muted-foreground">
                    участок {areaFormatter.format(house.plotArea)} сот
                  </p>
                </div>

                <div className="rounded-(--radius) border border-primary bg-primary p-5 text-primary-foreground">
                  <p className="text-sm text-primary-foreground/70">Стоимость</p>
                  <p className="text-3xl font-semibold">
                    {priceFormatter.format(house.price)} ₽
                  </p>
                </div>

                <div className="flex items-start gap-3 rounded-(--radius) border border-border bg-card p-5">
                  <MapPinIcon className="mt-0.5 size-5 shrink-0 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-medium">{house.address}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Описание</p>
                  <p>{house.description}</p>
                </div>

                <LeadDialog
                  title={house.title}
                  description="Оставьте телефон — расскажем подробности и организуем показ дома"
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
