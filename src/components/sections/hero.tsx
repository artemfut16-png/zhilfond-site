import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroFeatures } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-background">
      <div className="relative lg:min-h-[720px]">
        {/*
         * Мобильный: кадр сверху, фон поднимается снизу и принимает текст.
         * Десктоп: кадр уходит на подложку, фон растворяется слева направо.
         */}
        <div className="relative aspect-[16/11] w-full sm:aspect-[2/1] lg:absolute lg:inset-0 lg:aspect-auto lg:h-full">
          <Image
            src={assetPath("/hero.webp")}
            alt="Готовый дом от СК Жилищный Фонд"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[75%_center] sm:object-[70%_center] lg:object-[50%_center]"
          />
          <div className="hero-fade-y absolute inset-0 lg:hidden" />
          <div className="hero-fade-x absolute inset-0 hidden lg:block" />
        </div>

        <div className="relative mx-auto -mt-12 flex max-w-6xl flex-col px-4 pb-12 sm:-mt-20 sm:px-6 sm:pb-16 lg:mt-0 lg:min-h-[720px] lg:justify-center lg:py-24">
          <div className="flex flex-col gap-6 sm:gap-8 lg:max-w-lg">
            <h1 className="font-heading text-3xl font-bold tracking-[-0.02em] text-balance sm:text-4xl lg:text-5xl lg:leading-[1.05]">
              Строительство домов с гарантией 5 лет от 4 млн руб в Саратовской
              области
            </h1>

            <ul className="flex flex-col gap-3">
              {heroFeatures.map((feature) => (
                <li key={feature.title} className="flex items-start gap-3">
                  <CheckCircle2Icon
                    className="mt-0.5 size-5 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <p className="font-medium">{feature.title}</p>
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-1 gap-3 sm:inline-grid sm:w-auto sm:grid-cols-2">
              <Button size="lg" className="h-14 w-full px-6 text-base" asChild>
                <a href="#calculator">Рассчитать стоимость</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 w-full bg-background/80 px-6 text-base backdrop-blur-sm"
                asChild
              >
                <a href="#projects">Смотреть проекты</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
