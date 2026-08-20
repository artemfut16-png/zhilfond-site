import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/site-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "СК Жилищный Фонд — строительство домов под ключ";
const description =
  "СК Жилищный Фонд — строительная компания в Саратовской области. Строим готовые и индивидуальные дома под ключ с гарантией 5 лет: фундамент, стены, кровля, коммуникации, отделка";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: site.name,
    locale: "ru_RU",
    type: "website",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: title }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og-image.jpg"],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  legalName: site.legalName,
  taxID: site.inn,
  url: siteUrl,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressCountry: "RU",
  },
  areaServed: "Саратовская область",
  foundingDate: String(site.foundedYear),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
