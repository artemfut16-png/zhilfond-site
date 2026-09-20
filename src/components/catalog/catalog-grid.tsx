"use client";

import * as React from "react";
import { RulerIcon, BedDoubleIcon, BathIcon } from "lucide-react";
import { CatalogCard } from "@/components/catalog/catalog-card";
import { type CardSpec } from "@/components/catalog/card-specs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catalogHouses, roomCounts, type CatalogHouse } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";
import { plural } from "@/lib/utils";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

const sortOptions = {
  "area-desc": {
    label: "Площадь: по убыванию",
    compare: (a: CatalogHouse, b: CatalogHouse) => b.area - a.area,
  },
  "area-asc": {
    label: "Площадь: по возрастанию",
    compare: (a: CatalogHouse, b: CatalogHouse) => a.area - b.area,
  },
  "price-asc": {
    label: "Цена: сначала дешевле",
    compare: (a: CatalogHouse, b: CatalogHouse) =>
      a.warmContourPrice - b.warmContourPrice,
  },
  "price-desc": {
    label: "Цена: сначала дороже",
    compare: (a: CatalogHouse, b: CatalogHouse) =>
      b.warmContourPrice - a.warmContourPrice,
  },
} as const;

type SortKey = keyof typeof sortOptions;

export function CatalogGrid() {
  const [sort, setSort] = React.useState<SortKey>("price-asc");

  const houses = React.useMemo(() => {
    return [...catalogHouses].sort(sortOptions[sort].compare);
  }, [sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm font-medium text-muted-foreground">
          Найдено {houses.length} проектов
        </p>
        <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
          <SelectTrigger className="w-full bg-paper data-[size=default]:h-11 sm:w-64">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {Object.entries(sortOptions).map(([key, opt]) => (
              <SelectItem key={key} value={key}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {houses.length === 0 ? (
        <p className="rounded-(--radius) border border-line bg-paper px-6 py-10 text-center text-muted-foreground">
          Проектов не найдено
        </p>
      ) : null}

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

              <div className="rounded-(--radius) bg-surface px-3 py-2">
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
