import Link from "next/link";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { housesForSale } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");
const areaFormatter = new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 });

export function HousesForSale() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {housesForSale.map((house) => (
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
            <div className="flex items-baseline justify-between gap-2">
              <Link
                href={`/catalog/for-sale/${house.id}`}
                className="font-medium hover:underline"
              >
                {house.title}
              </Link>
              <p className="text-sm text-muted-foreground">
                участок {areaFormatter.format(house.plotArea)} сот
              </p>
            </div>
            <p className="text-lg font-semibold">
              {priceFormatter.format(house.price)} ₽
            </p>
            <p className="text-sm text-muted-foreground">{house.address}</p>
            <Button className="mt-1" asChild>
              <Link href={`/catalog/for-sale/${house.id}`}>Подробнее</Link>
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
