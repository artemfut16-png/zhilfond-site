import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";
import { cn } from "@/lib/utils";

const galleryPhotos = Array.from({ length: 48 }, (_, i) => i + 1);
const mosaicPhotos = galleryPhotos.slice(0, 5);
const restPhotos = galleryPhotos.slice(5);

export function Gallery() {
  return (
    <section id="gallery" className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-32">
        <Reveal className="mb-12 flex flex-col gap-4 lg:mb-16">
          <h2 className="max-w-3xl font-heading text-[30px] leading-none font-normal tracking-[-0.04em] text-ink-2 text-balance sm:text-[44px] lg:text-[50px]">
            Построили более {site.housesBuilt} домов с {site.foundedYear} года
          </h2>
          <p className="text-base text-muted-foreground">
            Реальные и типовые проекты, реализованные нашей командой
          </p>
        </Reveal>

        <Reveal>
          <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-6">
            {mosaicPhotos.map((n, i) => (
              <div
                key={n}
                className={cn(
                  "group relative overflow-hidden rounded-(--radius)",
                  i === 0
                    ? "col-span-2 aspect-[4/3] lg:row-span-2 lg:aspect-auto"
                    : "aspect-[4/3]"
                )}
              >
                <Image
                  src={assetPath(`/gallery/${n}.webp`)}
                  alt={`Проект ${n}`}
                  fill
                  sizes={
                    i === 0
                      ? "(min-width: 1024px) 50vw, 100vw"
                      : "(min-width: 1024px) 25vw, 50vw"
                  }
                  className="object-cover motion-safe:transition-transform motion-safe:duration-300 motion-safe:group-hover:scale-[1.03]"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-3 lg:mt-6">
          <Carousel opts={{ align: "start", loop: true }} className="px-1">
            <CarouselContent>
              {restPhotos.map((n) => (
                <CarouselItem key={n} className="sm:basis-1/2 lg:basis-1/3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-(--radius)">
                    <Image
                      src={assetPath(`/gallery/${n}.webp`)}
                      alt={`Проект ${n}`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3" />
            <CarouselNext className="right-3" />
          </Carousel>
        </Reveal>
      </div>
    </section>
  );
}
