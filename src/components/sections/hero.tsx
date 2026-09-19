"use client";

import { useRef } from "react";
import Image from "next/image";
import { CheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroFeatures } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";
import { useScrollProgress, usePrefersReducedMotion } from "@/components/motion";

/**
 * Hero «Обложка».
 * Десктоп (от 1024px): фото на весь экран, дом справа. H1 в 3 строки (до 4 на узких), колонка текста 58vw;
 * дом (масштаб 1.04, при прокрутке от 1.08 к 1.0 от базового) стоит ниже и правее текста. Левый край текста = левый край контейнера шапки (max-w 1280).
 * Пункты внизу в три колонки.
 * Мобильный и планшет: фото 4:3 сверху под прозрачной шапкой (дом целиком), ниже текст на тёмном.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref);
  const reduced = usePrefersReducedMotion();
  const p = reduced ? 0 : Math.min(1, progress * 1.5);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate flex min-h-[max(100svh,640px)] flex-col overflow-hidden bg-ink-2 pt-[72px] lg:pt-0"
    >
      {/* Фото: на десктопе на весь экран, дом справа, слева тёмный лес */}
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden lg:absolute lg:inset-0 lg:z-0 lg:aspect-auto lg:h-full">
        <div
          className="absolute inset-0 origin-bottom-right [--hs:1] lg:[--hs:1.04]"
          style={{
            // --hs — базовый масштаб кадра (десктоп 1.04); при прокрутке 1.08 → 1.0 от него; без анимации ровно базовый
            transform: `scale(calc(var(--hs) * ${reduced ? 1 : 1.08 - 0.08 * p}))`,
            willChange: reduced ? undefined : "transform",
          }}
        >
          <Image
            src={assetPath("/hero.webp")}
            alt="Готовый дом от СК Жилищный Фонд"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[100%_0%]"
          />
        </div>
        {/* Мобильный: стыки с тёмным фоном сверху и снизу */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#28282C,rgb(40_40_44/0)_14%,rgb(40_40_44/0)_82%,#28282C)] lg:hidden" />
      </div>

      {/* Десктоп: затемнение сверху и слева (там текст) и снизу (пункты); дом не закрыт «плитой» */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgb(0_0_0/.72),rgb(0_0_0/.18)_30%,rgb(0_0_0/0)_45%),linear-gradient(90deg,rgb(0_0_0/.71),rgb(0_0_0/0)_45%),linear-gradient(0deg,rgb(10_12_10/.85),rgb(10_12_10/.4)_20%,rgb(10_12_10/0)_42%)] max-lg:hidden" />

      {/* Текст */}
      <div className="relative z-10 lg:absolute lg:inset-0">
        <div className="mx-auto w-full max-w-[1280px] px-4 pt-8 pb-12 sm:px-6 lg:h-full lg:px-6 lg:pt-[104px] lg:pb-10">
          <div
            className="grid grid-cols-1 gap-6 lg:h-full lg:grid-rows-[auto_1fr_auto] lg:gap-y-8"
            style={
              reduced
                ? undefined
                : {
                    transform: `translateY(${-p * 96}px)`,
                    opacity: 1 - p * 1.1,
                    willChange: "transform, opacity",
                  }
            }
          >
            <div
              className="flex flex-col gap-6 lg:row-start-1 lg:max-w-[58vw] lg:gap-8 lg:[translate:0.4vw_calc(max(100svh,640px)*0.122)]"
            >
              <h1 className="font-heading text-[40px] leading-none font-normal tracking-[-0.04em] text-balance text-white sm:text-[44px] lg:text-[clamp(44px,4.4vw,63px)]">
                Строительство домов с гарантией 5 лет от 4 млн руб в Саратовской
                области
              </h1>

              <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:gap-8">
                <Button
                  variant="onPhoto"
                  size="lg"
                  className="w-full sm:w-auto"
                  asChild
                >
                  <a href="#calculator">Рассчитать стоимость</a>
                </Button>
                <a
                  href="#projects"
                  className="inline-flex h-11 items-center justify-center text-[15px] font-medium text-white underline-offset-4 hover:underline sm:justify-start"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>

            <ul
              className="flex flex-col gap-3 text-white lg:row-start-3 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:border-t lg:border-white/30 lg:pt-5 lg:[translate:0_calc(max(100svh,640px)*-0.035)]"
            >
              {heroFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <CheckIcon
                    className="mt-1 size-5 shrink-0 text-white"
                    strokeWidth={1.5}
                    aria-hidden
                  />
                  <p className="text-base leading-snug lg:text-[18px]">{feature.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
