import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LeadDialog } from "@/components/lead-dialog";
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
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={assetPath(`/catalog/for-sale/${house.images[0]}`)}
              alt={house.title}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-medium">{house.title}</p>
              <p className="text-sm text-muted-foreground">
                участок {areaFormatter.format(house.plotArea)} сот
              </p>
            </div>
            <p className="text-lg font-semibold">
              {priceFormatter.format(house.price)} ₽
            </p>
            <p className="text-sm text-muted-foreground">{house.description}</p>
            <p className="text-sm text-muted-foreground">{house.address}</p>
            <LeadDialog
              title={house.title}
              description="Оставьте телефон — расскажем подробности и организуем показ дома"
              trigger={<Button className="mt-1">Узнать больше</Button>}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
