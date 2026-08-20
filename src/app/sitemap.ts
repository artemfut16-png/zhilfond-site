import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-data";
import { catalogHouses, housesForSale, landPlots } from "@/lib/catalog-data";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${siteUrl}/catalog/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteUrl}/privacy/`, changeFrequency: "yearly", priority: 0.2 },
  ];

  const projectPages: MetadataRoute.Sitemap = catalogHouses.map((house) => ({
    url: `${siteUrl}/catalog/${house.id}/`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const forSalePages: MetadataRoute.Sitemap = housesForSale.map((house) => ({
    url: `${siteUrl}/catalog/for-sale/${house.id}/`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  const plotPages: MetadataRoute.Sitemap = landPlots.map((plot) => ({
    url: `${siteUrl}/catalog/plots/${plot.id}/`,
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...projectPages, ...forSalePages, ...plotPages];
}
