import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { stages } from "@/lib/site-data";

export function Stages() {
  return (
    <section id="stages" className="bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-32">
        <Reveal className="mb-12 lg:mb-20">
          <h2 className="max-w-3xl font-heading text-[30px] leading-none font-normal tracking-[-0.04em] text-ink-2 text-balance sm:text-[44px] lg:text-[50px]">
            Гарантируем безупречное качество выполнения всех этапов работ
          </h2>
        </Reveal>

        <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            return (
              <li key={stage.title}>
                <Reveal delay={Math.min(i, 4) * 60}>
                  <div className="relative border-t border-ink-2/20 pt-6">
                    <span
                      aria-hidden
                      className={cn(
                        "absolute -top-[5px] left-0 size-[9px] rounded-full",
                        isLast ? "bg-primary" : "bg-ink-2"
                      )}
                    />
                    <p
                      className={cn(
                        "font-heading text-6xl leading-none font-normal tracking-[-0.04em] lg:text-7xl",
                        isLast ? "text-accent-ink" : "text-muted-2"
                      )}
                    >
                      0{i + 1}.
                    </p>

                    <div className="mt-6 flex flex-col gap-2">
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-ink-2">
                        {stage.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
