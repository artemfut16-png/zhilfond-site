import { ImageIcon, PlayIcon, ArrowUpRightIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { site } from "@/lib/site-data";
import { getVkEmbedSrc } from "@/lib/vk";

// Вставьте сюда ссылки на клипы ВКонтакте (например "https://vk.com/clip-123456789_456239017"),
// по одной на каждый обзор — карточка автоматически станет плеером VK.
const videoReviews: { label: string; vkUrl: string | null }[] = [
  {
    label: "Обзор дома 1",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239191",
  },
  {
    label: "Обзор дома 2",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239187",
  },
  {
    label: "Обзор дома 3",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239176",
  },
  {
    label: "Обзор дома 4",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239162",
  },
  {
    label: "Обзор дома 5",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239174",
  },
  {
    label: "Обзор дома 6",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239164",
  },
  {
    label: "Обзор дома 7",
    vkUrl: "https://vk.ru/clips/zhilfond64?z=clip-228649213_456239166",
  },
];

export function VideoReviews() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Обзоры построенных домов
          </h2>
          <p className="text-muted-foreground">
            Как мы строим? Обзоры готовых домов с комментариями нашей команды
          </p>
        </div>

        <Carousel opts={{ align: "start", loop: true }} className="px-1">
          <CarouselContent>
            {videoReviews.map(({ label, vkUrl }) => {
              const embedSrc = vkUrl ? getVkEmbedSrc(vkUrl) : null;

              return (
                <CarouselItem
                  key={label}
                  className="basis-2/3 sm:basis-1/3 lg:basis-1/4"
                >
                  {embedSrc ? (
                    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-(--radius) border border-border">
                      <iframe
                        src={embedSrc}
                        title={label}
                        className="absolute inset-0 h-full w-full"
                        allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  ) : (
                    <a
                      href={site.vkClips}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative flex aspect-[9/16] w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-(--radius) border border-dashed border-border bg-muted text-muted-foreground"
                    >
                      <ImageIcon className="size-8 opacity-40" strokeWidth={1.5} />
                      <span className="px-4 text-center text-xs opacity-60">
                        {label}
                      </span>
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex size-14 items-center justify-center rounded-full bg-background/90 shadow-sm">
                          <PlayIcon className="size-5 translate-x-0.5 fill-foreground text-foreground" />
                        </span>
                      </span>
                    </a>
                  )}
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="left-3 shadow-sm" />
          <CarouselNext className="right-3 shadow-sm" />
        </Carousel>

        <a
          href={site.vkClips}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium hover:underline"
        >
          Смотреть все клипы во ВКонтакте
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </section>
  );
}
