import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeftIcon,
  CheckIcon,
  XIcon,
  CreditCardIcon,
  PercentIcon,
  BanknoteIcon,
  type LucideIcon,
} from "lucide-react";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { CatalogFooter } from "@/components/catalog/catalog-footer";
import { ImageLightbox } from "@/components/image-lightbox";
import { Gallery } from "@/components/sections/gallery";
import { Contacts } from "@/components/sections/contacts";
import { cn } from "@/lib/utils";
import { assetPath } from "@/lib/asset-path";
import {
  catalogHouses,
  getCatalogHouse,
  packageFeatures,
  additionalOptions,
  paymentGroups,
} from "@/lib/catalog-data";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

const paymentIcons: Record<"rate" | "cash" | "card", LucideIcon> = {
  rate: PercentIcon,
  cash: BanknoteIcon,
  card: CreditCardIcon,
};

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

  return (
    <>
      <CatalogHeader />
      <main className="flex-1">
        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <Link
              href="/catalog"
              className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeftIcon className="size-4" />
              Все проекты
            </Link>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <ImageLightbox
                src={assetPath(`/catalog/${house.id}.png`)}
                alt={house.title}
                ratio="cover"
              />

              <div className="flex flex-col gap-6">
                <div>
                  <h1 className="text-4xl font-semibold tracking-tight text-balance">
                    {house.title}
                  </h1>
                  <p className="mt-1 text-muted-foreground">
                    {areaFormatter.format(house.area)} м² · стоимость без
                    учета участка
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-3 rounded-(--radius) border border-border bg-card p-5">
                    <p className="text-sm text-muted-foreground">Теплый контур</p>
                    <p className="text-2xl font-semibold">
                      {priceFormatter.format(house.warmContourPrice)} ₽
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 rounded-(--radius) border border-primary bg-primary p-5 text-primary-foreground">
                    <p className="text-sm text-primary-foreground/70">White Box</p>
                    <p className="text-2xl font-semibold">
                      {priceFormatter.format(house.whiteBoxPrice)} ₽
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 rounded-(--radius) border border-border bg-card p-5">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-muted">
                    <CreditCardIcon className="size-6" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold">
                      от {priceFormatter.format(house.mortgageFrom)} ₽/мес
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Платеж по ипотеке на 30 лет по ставке от 5,3%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">
              Планировка дома
            </h2>

            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
              <ImageLightbox
                src={assetPath(`/catalog/${house.id}-plan.png`)}
                alt={`Планировка дома ${house.title}`}
                ratio="contain"
              />

              <div className="overflow-hidden rounded-(--radius) border border-border">
                <table className="w-full border-collapse text-sm">
                  <tbody>
                    {house.rooms.map((room, i) => (
                      <tr
                        key={room.name + i}
                        className={cn(i % 2 === 1 && "bg-muted/40")}
                      >
                        <td className="px-4 py-3 sm:px-6">{room.name}</td>
                        <td className="px-4 py-3 text-right font-medium sm:px-6">
                          {areaFormatter.format(room.area)} м²
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">
              Что входит в стоимость?
            </h2>

            <div className="overflow-hidden rounded-(--radius) border border-border">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-medium sm:px-6">
                      Опция
                    </th>
                    <th className="w-32 px-4 py-3 text-center font-medium sm:w-40 sm:px-6">
                      Теплый контур
                    </th>
                    <th className="w-32 px-4 py-3 text-center font-medium sm:w-40 sm:px-6">
                      White Box
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {packageFeatures.map((feature, i) => (
                    <tr
                      key={feature.label}
                      className={cn(i % 2 === 1 && "bg-muted/40")}
                    >
                      <td className="px-4 py-3 sm:px-6">{feature.label}</td>
                      <td className="px-4 py-3 text-center sm:px-6">
                        {feature.inWarmContour ? (
                          <CheckIcon className="mx-auto size-4 text-foreground" />
                        ) : (
                          <XIcon className="mx-auto size-4 text-muted-foreground/50" />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center sm:px-6">
                        <CheckIcon className="mx-auto size-4 text-foreground" />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">
              Дополнительные опции
            </h2>

            <div className="overflow-hidden rounded-(--radius) border border-border">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-primary text-primary-foreground">
                    <th className="px-4 py-3 text-left font-medium sm:px-6">
                      Опция
                    </th>
                    <th className="px-4 py-3 text-right font-medium sm:px-6">
                      Стоимость
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {additionalOptions.map((option, i) => (
                    <tr
                      key={option.label}
                      className={cn(i % 2 === 1 && "bg-muted/40")}
                    >
                      <td className="px-4 py-3 sm:px-6">{option.label}</td>
                      <td className="px-4 py-3 text-right font-medium sm:px-6">
                        {priceFormatter.format(option.price)} ₽
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="border-b border-border">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <h2 className="mb-8 text-3xl font-semibold tracking-tight">
              Способы оплаты
            </h2>
            <div className="flex flex-col gap-10">
              {paymentGroups.map((group) => (
                <div key={group.id} className="flex flex-col gap-4">
                  <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase">
                    {group.title}
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.methods.map((method) => {
                      const Icon = paymentIcons[method.kind];
                      return (
                        <div
                          key={method.label}
                          className="flex flex-col gap-4 rounded-(--radius) border border-border bg-card p-5"
                        >
                          <div className="flex size-10 items-center justify-center rounded-lg bg-muted">
                            <Icon className="size-5" />
                          </div>
                          <div>
                            <p className="font-medium">{method.label}</p>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {method.detail}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Gallery />
        <Contacts />
      </main>
      <CatalogFooter />
    </>
  );
}
