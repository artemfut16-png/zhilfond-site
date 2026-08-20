import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "lucide-react";
import { YandexMap } from "@/components/yandex-map";
import { site } from "@/lib/site-data";

export function Contacts() {
  return (
    <section id="contacts">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <div className="mb-10">
          <h2 className="text-3xl font-semibold tracking-tight">
            Контактная информация
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-(--radius) border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius) bg-muted">
                <PhoneIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Телефон</p>
                <a
                  href={site.phoneHref}
                  className="font-medium hover:underline"
                >
                  {site.phone}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius) bg-muted">
                <MailIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">E-mail</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium hover:underline"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 rounded-(--radius) border border-border bg-card p-6">
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius) bg-muted">
                <MapPinIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Адрес</p>
                <p className="font-medium">{site.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-(--radius) bg-muted">
                <ClockIcon className="size-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Часы работы</p>
                <p className="font-medium">{site.hours}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <YandexMap />
        </div>
      </div>
    </section>
  );
}
