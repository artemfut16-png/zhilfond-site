import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { VideoReviews } from "@/components/sections/video-reviews";
import { Advantages } from "@/components/sections/advantages";
import { Calculator } from "@/components/sections/calculator";
import { Stages } from "@/components/sections/stages";
import { Gallery } from "@/components/sections/gallery";
import { Excursion } from "@/components/sections/excursion";
import { Mortgage } from "@/components/sections/mortgage";
import { Faq } from "@/components/sections/faq";
import { Contacts } from "@/components/sections/contacts";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Projects />
        <VideoReviews />
        <Advantages />
        <Calculator />
        <Stages />
        <Gallery />
        <Excursion />
        <Mortgage />
        <Faq />
        <Contacts />
      </main>
      <SiteFooter />
    </>
  );
}
