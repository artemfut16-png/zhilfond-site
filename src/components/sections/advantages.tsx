import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { advantages } from "@/lib/site-data";

export function Advantages() {
  return (
    <section id="advantages" className="bg-surface">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
        <Reveal className="mb-10 flex flex-col gap-3 sm:mb-14">
          <h2 className="font-heading text-[30px] leading-[1.05] font-medium tracking-[-0.04em] text-ink-2 sm:text-[44px] lg:text-[50px]">
            Ответственный подход к строительству
          </h2>
          <p className="text-base text-muted-foreground sm:text-lg">
            Строим так, будто строим для себя — с контролем на каждом этапе
          </p>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, i) => {
            const isLast = i === advantages.length - 1;
            return (
              <Reveal
                key={advantage.title}
                delay={Math.min(i, 4) * 60}
                className="h-full"
              >
                <div
                  className={cn(
                    "flex h-full flex-col gap-8 rounded-lg border p-6 sm:p-8",
                    isLast
                      ? "border-ink-2 bg-ink-2 text-white"
                      : "border-line bg-paper"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-12 items-center justify-center rounded-full font-heading text-lg font-medium tnum",
                      isLast
                        ? "bg-white/15 text-white"
                        : "bg-accent-soft text-accent-ink"
                    )}
                  >
                    0{i + 1}
                  </span>
                  <div className="flex flex-col gap-2">
                    <p className="font-heading text-xl font-medium tracking-[-0.04em]">
                      {advantage.title}
                    </p>
                    <p
                      className={cn(
                        "text-sm",
                        isLast ? "text-white/70" : "text-muted-foreground"
                      )}
                    >
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
