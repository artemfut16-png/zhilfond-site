import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { YandexMap } from "@/components/yandex-map";
import { Reveal } from "@/components/motion";
import { site } from "@/lib/site-data";

const badge =
  "flex size-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-ink";

export function Contacts() {
  return (
    <section id="contacts" className="bg-paper text-ink">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-28">
        <Reveal className="mb-12 lg:mb-16">
          <h2 className="font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 sm:text-5xl">
            Контактная{" "}
            <span className="text-muted-2">информация</span>
          </h2>
        </Reveal>

        <Reveal className="grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:gap-x-16 lg:gap-y-12">
          <div className="flex items-start gap-4">
            <div className={badge}>
              <PhoneIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Телефон</p>
              <a
                href={site.phoneHref}
                className="font-heading text-2xl font-normal tracking-[-0.03em] hover:underline sm:text-3xl"
              >
                {site.phone}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className={badge}>
              <MailIcon className="size-5" />
            </div>
            <div className="min-w-0">
              <p className="text-sm text-muted-foreground">E-mail</p>
              <a
                href={`mailto:${site.email}`}
                className="font-heading text-2xl font-normal tracking-[-0.03em] break-words hover:underline sm:text-3xl"
              >
                {site.email}
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className={badge}>
              <MapPinIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Адрес</p>
              <p className="font-heading text-xl font-normal tracking-[-0.03em] sm:text-2xl">
                {site.address}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className={badge}>
              <ClockIcon className="size-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Часы работы</p>
              <p className="font-heading text-xl font-normal tracking-[-0.03em] sm:text-2xl">
                {site.hours}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-12 overflow-hidden rounded-(--radius) lg:mt-16">
          <YandexMap />
        </Reveal>
      </div>
    </section>
  );
}
