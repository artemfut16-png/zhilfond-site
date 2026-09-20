import { CatalogCard } from "@/components/catalog/catalog-card";
import { housesForSale, houseForSaleTitle } from "@/lib/catalog-data";
import { assetPath } from "@/lib/asset-path";

const priceFormatter = new Intl.NumberFormat("ru-RU");

export function HousesForSale() {
  const sorted = [...housesForSale].sort((a, b) => a.price - b.price);

  if (sorted.length === 0) {
    return (
      <p className="rounded-(--radius) border border-line bg-paper px-6 py-10 text-center text-muted-foreground">
        Сейчас нет домов в продаже
      </p>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {sorted.map((house, index) => {
        const title = houseForSaleTitle(house);

        return (
          <CatalogCard
            key={house.id}
            index={index}
            href={`/catalog/for-sale/${house.id}`}
            image={assetPath(`/catalog/for-sale/${house.images[0]}`)}
            alt={title}
            sizes="(min-width: 640px) 50vw, 100vw"
            title={title}
            subtitle={
              <p className="text-sm text-muted-foreground">{house.address}</p>
            }
            price={`${priceFormatter.format(house.price)} ₽`}
          />
        );
      })}
    </div>
  );
}
