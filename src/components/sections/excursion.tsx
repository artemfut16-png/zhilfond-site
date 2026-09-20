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
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
        <div className="rounded-(--radius) bg-secondary p-6 text-white sm:p-12 lg:p-16">
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
              <h2 className="font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-white text-balance sm:text-5xl">
                Предлагаем вам записаться <span>на бесплатную экскурсию</span>{" "}
                по строящимся объектам
              </h2>
              <p className="text-white/70">
                На экскурсии вы сможете пообщаться с прорабом и строителями, а
                также:
              </p>

              <ul className="flex flex-col gap-3">
                {checklist.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2Icon className="mt-0.5 size-5 shrink-0 text-white" />
                    <span className="text-sm font-medium text-white">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-2 flex flex-col gap-4 border-t border-white/15 pt-6">
                <p className="font-medium text-white text-balance">
                  Укажите когда вам удобно посетить экскурсию и укажите номер
                  телефона для связи
                </p>

                {submitted ? (
                  <div className="flex items-center gap-2 text-sm text-white">
                    <CheckCircle2Icon className="size-5 shrink-0 text-white" />
                    Заявка отправлена, скоро мы с вами свяжемся
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-4 sm:flex-row sm:items-end"
                  >
                    <div className="flex flex-1 flex-col gap-1.5">
                      <Label
                        htmlFor="excursion-phone"
                        className="text-xs font-medium text-white/70"
                      >
                        Телефон
                      </Label>
                      <Input
                        id="excursion-phone"
                        type="tel"
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="h-12 rounded-(--radius) border-none bg-white px-4 text-base text-foreground shadow-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-white/50 dark:bg-white"
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="shrink-0 bg-white text-foreground hover:bg-neutral-100 focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-secondary"
                    >
                      Записаться
                    </Button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>

          <Reveal className="mt-20 flex flex-col gap-2 lg:mt-28">
            <h3 className="font-heading text-[26px] font-normal leading-tight tracking-[-0.04em] text-white sm:text-[32px]">
              На экскурсии все включено
            </h3>
            <p className="text-white/70">
              Мы сделали все, чтобы вам было комфортно
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <Reveal
                key={step}
                delay={i * 80}
                className="flex flex-col gap-4 rounded-(--radius) border border-white/20 bg-white/5 p-6"
              >
                <span className="font-heading text-3xl font-normal tracking-[-0.04em] text-white/50">
                  0{i + 1}
                </span>
                <p className="font-medium text-white text-balance">{step}</p>
              </Reveal>
            ))}

            <Reveal
              delay={240}
              className="flex flex-col justify-between gap-4 rounded-(--radius) border border-white/20 bg-white/5 p-6"
            >
              <span className="font-heading text-3xl font-normal tracking-[-0.04em] text-white/50">
                04
              </span>
              <p className="font-medium text-white">
                Оставьте заявку на экскурсию
              </p>
              <div className="flex flex-col gap-2">
                <LeadDialog
                  title="Записаться на экскурсию"
                  description="Оставьте телефон — подберем удобное время для показа объекта"
                  trigger={
                    <Button className="w-full bg-white text-foreground hover:bg-neutral-100">
                      Оставить заявку
                    </Button>
                  }
                />
                <p className="text-xs text-white/70">
                  Или звоните нам по телефону{" "}
                  <a
                    href={site.phoneHref}
                    className="font-medium text-white underline underline-offset-2"
                  >
                    {site.phone}
                  </a>
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
