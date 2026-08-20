"use client";

import * as React from "react";
import { CheckCircle2Icon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { mortgagePrograms, site } from "@/lib/site-data";

export function Mortgage() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="mortgage" className="border-b border-border bg-muted/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10 flex flex-col gap-2">
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance">
            Наши дома можно купить в ипотеку с господдержкой
          </h2>
          <p className="text-muted-foreground">
            Работаем с ипотекой! Поможем подобрать программу и подготовить
            документы для банка «под ключ»
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1fr_360px]">
          <div className="grid gap-4 sm:grid-cols-3">
            {mortgagePrograms.map((program) => (
              <div
                key={program.name}
                className={`flex flex-col gap-4 rounded-(--radius) border p-6 ${
                  program.featured
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card"
                }`}
              >
                <p className="font-medium">{program.name}</p>
                <p className="text-3xl font-semibold">{program.rate}</p>
                <p
                  className={`text-sm ${
                    program.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {program.amount}
                </p>
                <p
                  className={`text-sm ${
                    program.featured
                      ? "text-primary-foreground/70"
                      : "text-muted-foreground"
                  }`}
                >
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="rounded-(--radius) border border-border bg-card p-6">
            <h3 className="text-xl font-semibold tracking-tight">
              Получить консультацию
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Рассчитаем стоимость дома, подберем ипотечную программу,
              определим первоначальный взнос и ежемесячный платеж, поможем
              подготовить документы для банка. Бесплатно!
            </p>

            {submitted ? (
              <div className="mt-6 flex items-center gap-2 rounded-(--radius) bg-muted px-4 py-3 text-sm">
                <CheckCircle2Icon className="size-5 shrink-0 text-primary" />
                Заявка отправлена, скоро мы с вами свяжемся
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mortgage-name" className="sr-only">
                    Имя
                  </Label>
                  <Input id="mortgage-name" placeholder="Имя" required />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mortgage-phone" className="sr-only">
                    Телефон
                  </Label>
                  <Input
                    id="mortgage-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="mt-1">
                  Получить консультацию
                </Button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных
                  данных
                </p>
              </form>
            )}

            <div className="mt-6 flex items-center gap-2 border-t border-border pt-6 text-sm">
              <PhoneIcon className="size-4 shrink-0 text-muted-foreground" />
              <div>
                <p className="text-muted-foreground">
                  Или позвоните нам напрямую
                </p>
                <a href={site.phoneHref} className="font-medium hover:underline">
                  {site.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
