"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { catalogHouses, type CatalogHouse } from "@/lib/catalog-data";

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
  const [sort, setSort] = React.useState<SortKey>("area-desc");

  const houses = React.useMemo(() => {
    return [...catalogHouses].sort(sortOptions[sort].compare);
  }, [sort]);

  return (
    <div>
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Найдено {houses.length} проектов
        </p>
        <Select value={sort} onValueChange={(v) => setSort(v as SortKey)}>
          <SelectTrigger className="w-full sm:w-64">
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

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {houses.map((house) => (
          <Card key={house.id} className="h-full pt-0">
            <Link href={`/catalog/${house.id}`} className="relative block aspect-[4/3] w-full overflow-hidden">
              <Image
                src={`/catalog/${house.id}.png`}
                alt={house.title}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
            <CardContent className="flex flex-col gap-3">
              <div className="flex items-baseline justify-between gap-2">
                <Link href={`/catalog/${house.id}`} className="font-medium hover:underline">
                  {house.title}
                </Link>
                <p className="text-sm text-muted-foreground">
                  {areaFormatter.format(house.area)} м²
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-(--radius) border border-border p-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Теплый контур</span>
                  <span className="font-medium">
                    {priceFormatter.format(house.warmContourPrice)} ₽
                  </span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">White Box</span>
                  <span className="font-medium">
                    {priceFormatter.format(house.whiteBoxPrice)} ₽
                  </span>
                </div>
              </div>

              <div className="rounded-(--radius) bg-muted px-3 py-2">
                <p className="text-sm">
                  <span className="font-medium">
                    от {priceFormatter.format(house.mortgageFrom)} ₽/мес
                  </span>{" "}
                  <span className="text-muted-foreground">в ипотеку</span>
                </p>
              </div>

              <Button className="mt-1" asChild>
                <Link href={`/catalog/${house.id}`}>Подробнее</Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
