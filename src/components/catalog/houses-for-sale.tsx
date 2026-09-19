import Link from "next/link";
import Image from "next/image";
import { RulerIcon, BedDoubleIcon, LandPlotIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { SpecRow, type CardSpec } from "@/components/catalog/card-specs";
import { housesForSale, roomCounts } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";
import { plural } from "@/lib/utils";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function HousesForSale() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {housesForSale.map((house) => {
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
          <Card key={house.id} className="h-full pt-0">
            <Link
              href={`/catalog/for-sale/${house.id}`}
              className="relative block aspect-[4/3] w-full overflow-hidden"
            >
              <Image
                src={assetPath(`/catalog/for-sale/${house.images[0]}`)}
                alt={house.title}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </Link>
            <CardContent className="flex flex-col gap-3">
              <Link
                href={`/catalog/for-sale/${house.id}`}
                className="font-medium hover:underline"
              >
                {house.title}
              </Link>

              <SpecRow specs={specs} />

              <p className="text-lg font-semibold tnum">
                {priceFormatter.format(house.price)} ₽
              </p>

              <p className="text-sm text-muted-foreground">{house.address}</p>

              <Button className="mt-1 bg-muted text-foreground hover:bg-muted/70" asChild>
                <Link href={`/catalog/for-sale/${house.id}`}>Подробнее</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
