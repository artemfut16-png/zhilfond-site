import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  CheckIcon,
  XIcon,
  CreditCardIcon,
  PercentIcon,
  BanknoteIcon,
  RulerIcon,
  type LucideIcon,
} from "lucide-react";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { SiteFooter } from "@/components/site-footer";
import { BackLink } from "@/components/back-link";
import { ImageLightbox } from "@/components/image-lightbox";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Gallery } from "@/components/sections/gallery";
import { Contacts } from "@/components/sections/contacts";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import {
  catalogHouses,
  getCatalogHouse,
  packageFeatures,
  additionalOptions,
  paymentMethods,
  formatRoomArea,
} from "@/lib/catalog-data";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });
const totalAreaFormatter = new Intl.NumberFormat("ru-RU", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const paymentIcons: Record<"rate" | "cash" | "card", LucideIcon> = {
  rate: PercentIcon,
  cash: BanknoteIcon,
  card: CreditCardIcon,
};

const headingClass =
  "max-w-3xl font-heading text-[30px] leading-none font-normal tracking-[-0.04em] text-ink-2 text-balance sm:text-[44px] lg:text-[50px]";

export function generateStaticParams() {
  return catalogHouses.map((house) => ({ slug: house.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const house = getCatalogHouse(slug);
  if (!house) return {};
  return {
    title: `${house.title} — СК Жилищный Фонд`,
    description: `Дом ${house.title}, ${areaFormatter.format(house.area)} м². Теплый контур от ${priceFormatter.format(house.warmContourPrice)} ₽, White Box от ${priceFormatter.format(house.whiteBoxPrice)} ₽.`,
  };
}

export default async function CatalogHousePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const house = getCatalogHouse(slug);
  if (!house) notFound();

  const photos = house.images?.length ? house.images : [`${house.id}.png`];

  return (
    <>
      <CatalogHeader title={house.title} />
      <main className="flex-1">
        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1280px] px-4 py-10 sm:px-6 lg:py-16">
            <BackLink />

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <Reveal>
                {photos.length > 1 ? (
                  <Carousel opts={{ align: "start" }}>
                    <CarouselContent>
                      {photos.map((img) => (
                        <CarouselItem key={img}>
                          <ImageLightbox
                            src={assetPath(`/catalog/${img}`)}
                            alt={house.title}
                            ratio="cover"
                            className="border-line"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <div className="mt-4 flex justify-end gap-2">
                      <CarouselPrevious aria-label="Предыдущее фото" />
                      <CarouselNext aria-label="Следующее фото" />
                    </div>
                  </Carousel>
                ) : (
                  <ImageLightbox
                    src={assetPath(`/catalog/${photos[0]}`)}
                    alt={house.title}
                    ratio="cover"
                    className="border-line"
                  />
                )}
              </Reveal>

              <Reveal delay={80} className="flex flex-col gap-8">
                <div>
                  <h1 className={headingClass}>{house.title}</h1>
                </div>

                <div className="flex items-start gap-4 rounded-(--radius) border border-line bg-paper p-6">
                  <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                    <RulerIcon className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Площадь дома</p>
                    <p className="font-medium">
                      {areaFormatter.format(house.area)} м²
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-4 rounded-(--radius) border border-line bg-paper p-6">
                    <div>
                      <p className="font-medium">Теплый контур</p>
                      <p className="mt-1 text-[13px] leading-tight text-muted-foreground">
                        Стоимость без учёта участка
                      </p>
                    </div>
                    <p className="font-heading text-3xl leading-none font-normal tracking-[-0.04em] text-ink-2 sm:text-4xl">
                      {priceFormatter.format(house.warmContourPrice)} ₽
                    </p>
                  </div>
                  <div className="flex flex-col gap-4 rounded-(--radius) border border-ink-2 bg-ink-2 p-6 text-white">
                    <div>
                      <p className="font-medium">White Box</p>
                      <p className="mt-1 text-[13px] leading-tight text-white/75">
                        Стоимость без учёта участка
                      </p>
                    </div>
                    <p className="font-heading text-3xl leading-none font-normal tracking-[-0.04em] sm:text-4xl">
                      {priceFormatter.format(house.whiteBoxPrice)} ₽
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-(--radius) border border-line bg-paper p-6">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-(--radius) bg-accent-soft text-accent-ink">
                    <CreditCardIcon className="size-6" />
                  </div>
                  <div>
                    <p className="font-heading text-2xl leading-tight font-normal tracking-[-0.04em] text-ink-2">
                      от {priceFormatter.format(house.mortgageFrom)} ₽/мес
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Платеж по ипотеке на 30 лет по ставке от 5,3%
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-28">
            <Reveal className="mb-12 lg:mb-16">
              <h2 className={headingClass}>Планировка дома</h2>
            </Reveal>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-12">
              <Reveal>
                <ImageLightbox
                  src={assetPath(`/catalog/${house.id}-plan.png`)}
                  alt={`Планировка дома ${house.title}`}
                  ratio="contain"
                  className="border-line bg-paper"
                />
              </Reveal>

              <Reveal
                delay={80}
                className="overflow-hidden rounded-(--radius) border border-line bg-paper"
              >
                <table className="w-full border-collapse text-base">
                  <tbody>
                    {[...house.rooms].sort((a, b) => b.area - a.area).map((room, i) => (
                      <tr
                        key={room.name + i}
                        className={cn(i > 0 && "border-t border-line", i % 2 === 1 ? "bg-[#F6F6F6]" : "bg-paper")}
                      >
                        <td className="px-4 py-3.5 sm:px-6">{room.name}</td>
                        <td className="px-4 py-3.5 text-right font-medium sm:px-6">
                          {formatRoomArea(room.area)} м²
                        </td>
                      </tr>
                    ))}
                    <tr className="border-t border-line bg-paper font-semibold">
                      <td className="px-4 py-3.5 sm:px-6">Общая площадь</td>
                      <td className="px-4 py-3.5 text-right sm:px-6">
                        {totalAreaFormatter.format(
                          Math.round(house.rooms.reduce((sum, room) => sum + room.area, 0) * 100) / 100,
                        )}{" "}
                        м²
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-28">
            <Reveal className="mb-12 lg:mb-16">
              <h2 className={headingClass}>Что входит в стоимость?</h2>
            </Reveal>

            <Reveal className="overflow-hidden rounded-(--radius) border border-line bg-paper">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-ink-2 text-white">
                    <th className="px-4 py-4 text-left font-medium sm:px-6">
                      Опция
                    </th>
                    <th className="w-[76px] px-1 py-4 text-center text-sm font-medium sm:w-40 sm:text-base sm:px-6">
                      Теплый контур
                    </th>
                    <th className="w-[76px] px-1 py-4 text-center text-sm font-medium sm:w-40 sm:text-base sm:px-6">
                      White Box
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packageFeatures.map((feature, i) => (
                    <tr
                      key={feature.label}
                      className={cn("border-t border-line", i % 2 === 1 ? "bg-[#F6F6F6]" : "bg-paper")}
                    >
                      <td className="px-4 py-3.5 sm:px-6">{feature.label}</td>
                      <td className="px-2 py-3.5 text-center sm:px-6">
                        {feature.inWarmContour ? (
                          <CheckIcon className="mx-auto size-5 text-ink-2" />
                        ) : (
                          <XIcon className="mx-auto size-5 text-muted-2" />
                        )}
                      </td>
                      <td className="px-2 py-3.5 text-center sm:px-6">
                        <CheckIcon className="mx-auto size-5 text-ink-2" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-28">
            <Reveal className="mb-12 lg:mb-16">
              <h2 className={headingClass}>Дополнительные опции</h2>
            </Reveal>

            <Reveal className="overflow-hidden rounded-(--radius) border border-line bg-paper">
              <table className="w-full border-collapse text-base">
                <thead>
                  <tr className="bg-ink-2 text-white">
                    <th className="px-4 py-4 text-left font-medium sm:px-6">
                      Опция
                    </th>
                    <th className="px-4 py-4 text-right font-medium sm:px-6">
                      Стоимость
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {additionalOptions.map((option, i) => (
                    <tr
                      key={option.label}
                      className={cn("border-t border-line", i % 2 === 1 ? "bg-[#F6F6F6]" : "bg-paper")}
                    >
                      <td className="px-4 py-3.5 sm:px-6">{option.label}</td>
                      <td className="px-4 py-3.5 text-right font-medium whitespace-nowrap sm:px-6">
                        {priceFormatter.format(option.price)} ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper text-ink">
          <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-28">
            <Reveal className="mb-12 lg:mb-16">
              <h2 className={headingClass}>Способы оплаты</h2>
            </Reveal>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {paymentMethods.map((method, i) => {
                const Icon = paymentIcons[method.kind];
                return (
                  <Reveal
                    key={method.label}
                    delay={Math.min(i, 4) * 80}
                    className="flex flex-col gap-6 rounded-(--radius) border border-line bg-paper p-6"
                  >
                    <div className="flex size-12 items-center justify-center rounded-(--radius) bg-accent-soft text-accent-ink">
                      <Icon className="size-6" />
                    </div>
                    <div>
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-ink-2">
                        {method.label}
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {method.detail}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <Gallery tone="paper" />
        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
