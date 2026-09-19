# 01 — Фундамент: токены, шрифты, кнопки, движение

**Требования:** R01, R02, R03, R05, R05.1, R05.2, R06, R15, R15.1, R18, R22
**Blocked by:** —
**Зона:** `src/app/globals.css` · `src/app/layout.tsx` · `src/components/ui/` · `src/components/motion/`
**Волна:** 1
**Status:** ready

## Что должно заработать
Весь сайт получает палитру и шрифты дизайн-системы v2: Inter Tight для заголовков и Inter для текста, красный акцент #D10000 экономно, нейтрали ink/surface/paper/night, радиус карточек 8px, кнопки без скругления, теней нет. Появляется общий компонент плавного появления `Reveal` и хуки для scroll-анимации Hero, всё с учётом `prefers-reduced-motion`.

## Из брифа, дословно
> «следуй ему строго (палитра, шрифты Inter Tight + Inter, шкала, радиусы, кнопки без скругления, акцент красный #D10000, без теней)»
> «у остальных секций появление блоков fade + сдвиг 16px»
> «Учитывай prefers-reduced-motion»
> «Перед написанием кода прочитай нужные гайды в node_modules/next/dist/docs/»

## Разделы спецификации
Истории 2, 3, 5–8, 17, 18, 21; «Решения по реализации»; «Границы и швы» (Токены, Движение).

## Критерии приёмки
- [ ] Прочитаны нужные страницы `node_modules/next/dist/docs/` (шрифты, client components); список в отчёте
- [ ] `layout.tsx`: Inter Tight (400/500) и Inter (400/500/600) через `next/font/google` с `latin` + `cyrillic`; Onest убран; `font-heading` = Inter Tight
- [ ] Токены v2 (§11 дизайн-системы) в `:root`; shadcn-переменные (`--background`, `--foreground`, `--primary`, `--muted`, `--border`, `--ring`…) выровнены под v2; утилиты `bg-surface`, `bg-paper`, `bg-night`, `text-ink`, `text-ink-2`, `text-muted-2`, `text-accent-ink`, `bg-accent-soft`, `border-line` работают в Tailwind
- [ ] `--radius: 8px`; тени обнулены; `Button`: `rounded-none`, размеры и паддинги по v2 §6 (15px, 14–15 × 24); `lg` ≥ 44px по высоте; варианты default (`bg-ink-2`, hover `bg-ink`), outline, ghost, secondary, link согласованы со стилем; отдельный вариант белой кнопки на фото (например `onPhoto`)
- [ ] Старые `.hero-fade-x` и `.hero-fade-y` не удалять: их снимает только Hero-таск
- [ ] `src/components/motion/`: `Reveal` (fade + translateY 16px, 500ms, `cubic-bezier(.2,.7,.2,1)`, один раз, `delay` в мс до 300; контент виден без JS и при `prefers-reduced-motion`), `useScrollProgress`, `usePrefersReducedMotion`; `"use client"` только там, где нужно
- [ ] Без hydration-ошибок; `npm run build` и `npm run lint` проходят
