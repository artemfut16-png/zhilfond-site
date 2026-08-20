import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { landPlots } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function LandPlots() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {landPlots.map((plot) => (
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
            <div className="flex items-baseline justify-between gap-2">
              <Link
                href={`/catalog/plots/${plot.id}`}
                className="font-medium hover:underline"
              >
                {plot.title} {areaFormatter.format(plot.area)} сот
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">{plot.location}</p>
            <p className="text-lg font-semibold">
              {priceFormatter.format(plot.price)} ₽
            </p>
            <Button variant="outline" className="mt-1" asChild>
              <Link href={`/catalog/plots/${plot.id}`}>Подробнее</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
