import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { LeadDialog } from "@/components/lead-dialog";
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
          <div className="relative aspect-[4/3] w-full overflow-hidden">
            <Image
              src={assetPath(`/catalog/plots/${plot.image}`)}
              alt={`${plot.title} ${areaFormatter.format(plot.area)} сот, ${plot.location}`}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-baseline justify-between gap-2">
              <p className="font-medium">
                {plot.title} {areaFormatter.format(plot.area)} сот
              </p>
            </div>
            <p className="text-sm text-muted-foreground">{plot.location}</p>
            <p className="text-lg font-semibold">
              {priceFormatter.format(plot.price)} ₽
            </p>
            <LeadDialog
              title={`${plot.title} ${areaFormatter.format(plot.area)} сот`}
              description="Оставьте телефон — расскажем подробности участка и организуем показ"
              trigger={
                <Button variant="outline" className="mt-1">
                  Узнать больше
                </Button>
              }
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
