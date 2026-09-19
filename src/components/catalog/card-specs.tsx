import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Единая толщина обводки для всех контентных иконок карточек.
 */
export const SPEC_STROKE = 1.75;

export type CardSpec = {
  icon: LucideIcon;
  /** Расшифровка для скринридера: «Площадь: 131,8 м²» */
  label: string;
  value: string;
};

/**
 * Строка характеристик под фото карточки: иконка + короткое значение.
 * Показываем только то, что реально есть в данных — пустые спеки отсеиваются.
 */
export function SpecRow({
  specs,
  className,
}: {
  specs: CardSpec[];
  className?: string;
}) {
  if (specs.length === 0) return null;

  return (
    <ul
      className={cn(
        "flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground",
        className
      )}
    >
      {specs.map((spec) => (
        <li key={spec.label} className="flex items-center gap-1.5">
          <spec.icon
            className="size-4 shrink-0 text-foreground/45"
            strokeWidth={SPEC_STROKE}
            aria-hidden
          />
          <span className="tnum">
            <span className="sr-only">{spec.label}: </span>
            {spec.value}
          </span>
        </li>
      ))}
    </ul>
  );
}
