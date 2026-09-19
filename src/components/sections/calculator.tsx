"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { cn } from "@/lib/utils";
import { calculatorSteps } from "@/lib/site-data";

const channels = [
  { id: "telegram", label: "Telegram", icon: TelegramIcon },
  { id: "max", label: "MAX", icon: MaxIcon },
] as const;

const totalSteps = calculatorSteps.length + 1;
const contactStep = totalSteps;

export function Calculator() {
  const [step, setStep] = React.useState(1);
  const [answers, setAnswers] = React.useState<(string | null)[]>(
    Array(calculatorSteps.length).fill(null)
  );
  const [channel, setChannel] = React.useState<(typeof channels)[number]["id"]>(
    "telegram"
  );
  const [phone, setPhone] = React.useState("");
  const [done, setDone] = React.useState(false);

  function selectAnswer(index: number, value: string) {
    setAnswers((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }

  function canProceed() {
    if (step > calculatorSteps.length) return true;
    return Boolean(answers[step - 1]);
  }

  function handleNext() {
    if (step < totalSteps) setStep((s) => s + 1);
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
  }

  return (
    <section id="calculator" className="bg-paper">
      <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-6">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4 lg:sticky lg:top-28">
              <h2 className="font-heading text-[30px] leading-none font-normal tracking-[-0.04em] text-ink-2 text-balance sm:text-[44px] lg:text-[50px]">
                Рассчитайте стоимость дома
              </h2>
              <p className="max-w-sm text-base text-muted-foreground">
                Ответьте на несколько вопросов — пришлем предварительный расчет
              </p>
            </div>
          </Reveal>

          <Reveal delay={60} className="lg:col-span-7">
            {!done ? (
              <div className="flex flex-col gap-8">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-0.5 flex-1 bg-line",
                        i < step && "bg-ink-2"
                      )}
                    />
                  ))}
                </div>

                {calculatorSteps.map((s, i) => {
                  const stepIndex = i + 1;
                  if (step !== stepIndex) return null;
                  return (
                    <div key={s.question} className="flex flex-col gap-5">
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-ink-2">
                        {s.question}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {s.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectAnswer(i, option)}
                            className={cn(
                              "min-h-11 rounded-(--radius) border border-line p-4 text-left text-sm font-medium transition-colors hover:bg-surface",
                              answers[i] === option &&
                                "border-ink-2 bg-surface"
                            )}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  );
                })}

                {step === contactStep && (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div>
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-ink-2">
                        Спасибо! По вашим параметрам уже есть подходящие
                        проекты
                      </p>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Напишите номер телефона, наш менеджер свяжется с вами,
                        а также отправит PDF-файл с проектами в Telegram или
                        MAX
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {channels.map((c) => (
                        <button
                          key={c.id}
                          type="button"
                          onClick={() => setChannel(c.id)}
                          aria-pressed={channel === c.id}
                          className={cn(
                            "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-(--radius) border border-line p-3 text-sm font-medium transition-colors hover:bg-surface",
                            channel === c.id && "border-ink-2 bg-surface"
                          )}
                        >
                          <c.icon className="size-5" />
                          {c.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label
                        htmlFor="calc-phone"
                        className="text-xs font-medium tracking-[0.02em] text-muted-2"
                      >
                        Телефон
                      </Label>
                      <Input
                        id="calc-phone"
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="max-w-72 rounded-none border-0 border-b border-line bg-transparent px-0 shadow-none focus-visible:border-ink-2 focus-visible:ring-0"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-fit">
                      Рассчитать стоимость
                    </Button>
                  </form>
                )}

                {step < contactStep && (
                  <div className="flex justify-between">
                    <Button
                      variant="ghost"
                      onClick={handleBack}
                      disabled={step === 1}
                    >
                      Назад
                    </Button>
                    <Button onClick={handleNext} disabled={!canProceed()}>
                      Далее
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-start gap-3 py-10">
                <CheckCircle2 className="size-10 text-primary" />
                <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-ink-2">
                  Заявка отправлена, скоро мы с вами свяжемся
                </p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
