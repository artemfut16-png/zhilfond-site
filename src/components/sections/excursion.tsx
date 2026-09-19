"use client";

import * as React from "react";
import Image from "next/image";
import { CheckCircle2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LeadDialog } from "@/components/lead-dialog";
import { Reveal } from "@/components/motion";
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
    <section className="bg-surface text-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-16">
          <Reveal className="group relative aspect-[4/3] w-full overflow-hidden rounded-(--radius) lg:aspect-[5/6]">
            <Image
              src={assetPath("/excursion.webp")}
              alt="Экскурсия по строящемуся объекту"
              fill
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]"
            />
          </Reveal>

          <Reveal delay={100} className="flex flex-col gap-6">
            <h2 className="font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 text-balance sm:text-5xl">
              Предлагаем вам записаться{" "}
              <span className="text-muted-2">на бесплатную экскурсию</span>{" "}
              по строящимся объектам
            </h2>
            <p className="text-ink-2">
              На экскурсии вы сможете пообщаться с прорабом и строителями, а
              также:
            </p>

            <ul className="flex flex-col gap-3">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-accent-ink" />
                  <span className="text-sm font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-2 flex flex-col gap-4 border-t border-line pt-6">
              <p className="font-medium text-balance">
                Укажите когда вам удобно посетить экскурсию и укажите номер
                телефона для связи
              </p>

              {submitted ? (
                <div className="flex items-center gap-2 bg-paper px-5 py-3 text-sm">
                  <CheckCircle2Icon className="size-5 shrink-0 text-accent-ink" />
                  Заявка отправлена, скоро мы с вами свяжемся
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-4 sm:flex-row sm:items-end"
                >
                  <div className="flex flex-1 flex-col gap-1.5">
                    <Label htmlFor="excursion-phone" className="text-xs font-medium text-muted-2">
                      Телефон
                    </Label>
                    <Input
                      id="excursion-phone"
                      type="tel"
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="h-12 rounded-none border-0 border-b border-ink-2/40 bg-transparent px-0 text-base shadow-none focus-visible:border-ink-2 focus-visible:ring-0 dark:bg-transparent"
                    />
                  </div>
                  <Button type="submit" size="lg" className="shrink-0">
                    Записаться
                  </Button>
                </form>
              )}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-20 flex flex-col gap-2 lg:mt-28">
          <h3 className="font-heading text-[26px] font-normal leading-tight tracking-[-0.04em] text-ink-2 sm:text-[32px]">
            На экскурсии все включено
          </h3>
          <p className="text-muted-foreground">
            Мы сделали все, чтобы вам было комфортно
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal
              key={step}
              delay={i * 80}
              className="flex flex-col gap-4 rounded-(--radius) border border-line bg-paper p-6"
            >
              <span className="font-heading text-3xl font-normal tracking-[-0.04em] text-muted-2">
                0{i + 1}
              </span>
              <p className="font-medium text-balance">{step}</p>
            </Reveal>
          ))}

          <Reveal
            delay={240}
            className="flex flex-col justify-between gap-4 rounded-(--radius) border border-line bg-paper p-6"
          >
            <span className="font-heading text-3xl font-normal tracking-[-0.04em] text-muted-2">
              04
            </span>
            <p className="font-medium">Оставьте заявку на экскурсию</p>
            <div className="flex flex-col gap-2">
              <LeadDialog
                title="Записаться на экскурсию"
                description="Оставьте телефон — подберем удобное время для показа объекта"
                trigger={<Button className="w-full">Оставить заявку</Button>}
              />
              <p className="text-xs text-muted-foreground">
                Или звоните нам по телефону{" "}
                <a
                  href={site.phoneHref}
                  className="font-medium text-accent-ink underline underline-offset-2"
                >
                  {site.phone}
                </a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
