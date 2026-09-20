import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { Reveal } from "@/components/motion";
import { faq, site } from "@/lib/site-data";

export function Faq() {
  return (
    <section className="bg-paper text-ink">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:py-28">
        <Reveal className="flex flex-col gap-8 lg:sticky lg:top-28 lg:self-start">
          <h2 className="font-heading text-[30px] font-normal leading-none tracking-[-0.04em] text-ink-2 text-balance sm:text-5xl">
            Часто{" "}
            <span>задаваемые вопросы</span>
          </h2>

          <div className="flex flex-col gap-4 rounded-(--radius) border border-line bg-paper p-6">
            <p className="font-medium">Остались вопросы?</p>
            <p className="text-sm text-muted-foreground">
              Напишите нам в мессенджер — ответим в течение 1 минуты
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" asChild>
                <a href={site.managerTelegram} target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                  <TelegramIcon /> Telegram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={site.managerMax} target="_blank" rel="noopener noreferrer" aria-label="MAX">
                  <MaxIcon /> MAX
                </a>
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Accordion type="single" collapsible>
            {faq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
