"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TelegramIcon, MaxIcon } from "@/components/icons";
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
    <section id="calculator" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight">
            Рассчитайте стоимость дома
          </h2>
          <p className="text-muted-foreground">
            Ответьте на несколько вопросов — пришлем предварительный расчет
          </p>
        </div>

        <div>
          <Card className="p-6 sm:p-8">
            {!done ? (
              <div className="flex flex-col gap-6">
                <div className="flex gap-1.5">
                  {Array.from({ length: totalSteps }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "h-1.5 flex-1 rounded-full bg-border",
                        i < step && "bg-primary"
                      )}
                    />
                  ))}
                </div>

                {calculatorSteps.map((s, i) => {
                  const stepIndex = i + 1;
                  if (step !== stepIndex) return null;
                  return (
                    <div key={s.question} className="flex flex-col gap-4">
                      <p className="text-lg font-medium">{s.question}</p>
                      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {s.options.map((option) => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => selectAnswer(i, option)}
                            className={cn(
                              "rounded-(--radius) border border-border p-4 text-left text-sm font-medium transition-colors hover:bg-accent",
                              answers[i] === option &&
                                "border-primary bg-accent"
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
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <p className="text-lg font-medium">
                        Спасибо! По вашим параметрам уже есть подходящие
                        проекты
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
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
                            "flex flex-1 items-center justify-center gap-2 rounded-(--radius) border border-border p-3 text-sm font-medium transition-colors hover:bg-accent",
                            channel === c.id && "border-primary bg-accent"
                          )}
                        >
                          <c.icon className="size-5" />
                          {c.label}
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <Label htmlFor="calc-phone">Телефон</Label>
                      <Input
                        id="calc-phone"
                        type="tel"
                        required
                        placeholder="+7 (___) ___-__-__"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="max-w-72"
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
              <div className="flex flex-col items-center gap-3 py-10 text-center">
                <CheckCircle2 className="size-10 text-primary" />
                <p className="text-lg font-medium">
                  Заявка отправлена, скоро мы с вами свяжемся
                </p>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
}
