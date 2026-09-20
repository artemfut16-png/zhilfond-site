import { LandPlotIcon, MapPinIcon } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import type { CardSpec } from "@/components/catalog/card-specs";
import { landPlots } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function LandPlots() {
  if (landPlots.length === 0) {
    return (
      <p className="rounded-(--radius) border border-line bg-paper px-6 py-10 text-center text-muted-foreground">
        Сейчас нет участков в продаже
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {landPlots.map((plot, index) => {
        const specs: CardSpec[] = [
          {
            icon: LandPlotIcon,
            label: "Площадь",
            value: `${areaFormatter.format(plot.area)} сот`,
          },
          {
            icon: MapPinIcon,
            label: "Расположение",
            value: plot.location,
          },
        ];

        return (
          <CatalogCard
            key={plot.id}
            index={index}
            href={`/catalog/plots/${plot.id}`}
            image={assetPath(`/catalog/plots/${plot.image}`)}
            alt={`${plot.title} ${areaFormatter.format(plot.area)} сот, ${plot.location}`}
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            title={`${plot.title} ${areaFormatter.format(plot.area)} сот`}
            specs={specs}
            price={`${priceFormatter.format(plot.price)} ₽`}
          />
        );
      })}
    </div>
  );
}
