"use client";

import * as React from "react";
import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LeadDialog } from "@/components/lead-dialog";
import { site } from "@/lib/site-data";
import { assetPath } from "@/lib/asset-path";

const checklist = [
  "Познакомитесь с технологией строительства",
  "Зададите вопросы руководителю строительства",
  "Оцените качество материалов на стройплощадке",
];

const steps = [
  "Организованный трансфер до объектов и обратно",
  "Посещение от 2 до 3 строящихся объектов",
  "Хорошее настроение и вдохновение на воплощение дома мечты в реальность",
];

export function Excursion() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="border-b border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex flex-col gap-6">
            <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
              Предлагаем вам записаться{" "}
              <span className="text-primary-foreground/55">
                на бесплатную экскурсию
              </span>{" "}
              по строящимся объектам
            </h2>
            <p className="text-primary-foreground/70">
              На экскурсии вы сможете пообщаться с прорабом и строителями, а
              также:
            </p>

            <ul className="grid gap-4 sm:grid-cols-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2Icon className="mt-0.5 size-5 shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-(--radius) border border-primary-foreground/20">
            <Image
              src={assetPath("/excursion.png")}
              alt="Экскурсия по строящемуся объекту"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 rounded-(--radius) border border-primary-foreground/15 bg-primary-foreground/5 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md font-medium text-balance">
            Укажите когда вам удобно посетить экскурсию и укажите номер
            телефона для связи
          </p>

          {submitted ? (
            <div className="flex items-center gap-2 rounded-full bg-primary-foreground/10 px-5 py-3 text-sm">
              <CheckCircle2Icon className="size-5 shrink-0" />
              Заявка отправлена, скоро мы с вами свяжемся
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Label htmlFor="excursion-phone" className="sr-only">
                Телефон
              </Label>
              <Input
                id="excursion-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                className="h-12 rounded-full border-none bg-primary-foreground px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-primary-foreground/50 sm:w-64"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 rounded-full border border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Записаться
              </Button>
            </form>
          )}
        </div>

        <div className="mt-16 flex flex-col gap-2">
          <h3 className="text-2xl font-semibold tracking-tight">
            На экскурсии все включено
          </h3>
          <p className="text-primary-foreground/70">
            Мы сделали все, чтобы вам было комфортно
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <div
              key={step}
              className="flex flex-col gap-4 rounded-(--radius) border border-primary-foreground/15 bg-primary-foreground/5 p-6"
            >
              <span className="text-2xl font-semibold text-primary-foreground/40">
                0{i + 1}
              </span>
              <p className="font-medium text-balance">{step}</p>
            </div>
          ))}

          <div className="flex flex-col justify-between gap-4 rounded-(--radius) border border-primary-foreground/15 bg-primary-foreground/5 p-6">
            <span className="text-2xl font-semibold text-primary-foreground/40">
              04
            </span>
            <p className="font-medium">Оставьте заявку на экскурсию</p>
            <div className="flex flex-col gap-2">
              <LeadDialog
                title="Записаться на экскурсию"
                description="Оставьте телефон — подберем удобное время для показа объекта"
                trigger={
                  <Button className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                    Оставить заявку
                  </Button>
                }
              />
              <p className="text-xs text-primary-foreground/60">
                Или звоните нам по телефону{" "}
                <a href={site.phoneHref} className="font-medium underline underline-offset-2">
                  {site.phone}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
