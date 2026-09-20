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
        <div className="grid gap-10 rounded-(--radius) bg-secondary p-6 text-secondary-foreground sm:p-12 lg:grid-cols-12 lg:gap-6 lg:p-16">
          <Reveal className="lg:col-span-5">
            <div className="flex flex-col gap-4 lg:sticky lg:top-28">
              <h2 className="font-heading text-[30px] leading-none font-normal tracking-[-0.04em] text-white text-balance sm:text-[44px] lg:text-[50px]">
                Рассчитайте стоимость дома
              </h2>
              <p className="max-w-sm text-base text-white/70">
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
                        "h-0.5 flex-1 bg-white/20",
                        i < step && "bg-white"
                      )}
                    />
                  ))}
                </div>

                {calculatorSteps.map((s, i) => {
                  const stepIndex = i + 1;
                  if (step !== stepIndex) return null;
                  return (
                    <div key={s.question} className="flex flex-col gap-5">
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-white">
                        {s.question}
                      </p>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {s.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectAnswer(i, option)}
                            className={cn(
                              "min-h-11 rounded-(--radius) border border-white/25 bg-white/5 p-4 text-left text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/10",
                              answers[i] === option &&
                                "border-white bg-white text-secondary hover:bg-white"
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
                      <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-white">
                        Спасибо! По вашим параметрам уже есть подходящие
                        проекты
                      </p>
                      <p className="mt-2 text-sm text-white/70">
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
                            "flex min-h-11 flex-1 items-center justify-center gap-2 rounded-(--radius) border border-white/30 bg-white/5 p-3 text-sm font-medium text-white transition-colors hover:border-white/60 hover:bg-white/15",
                            channel === c.id &&
                              "border-white bg-white text-secondary hover:bg-white"
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
                        className="text-xs font-medium tracking-[0.02em] text-white/70"
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
                        className="h-12 max-w-72 rounded-(--radius) border-none bg-white px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/50"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-fit bg-white text-foreground hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                    >
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
                      className="text-white/70 hover:bg-white/10 hover:text-white disabled:text-white/30"
                    >
                      Назад
                    </Button>
                    <Button
                      onClick={handleNext}
                      disabled={!canProceed()}
                      className="bg-white text-foreground hover:bg-neutral-100 disabled:bg-white/20 disabled:text-white/60 disabled:opacity-100"
                    >
                      Далее
                    </Button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col items-start gap-3 py-10">
                <CheckCircle2 className="size-10 text-white" />
                <p className="font-heading text-2xl leading-tight font-medium tracking-[-0.02em] text-white">
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
