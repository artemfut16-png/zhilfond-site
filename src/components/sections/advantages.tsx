import { cn } from "@/lib/utils";
import { advantages } from "@/lib/site-data";

export function Advantages() {
  return (
    <section id="advantages">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ответственный подход к строительству
          </h2>
          <p className="text-muted-foreground">
            Строим так, будто строим для себя — с контролем на каждом этапе
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {advantages.map((advantage, i) => {
            const isLast = i === advantages.length - 1;
            return (
              <div
                key={advantage.title}
                className={cn(
                  "flex flex-col gap-6 rounded-(--radius) border p-6",
                  isLast
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                )}
              >
                <p
                  className={cn(
                    "text-3xl font-semibold",
                    isLast ? "text-primary-foreground/50" : "text-muted-foreground/60"
                  )}
                >
                  0{i + 1}.
                </p>
                <div className="flex flex-col gap-1">
                  <p className="font-medium">{advantage.title}</p>
                  <p
                    className={cn(
                      "text-sm",
                      isLast ? "text-primary-foreground/70" : "text-muted-foreground"
                    )}
                  >
                    {advantage.description}
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
