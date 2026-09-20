import { RulerIcon, BedDoubleIcon, LandPlotIcon } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import type { CardSpec } from "@/components/catalog/card-specs";
import { housesForSale, roomCounts } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";
import { plural } from "@/lib/utils";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function HousesForSale() {
  if (housesForSale.length === 0) {
    return (
      <p className="rounded-(--radius) border border-line bg-paper px-6 py-10 text-center text-muted-foreground">
        Сейчас нет домов в продаже
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {housesForSale.map((house, index) => {
        const { bedrooms } = roomCounts(house.rooms);

        const specs: CardSpec[] = [
          {
            icon: RulerIcon,
            label: "Площадь дома",
            value: `${areaFormatter.format(house.area)} м²`,
          },
          {
            icon: LandPlotIcon,
            label: "Участок",
            value: `${areaFormatter.format(house.plotArea)} сот`,
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
        ].filter(Boolean) as CardSpec[];

        return (
          <CatalogCard
            key={house.id}
            index={index}
            href={`/catalog/for-sale/${house.id}`}
            image={assetPath(`/catalog/for-sale/${house.images[0]}`)}
            alt={house.title}
            sizes="(min-width: 640px) 50vw, 100vw"
            title={house.title}
            specs={specs}
            price={`${priceFormatter.format(house.price)} ₽`}
          >
            <p className="text-sm text-muted-foreground">{house.address}</p>
          </CatalogCard>
        );
      })}
    </div>
  );
}
