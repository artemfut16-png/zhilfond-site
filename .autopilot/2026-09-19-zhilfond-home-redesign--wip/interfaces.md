# Интерфейсы и правила проекта

## Правила проекта
- Стек: Next.js 16.3 (App Router; **отличается от того, что знает модель** — перед кодом читать нужные страницы `node_modules/next/dist/docs/`, особенно `01-app`: шрифты, изображения, client components), React 19.2, Tailwind 4, shadcn.
- Команды: `npm run dev`, `npm run build`, `npm run lint`. Автотестов нет. Проверка = build + lint + просмотр страницы (десктоп 1440×900, мобильные 375/390, 768).
- Источник дизайна: `Референсы/Дизайн-система-v2.md` (главный). Файл `Референсы/Дизайн-система.md` не читать и не упоминать.
- Нельзя: менять `src/lib/*-data.ts`, роуты, обработчики форм, тексты, ссылки, `id` секций. Нельзя ставить новые пакеты — нужного нет → вернуть `BLOCKED`.
- Нельзя: тени, uppercase в заголовках, скругление кнопок, градиентные кнопки, эмодзи, больше одного акцентного цвета, выдуманные цифры/цены/отзывы/характеристики.
- Порядок секций в `src/app/page.tsx` не меняется.
- Чередование фона секций: Проекты surface · Видеоотзывы paper · Преимущества surface · Калькулятор paper · Этапы surface · Галерея paper · Экскурсия surface · Ипотека paper · FAQ surface · Контакты paper · футер night.
- Каждый таск владеет только своей зоной; чужие файлы не править (сообщить в отчёте).
- Рабочая ветка `redesign`. Коммитит оркестратор, а не исполнитель, если таск не сказал иначе.

## Границы, решённые в спецификации

| Модуль | Владеет | Выставляет | Прячет |
|---|---|---|---|
| Токены (`src/app/globals.css`, `src/app/layout.tsx`, `src/components/ui/button.tsx`) | цвета, шрифты, радиусы, тени, кнопки | CSS-переменные v2 (`--ink`, `--ink-2`, `--muted-2`, `--line`, `--surface`, `--paper`, `--night`, `--accent`, `--accent-ink`, `--accent-soft`), Tailwind-утилиты `bg-surface`, `bg-paper`, `bg-night`, `text-ink`, `text-ink-2`, `text-muted-2`, `bg-accent-soft`, `text-accent-ink`, `border-line`; `font-heading` = Inter Tight; `Button` без скругления | значения |
| Движение (`src/components/motion/`) | reveal, scroll-прогресс, reduced-motion | `<Reveal as? delay? className?>`, `useScrollProgress(ref) -> number (0..1)`, `usePrefersReducedMotion() -> boolean` | IntersectionObserver, rAF |
| Шапка (`site-header.tsx`) | режим «поверх фото» / «белая» | `<SiteHeader />` (пропсов нет, режим берёт из `document.documentElement.dataset.hero` — `"cover"` для варианта 1 на `/`, иначе белая) | смена по скроллу |
| Hero (`src/components/sections/hero*.tsx`) | оба варианта, переключатель, `public/hero.webp` | `<Hero />` | выбор варианта, `localStorage`, `?hero=`, установка `data-hero` на `<html>` |
| Секции | вёрстка | те же экспорты | — |

Швы: `npm run build`, `npm run lint`, ручной просмотр.

## Из таска 01 — фундамент

- `import { Reveal, useScrollProgress, usePrefersReducedMotion } from "@/components/motion"`
- `<Reveal as? delay?(мс, 0..300) className?>`: элементы, уже видимые при монтировании, не анимируются; скрыт только ниже экрана; без JS и при reduced-motion виден.
- `useScrollProgress(ref) -> 0..1` (`-rect.top/rect.height`, до гидрации 0). **Reduced motion не учитывает** — Hero сам вызывает `usePrefersReducedMotion()` и держит scale 1.0.
- Утилиты цвета `bg-/text-/border-`: `ink`, `ink-2`, `muted-2`, `line`, `surface`, `paper`, `night`, `accent-ink`, `accent-soft`, `accent-red` (#D10000). `font-heading` = Inter Tight, `font-sans` = Inter. `shadow-*` = none. `--radius` 8px; `--radius-card`, `--radius-btn`, `--radius-pill`.
- **Ловушка:** shadcn `--accent` остаётся светлым (`accent-soft`, #FBEAEA): его используют calculator.tsx и select.tsx как hover/selected-фон. Красный — это `bg-primary`/`text-primary`/`bg-accent-red`. `bg-accent` красным не будет. shadcn `--muted` = surface (фон); серый текст = `text-muted-foreground`.
- `Button`: варианты `default` (bg-ink-2, hover bg-ink), `outline`, `secondary` (прозрачная, подчёркивание на hover), `ghost`, `destructive`, `link` (accent-ink), `onPhoto` (белая, текст ink). Размеры: default h-11, lg h-12, sm h-9, xs h-7, icon 44, icon-sm 36, icon-lg 48. Везде `rounded-none`.
- `.hero-fade-x`, `.hero-fade-y` в `globals.css` пока оставлены — удаляет Hero-таск, если они станут не нужны.
- Lint: 2 ошибки уже были до правок — `src/components/back-link.tsx:16` и `src/components/ui/carousel.tsx:98`.
- **Inter Tight подключён только с весами 400 и 500**: заголовкам не ставить `font-semibold`/`font-bold` (будет синтетика). Кнопка `secondary` теперь прозрачная с подчёркиванием — не использовать как заливную; тач-цели `xs/sm/icon-xs/icon-sm` меньше 44px — не для основных действий на мобильных. Внутри `<Reveal>` не менять `delay` динамически.

## Из таска 04 — калькулятор, этапы, галерея
- Экспорты `Calculator`, `Stages`, `Gallery` без изменений (без пропсов), `id` прежние. Галерея: мозаика из фото 1–5 + карусель 6–48.

## Из таска 03 — проекты, видеоотзывы, преимущества
- Экспорты `Projects`, `VideoReviews`, `Advantages` без изменений. Карточки проектов — свой `<article>`; `SpecRow` из `catalog/card-specs.tsx` используется как есть.

## Из таска 05 — экскурсия, ипотека, FAQ, контакты, футер
- Экспорты `Excursion`, `Mortgage`, `Faq`, `Contacts`, `SiteFooter` без изменений. Футер `bg-night`. Заголовки Ипотеки/FAQ/Контактов разбиты на два `<span>` для двухуровневого цвета (текст тот же).
