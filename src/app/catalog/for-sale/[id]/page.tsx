import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MapPinIcon } from "lucide-react";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink } from "@/components/back-link";
import { ImageLightbox } from "@/components/image-lightbox";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/motion";
import { Contacts } from "@/components/sections/contacts";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import { housesForSale } from "@/lib/catalog-data";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

const h2 =
  "font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 text-balance sm:text-5xl";
const card = "rounded-(--radius) border border-line bg-paper";

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

  const photos = house.images.filter((img) => img !== house.floorPlan);

  return (
    <>
      <CatalogHeader title={house.title} />
      <main className="flex-1">
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:py-20">
            <BackLink />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <Reveal>
                <Carousel opts={{ align: "start", loop: true }}>
                  <CarouselContent>
                    {photos.map((img) => (
                      <CarouselItem key={img}>
                        <ImageLightbox
                          src={assetPath(`/catalog/for-sale/${img}`)}
                          alt={house.title}
                          ratio="cover"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="mt-4 flex justify-end gap-2">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </Reveal>

              <Reveal delay={100} className="flex flex-col gap-6">
                <div>
                  <h1 className={h2}>{house.title}</h1>
                  <p className="mt-3 text-muted-foreground">
                    участок {areaFormatter.format(house.plotArea)} сот
                  </p>
                </div>

                <div className={cn(card, "p-6")}>
                  <p className="text-sm text-muted-foreground">Стоимость</p>
                  <p className="mt-1 font-heading text-4xl font-normal tracking-[-0.03em] text-ink-2 sm:text-5xl">
                    {priceFormatter.format(house.price)} ₽
                  </p>
                </div>

                <div className={cn(card, "flex items-start gap-4 p-6")}>
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                    <MapPinIcon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Адрес</p>
                    <p className="font-medium">{house.address}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">Описание</p>
                  <p>{house.description}</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
            <Reveal>
              <h2 className={cn(h2, "mb-10 lg:mb-14")}>Планировка дома</h2>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-16">
              <Reveal>
                <ImageLightbox
                  src={assetPath(`/catalog/for-sale/${house.floorPlan}`)}
                  alt={`Планировка дома ${house.title}`}
                  ratio="contain"
                />
              </Reveal>

              <Reveal
                delay={100}
                className="overflow-hidden rounded-(--radius) border border-line"
              >
                <table className="w-full border-collapse text-sm sm:text-base">
                  <tbody>
                    {[...house.rooms].sort((a, b) => b.area - a.area).map((room, i) => (
                      <tr
                        key={room.name + i}
                        className={cn(i % 2 === 0 && "bg-surface")}
                      >
                        <td className="px-4 py-3 sm:px-6">{room.name}</td>
                        <td className="px-4 py-3 text-right font-medium sm:px-6">
                          {areaFormatter.format(room.area)} м²
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
            <Reveal>
              <h2 className={cn(h2, "mb-10 lg:mb-14")}>
                Что входит в стоимость?
              </h2>
            </Reveal>

            <Reveal className="grid gap-4 lg:grid-cols-2 lg:items-start">
              <Accordion
                type="single"
                collapsible
                defaultValue="specs"
                className={cn(card, "px-6")}
              >
                <AccordionItem value="specs">
                  <AccordionTrigger className="text-base font-medium">
                    Комплектация дома
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-4">
                      {house.specCategories.map((category) => (
                        <div key={category.title}>
                          <p className="font-medium">{category.title}</p>
                          <ul className="mt-1 list-disc pl-5 text-muted-foreground">
                            {category.items.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Accordion
                type="single"
                collapsible
                defaultValue="utilities"
                className={cn(card, "px-6")}
              >
                <AccordionItem value="utilities">
                  <AccordionTrigger className="text-base font-medium">
                    Инженерные коммуникации
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="list-disc pl-5 text-muted-foreground">
                      {house.utilities.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </Reveal>
          </div>
        </section>

        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
