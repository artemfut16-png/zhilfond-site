"use client";

import { useEffect, useRef } from "react";

const MAP_SRC =
  "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A99ae124f2edb7d795e817f44e787754989a0017a6d64b9d1016604a751c0b5db&width=100%25&height=100%25&lang=ru_RU&scroll=true";

export function YandexMap() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.async = true;
    script.src = MAP_SRC;
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return (
    <div className="relative aspect-[21/9] w-full overflow-hidden rounded-(--radius) border border-border [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0">
      <div ref={containerRef} className="absolute inset-0" />
    </div>
  );
}
