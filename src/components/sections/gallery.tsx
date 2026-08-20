import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { site } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

const galleryPhotos = Array.from({ length: 48 }, (_, i) => i + 1);

export function Gallery() {
  return (
    <section id="gallery" className="border-b border-border">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Построили более {site.housesBuilt} домов с {site.foundedYear} года
          </h2>
          <p className="text-muted-foreground">
            Реальные и типовые проекты, реализованные нашей командой
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="px-1">
          <CarouselContent>
            {galleryPhotos.map((n) => (
              <CarouselItem key={n} className="sm:basis-1/2">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-(--radius) border border-border">
                  <Image
                    src={assetPath(`/gallery/${n}.webp`)}
                    alt={`Проект ${n}`}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
