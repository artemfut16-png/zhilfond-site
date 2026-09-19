window.STATE =
{
  "slug": "zhilfond-home-redesign",
  "dir": "2026-09-19-zhilfond-home-redesign--wip",
  "title": "Редизайн главной страницы Жилищного Фонда",
  "mode": "semi",
  "depth": "normal",
  "polish": null,
  "tier": "T2",
  "briefFile": "2026-09-19-brief.md",
  "memoryFile": "CLAUDE.md",
  "skillDir": "C:/Users/artem/Documents/Проекты Claude/Сайт и каталог (Жилищный Фонд)/.agents/skills/autopilot",
  "startedAt": "2026-09-19T16:41:32+03:00",
  "updatedAt": "2026-09-19T17:01:31+03:00",
  "finishedAt": null,
  "stages": [
    { "id": "preflight", "status": "done", "startedAt": "2026-09-19T16:41:32+03:00", "finishedAt": "2026-09-19T16:42:25+03:00" },
    { "id": "manifest",  "status": "done", "startedAt": "2026-09-19T16:42:25+03:00", "finishedAt": "2026-09-19T16:42:25+03:00" },
    { "id": "briefing",  "status": "skipped", "note": "вопросов не потребовалось" },
    { "id": "spec",      "status": "done", "startedAt": "2026-09-19T16:42:25+03:00", "finishedAt": "2026-09-19T16:47:37+03:00" },
    { "id": "plan",      "status": "done", "startedAt": "2026-09-19T16:47:37+03:00", "finishedAt": "2026-09-19T16:47:37+03:00", "note": "5 тасков, ярус T2, 2 волны" },
    { "id": "build",     "status": "active", "startedAt": "2026-09-19T16:47:37+03:00" },
    { "id": "review",    "status": "pending" },
    { "id": "final",     "status": "pending" }
  ],
  "requirements": { "total": 22, "done": 0, "inTicket": 22, "inSpec": 0, "placeholder": 0, "deferred": 0, "dropped": 0 },
  "tickets": [
    {
      "id": "01",
      "title": "Фундамент: токены, шрифты, кнопки, движение",
      "requirements": [
        "R01",
        "R02",
        "R03",
        "R05",
        "R05.1",
        "R05.2",
        "R06",
        "R15",
        "R15.1",
        "R18",
        "R22"
      ],
      "blockedBy": [],
      "wave": 1,
      "zone": [
        "src/app/globals.css",
        "src/app/layout.tsx",
        "src/components/ui/",
        "src/components/motion/"
      ],
      "status": "done",
      "finishedAt": "2026-09-19T16:57:53+03:00",
      "commit": "7c60921",
      "startedAt": "2026-09-19T16:47:47+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "02",
      "title": "Hero: два варианта, фото, шапка, переключатель",
      "requirements": [
        "R07",
        "R08",
        "R09",
        "R10",
        "R11",
        "R12",
        "R14",
        "R17",
        "R18",
        "R19",
        "R21",
        "R21.1",
        "R21.2"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "src/components/sections/hero*.tsx",
        "src/components/site-header.tsx",
        "public/hero*.webp"
      ],
      "status": "in-progress",
      "startedAt": "2026-09-19T16:57:53+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "03",
      "title": "Проекты, видеоотзывы, преимущества",
      "requirements": [
        "R13",
        "R15",
        "R16",
        "R17",
        "R18",
        "R19",
        "R20"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "projects.tsx",
        "video-reviews.tsx",
        "advantages.tsx"
      ],
      "status": "review",
      "startedAt": "2026-09-19T16:57:53+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "04",
      "title": "Калькулятор, этапы, галерея",
      "requirements": [
        "R04",
        "R13",
        "R15",
        "R16",
        "R17",
        "R18",
        "R19",
        "R20"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "calculator.tsx",
        "stages.tsx",
        "gallery.tsx"
      ],
      "status": "review",
      "startedAt": "2026-09-19T16:57:53+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    },
    {
      "id": "05",
      "title": "Экскурсия, ипотека, FAQ, контакты, футер",
      "requirements": [
        "R04",
        "R13",
        "R15",
        "R16",
        "R17",
        "R18",
        "R19",
        "R20"
      ],
      "blockedBy": [
        "01"
      ],
      "wave": 2,
      "zone": [
        "excursion.tsx",
        "mortgage.tsx",
        "faq.tsx",
        "contacts.tsx",
        "site-footer.tsx"
      ],
      "status": "in-progress",
      "startedAt": "2026-09-19T17:01:31+03:00",
      "retries": 0,
      "repairs": 0,
      "handoffs": 0
    }
  ],
  "singlePass": null,
  "tests": null,
  "debt": { "placeholders": [], "assumptions": [], "emptyEnv": [] },
  "additions": [],
  "coverage": {"findings": 0, "note": "расхождений нет; из «лишнего» убран тёмный блок Этапы"},
  "concerns": ["globals.css .dark: остатки теней и жёстких цветов (тёмная тема не используется)","button.tsx: focus-ring ring-3 красный полупрозрачный — проверить контраст на onPhoto; secondary стал прозрачным — проверить существующие использования","button.tsx: тач-цели xs/sm <44px","layout.tsx: Inter Tight только 400/500"],
  "reviewers": { "manifestSpec": "a67f8fe9a72a3a30e", "craft": "a43431af95c1aafa3" },
  "blind": null
}
