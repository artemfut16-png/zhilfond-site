import Link from "next/link";
import Image from "next/image";
import { LandPlotIcon, MapPinIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SpecRow, type CardSpec } from "@/components/catalog/card-specs";
import { landPlots } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function LandPlots() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {landPlots.map((plot) => {
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
          <Card key={plot.id} className="h-full pt-0">
            <Link
              href={`/catalog/plots/${plot.id}`}
              className="relative block aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={assetPath(`/catalog/plots/${plot.image}`)}
                alt={`${plot.title} ${areaFormatter.format(plot.area)} сот, ${plot.location}`}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
            <CardContent className="flex flex-col gap-3">
              <Link
                href={`/catalog/plots/${plot.id}`}
                className="font-medium hover:underline"
              >
                {plot.title} {areaFormatter.format(plot.area)} сот
              </Link>

              <SpecRow specs={specs} />

              <p className="text-lg font-semibold tnum">
                {priceFormatter.format(plot.price)} ₽
              </p>

              <Button className="mt-1 bg-muted text-foreground hover:bg-muted/70" asChild>
                <Link href={`/catalog/plots/${plot.id}`}>Подробнее</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
