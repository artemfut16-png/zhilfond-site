import type { NextConfig } from "next";

// Сайт живёт на собственном домене (zhil-fond64.ru), в корне —
// basePath не нужен. Для деплоя в подпапку GitHub Pages его пришлось бы вернуть.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
