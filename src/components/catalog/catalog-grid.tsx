import { RulerIcon, BedDoubleIcon, BathIcon } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import { type CardSpec } from "@/components/catalog/card-specs";
import { catalogHouses, roomCounts } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";
import { plural } from "@/lib/utils";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

const houses = [...catalogHouses].sort(
  (a, b) => a.warmContourPrice - b.warmContourPrice,
);

export function CatalogGrid() {
  return (
    <div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {houses.map((house, index) => {
          const { bedrooms, bathrooms } = roomCounts(house.rooms);
          const specs: CardSpec[] = [
            {
              icon: RulerIcon,
              label: "Площадь",
              value: `${areaFormatter.format(house.area)} м²`,
            },
            bedrooms > 0 && {
              icon: BedDoubleIcon,
              label: "Спальни",
              value: `${bedrooms} ${plural(bedrooms, ["спальня", "спальни", "спален"])}`,
            },
            bathrooms > 0 && {
              icon: BathIcon,
              label: "Санузлы",
              value: `${bathrooms} ${plural(bathrooms, ["санузел", "санузла", "санузлов"])}`,
            },
          ].filter(Boolean) as CardSpec[];

          return (
            <CatalogCard
              key={house.id}
              index={index}
              href={`/catalog/${house.id}`}
              image={assetPath(`/catalog/${house.id}.png`)}
              alt={house.title}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              title={house.title}
              specs={specs}
            >
              <div className="flex flex-col gap-1.5 rounded-(--radius) border border-line p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Теплый контур</span>
                  <span className="font-medium text-ink-2 tnum">
                    {priceFormatter.format(house.warmContourPrice)} ₽
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">White Box</span>
                  <span className="font-medium text-ink-2 tnum">
                    {priceFormatter.format(house.whiteBoxPrice)} ₽
                  </span>
                </div>
              </div>

              <div className="rounded-(--radius) border border-line bg-paper px-3 py-2">
                <p className="text-sm">
                  <span className="font-medium tnum">
                    от {priceFormatter.format(house.mortgageFrom)} ₽/мес
                  </span>{" "}
                  <span className="text-muted-foreground">в ипотеку</span>
                </p>
              </div>
            </CatalogCard>
          );
        })}
      </div>
    </div>
  );
}
