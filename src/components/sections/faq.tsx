import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TelegramIcon, MaxIcon } from "@/components/icons";
import { faq, site } from "@/lib/site-data";

export function Faq() {
  return (
    <section>
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[1fr_320px]">
        <div>
          <h2 className="mb-6 text-3xl font-semibold tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible>
            {faq.map((item) => (
              <AccordionItem key={item.question} value={item.question}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="flex flex-col gap-4 rounded-(--radius) border border-border bg-card p-6">
          <p className="font-medium">Остались вопросы?</p>
          <p className="text-sm text-muted-foreground">
            Напишите нам в мессенджер — ответим в течение 1 минуты
          </p>
          <div className="flex gap-3">
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
      </div>
    </section>
  );
}
