"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle2Icon, ArrowUpRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { assetPath } from "@/lib/asset-path";

const channels = [
  { id: "telegram", label: "Telegram", icon: TelegramIcon },
  { id: "max", label: "MAX", icon: MaxIcon },
] as const;

export function ProjectCatalogCta() {
  const [channel, setChannel] = React.useState<(typeof channels)[number]["id"]>(
    "telegram"
  );
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="mt-10 grid overflow-hidden rounded-(--radius) bg-secondary text-secondary-foreground lg:grid-cols-2">
      <div className="relative h-full min-h-[280px] w-full lg:min-h-[420px]">
        <Image
          src={assetPath("/pdf-catalog.webp")}
          alt="PDF-каталог проектов"
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-col gap-8 p-8 sm:p-10">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Получите каталог{" "}
            <span className="text-secondary-foreground/55">
              со всеми проектами, планировками и ценами
            </span>
          </h2>
          <p className="max-w-prose text-secondary-foreground/70">
            Отправим PDF-файл в удобный для вас мессенджер в течение 1 минуты
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center gap-2 rounded-(--radius) bg-secondary-foreground/10 px-5 py-3 text-sm">
            <CheckCircle2Icon className="size-5 shrink-0" />
            Заявка отправлена, скоро мы с вами свяжемся
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {channels.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setChannel(c.id)}
                    aria-pressed={channel === c.id}
                    className={`flex flex-1 items-center justify-center gap-2 rounded-(--radius) border px-4 py-2.5 text-sm font-medium transition-colors sm:flex-none ${
                      channel === c.id
                        ? "border-secondary-foreground bg-secondary-foreground text-secondary"
                        : "border-secondary-foreground/30 bg-secondary-foreground/5 text-secondary-foreground hover:bg-secondary-foreground/15 hover:border-secondary-foreground/60"
                    }`}
                  >
                    <c.icon className="size-5" />
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Label htmlFor="project-catalog-phone" className="sr-only">
                Телефон
              </Label>
              <Input
                id="project-catalog-phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                required
                className="h-12 rounded-(--radius) border-none bg-secondary-foreground px-5 text-base text-foreground placeholder:text-muted-foreground focus-visible:ring-secondary-foreground/50 sm:w-72"
              />
              <Button
                type="submit"
                size="lg"
                className="h-12 shrink-0 rounded-(--radius) border border-secondary-foreground/30 bg-secondary-foreground/10 text-secondary-foreground hover:bg-secondary-foreground/20"
              >
                Получить каталог
              </Button>
            </div>
          </form>
        )}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-secondary-foreground/10 pt-5 text-xs text-secondary-foreground/60">
          <span>
            Нажимая на кнопку, вы соглашаетесь с{" "}
            <Link href="/privacy" className="underline underline-offset-2">
              Политикой конфиденциальности
            </Link>
          </span>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-1 underline underline-offset-2"
          >
            Смотреть все проекты на сайте
            <ArrowUpRightIcon className="size-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
