import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/motion";
import { SpecRow, type CardSpec } from "@/components/catalog/card-specs";

/**
 * Карточка каталога в стиле карточек «Проекты» на главной:
 * фото 4:3, строка характеристик, цена, кнопка «Подробнее».
 */
export function CatalogCard({
  href,
  image,
  alt,
  sizes,
  title,
  specs,
  price,
  index = 0,
  children,
}: {
  href: string;
  image: string;
  alt: string;
  sizes: string;
  title: string;
  specs: CardSpec[];
  price?: string;
  index?: number;
  children?: React.ReactNode;
}) {
  return (
    <Reveal delay={Math.min(index, 4) * 60} className="h-full">
      <article className="group flex h-full flex-col overflow-hidden rounded-(--radius) border border-line bg-paper">
        <Link
          href={href}
          className="relative block aspect-[4/3] w-full overflow-hidden"
        >
          <Image
            src={image}
            alt={alt}
            fill
            sizes={sizes}
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
          />
        </Link>
        <div className="flex flex-1 flex-col gap-4 p-5 sm:p-6">
          <Link
            href={href}
            className="font-heading text-2xl font-medium tracking-[-0.04em] text-ink-2 hover:underline"
          >
            {title}
          </Link>

          <SpecRow specs={specs} />

          {price ? (
            <p className="font-heading text-3xl font-medium tracking-[-0.04em] text-ink-2 tnum">
              {price}
            </p>
          ) : null}

          {children}

          <Button className="mt-auto" asChild>
            <Link href={href}>Подробнее</Link>
          </Button>
        </div>
      </article>
    </Reveal>
  );
}
