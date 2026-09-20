"use client";

import * as React from "react";
import Link from "next/link";
import { CheckCircle2Icon, PhoneIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Reveal } from "@/components/motion";
import { mortgagePrograms, site } from "@/lib/site-data";

const fieldClass =
  "h-12 rounded-(--radius) border border-ink-2/40 bg-transparent px-4 text-base shadow-none focus-visible:border-ink-2 focus-visible:ring-0 dark:bg-transparent";

export function Mortgage() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="mortgage" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
        <Reveal className="mb-12 flex flex-col gap-4 lg:mb-16">
          <h2 className="max-w-4xl font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 text-balance sm:text-5xl">
            Построить дом можно в ипотеку{" "}
            <span>с господдержкой</span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Работаем с ипотекой! Поможем подобрать программу и подготовить
            документы для банка «под ключ»
          </p>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-12">
          <div className="grid gap-4 sm:grid-cols-3">
            {mortgagePrograms.map((program, i) => (
              <Reveal
                key={program.name}
                delay={i * 80}
                className={`flex flex-col gap-4 rounded-(--radius) border p-6 ${
                  program.featured
                    ? "border-ink-2 bg-ink-2 text-white"
                    : "border-line bg-surface"
                }`}
              >
                <p className="font-medium">{program.name}</p>
                <p className="font-heading text-4xl font-normal leading-none tracking-[-0.04em] sm:text-5xl">
                  {program.rate}
                </p>
                <p
                  className={`text-sm ${
                    program.featured ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {program.amount}
                </p>
                <p
                  className={`text-sm ${
                    program.featured ? "text-white/70" : "text-muted-foreground"
                  }`}
                >
                  {program.description}
                </p>
              </Reveal>
            ))}
          </div>

          <Reveal
            delay={120}
            className="rounded-(--radius) border border-line bg-surface p-6 sm:p-8"
          >
            <h3 className="font-heading text-2xl font-normal leading-tight tracking-[-0.04em] text-ink-2">
              Получить консультацию
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Рассчитаем стоимость дома, подберем ипотечную программу,
              определим первоначальный взнос и ежемесячный платеж, поможем
              подготовить документы для банка. Бесплатно!
            </p>

            {submitted ? (
              <div className="mt-6 flex items-center gap-2 bg-paper px-4 py-3 text-sm">
                <CheckCircle2Icon className="size-5 shrink-0 text-accent-ink" />
                Заявка отправлена, скоро мы с вами свяжемся
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mortgage-name" className="text-xs font-medium text-muted-2">
                    Имя
                  </Label>
                  <Input id="mortgage-name" placeholder="Имя" required className={fieldClass} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="mortgage-phone" className="text-xs font-medium text-muted-2">
                    Телефон
                  </Label>
                  <Input
                    id="mortgage-phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    required
                    className={fieldClass}
                  />
                </div>
                <Button type="submit" size="lg" className="mt-2">
                  Получить консультацию
                </Button>
                <p className="text-xs text-muted-foreground">
                  Нажимая кнопку, вы соглашаетесь на{" "}
                  <Link href="/privacy" className="underline underline-offset-2">
                    обработку персональных данных
                  </Link>
                </p>
              </form>
            )}

            <div className="mt-6 flex items-center gap-2 border-t border-line pt-6 text-sm">
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
          </Reveal>
        </div>
      </div>
    </section>
  );
}
