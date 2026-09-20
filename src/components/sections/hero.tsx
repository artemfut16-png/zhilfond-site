"use client";

import { useRef, type CSSProperties } from "react";
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
 * Мобильный и планшет (<1024): вертикальное фото на весь экран (100svh), текст поверх, без scroll-анимации.
 */
// Средние цвета верхней строки мобильного фото (левая / правая половина) — небо над фото
const MOBILE_SKY = ["rgb(62,136,224)", "rgb(60,138,229)"];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const progress = useScrollProgress(ref);
  const reduced = usePrefersReducedMotion();
  const p = reduced ? 0 : Math.min(1, progress * 1.5);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink-2 lg:min-h-[max(100svh,640px)]"
    >
      {/* Мобильный: вертикальное фото на весь экран, без анимации при прокрутке */}
      <div
        className="absolute inset-0 z-0 overflow-hidden lg:hidden"
        style={{
          backgroundImage: `linear-gradient(to right, ${MOBILE_SKY[0]}, ${MOBILE_SKY[1]})`,
        }}
      >
        {/* Фото по ширине экрана целиком, прижато к низу; верх растворяется в цвет неба */}
        <div className="absolute inset-x-0 bottom-0 origin-bottom [transform:translateY(-3svh)_scale(1.05)] [mask-image:linear-gradient(to_bottom,transparent_0,#000_12%)]">
          <Image
            src={assetPath("/hero-mobile.webp")}
            alt="Готовый дом от СК Жилищный Фонд"
            width={1200}
            height={2122}
            priority
            sizes="100vw"
            className="block h-auto w-full max-w-none"
          />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(0_0_0/.8),rgb(0_0_0/0)_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgb(12_16_12/.92)_0%,rgb(12_16_12/.88)_min(55px,8%),rgb(12_16_12/.76)_min(150px,22%),rgb(12_16_12/.62)_min(268px,39%),rgb(12_16_12/.32)_min(318px,43%),rgb(12_16_12/.1)_min(360px,46%),rgb(12_16_12/0)_min(400px,49%))]" />
      </div>

      {/* Фото: на десктопе на весь экран, дом справа, слева тёмный лес */}
      <div className="absolute inset-0 z-0 overflow-hidden max-lg:hidden">
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
      </div>

      {/* Десктоп: затемнение сверху и слева (там текст) и снизу (пункты); дом не закрыт «плитой» */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(180deg,rgb(0_0_0/.72),rgb(0_0_0/.18)_30%,rgb(0_0_0/0)_45%),linear-gradient(90deg,rgb(0_0_0/.71),rgb(0_0_0/0)_45%),linear-gradient(0deg,rgb(10_12_10/.85),rgb(10_12_10/.4)_20%,rgb(10_12_10/0)_42%)] max-lg:hidden" />

      {/* Текст */}
      <div className="relative z-10 max-lg:flex max-lg:flex-1 max-lg:flex-col lg:absolute lg:inset-0">
        <div className="mx-auto w-full max-w-[1280px] px-4 pt-[88px] pb-[clamp(12px,2.6svh,24px)] sm:px-6 max-lg:flex max-lg:flex-1 max-lg:flex-col lg:h-full lg:px-6 lg:pt-[104px] lg:pb-10">
          <div
            className="flex flex-1 flex-col justify-between gap-6 lg:grid lg:h-full lg:grid-cols-1 lg:grid-rows-[auto_1fr_auto] lg:gap-y-8 lg:[transform:translateY(var(--sy))] lg:[opacity:var(--so)] lg:will-change-[transform,opacity]"
            style={
              (reduced
                ? undefined
                : { "--sy": `${-p * 96}px`, "--so": 1 - p * 1.1 }) as unknown as CSSProperties
            }
          >
            <div
              className="flex flex-col gap-6 lg:row-start-1 lg:max-w-[58vw] lg:gap-8 lg:[translate:0.4vw_calc(max(100svh,640px)*0.122)]"
            >
              <h1 className="font-heading max-lg:text-[length:clamp(30px,4.6svh,38px)] leading-none font-medium tracking-[-0.04em] text-balance text-white lg:font-normal lg:text-[clamp(44px,4.4vw,63px)]">
                Строительство домов с гарантией 5 лет от 4,3 млн руб в Саратовской
                области
              </h1>

              <div className="flex flex-col items-stretch gap-3 max-lg:hidden lg:flex-row lg:items-center lg:gap-4">
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
                  className="inline-flex h-12 items-center justify-center rounded-(--radius) border-[1.5px] border-white bg-white/10 px-6 text-[15px] font-medium whitespace-nowrap text-white backdrop-blur-sm transition-colors outline-none hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-[clamp(10px,2.2svh,20px)] lg:contents">
              <ul
                className="flex flex-col gap-[clamp(6px,1.4svh,12px)] text-white lg:row-start-3 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:border-t lg:border-white/30 lg:pt-5 lg:[translate:0_calc(max(100svh,640px)*-0.035)]"
              >
                {heroFeatures.map((feature) => (
                  <li key={feature.title} className="flex items-start gap-3">
                    <CheckIcon
                      className="mt-1 size-5 shrink-0 text-white"
                      strokeWidth={1.5}
                      aria-hidden
                    />
                    <p className="text-[15px] leading-snug lg:text-[18px]">{feature.title}</p>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3 lg:hidden">
                <Button variant="onPhoto" size="lg" className="w-full" asChild>
                  <a href="#calculator">Рассчитать стоимость</a>
                </Button>
                <a
                  href="#projects"
                  className="inline-flex h-12 w-full items-center justify-center rounded-(--radius) border-[1.5px] border-white bg-white/10 text-[15px] font-medium text-white backdrop-blur-sm transition-colors outline-none hover:bg-white/20 focus-visible:ring-3 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
                >
                  Смотреть проекты
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
