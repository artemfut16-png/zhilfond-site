import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroFeatures } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

export function Hero() {
  return (
    <section id="hero">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-2 lg:items-center lg:py-20">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
              Строительство домов с гарантией 5 лет от 4 млн руб в Саратовской
              области
            </h1>
            <div className="grid grid-cols-2 gap-3 sm:inline-grid sm:w-auto">
              <Button size="lg" className="h-14 w-full px-6 text-base" asChild>
                <a href="#calculator">Рассчитать стоимость</a>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="h-14 w-full px-6 text-base"
                asChild
              >
                <a href="#projects">Смотреть проекты</a>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {heroFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="font-medium">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-(--radius) border border-border">
          <Image
            src={assetPath("/hero.webp")}
            alt="Готовый дом от СК Жилищный Фонд"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
