import { cn } from "@/lib/utils";
import { stages } from "@/lib/site-data";

export function Stages() {
  return (
    <section id="stages" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance">
            Гарантируем безупречное качество выполнения всех этапов работ
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((stage, i) => {
            const isLast = i === stages.length - 1;
            return (
              <div
                key={stage.title}
                className={cn(
                  "flex flex-col gap-4 rounded-(--radius) border p-5",
                  isLast
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                )}
              >
                <p
                  className={cn(
                    "text-2xl font-semibold",
                    isLast ? "text-primary-foreground/50" : "text-muted-foreground/60"
                  )}
                >
                  0{i + 1}.
                </p>

                <div className="flex flex-col gap-1">
                  <p className="font-medium">{stage.title}</p>
                  <p
                    className={cn(
                      "text-sm",
                      isLast ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}
                  >
                    {stage.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
