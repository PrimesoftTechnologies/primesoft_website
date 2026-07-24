"use client";
import { LocationIcon } from "@/components/icons";
import Background from "@/components/background";
import HeroContainer from "@/components/hero/hero-container";
import Notify from "@/components/notify";
import HeroHeader from "@/components/hero/hero-header";
import HeroDescription from "@/components/hero/hero-description";
import HeroButtons from "@/components/hero/hero-buttons";
import HeroFooter from "@/components/hero/hero-footer";
import HeroCards from "@/components/hero/hero-cards";
import Image from "next/image";
import HeroVideo from "./hero-video";

const Hero = () => {
  return (
    <Background>
      <div className="relative overflow-hidden pb-24">
        <section className="mt-32 grid justify-center gap-4">
          <Notify className="w-fit border-primary-900 bg-primary-500/20 max-sm:hidden">
            <LocationIcon className="text-primary-500 size-5" />
            <div className="text-sm">
              Survey Plaza, 1st Floor, Sam Nujoma Rd 35091 Mwenge, Dar es Salaam
            </div>
          </Notify>
        </section>
        <HeroContainer>
          <HeroHeader />
          <HeroDescription />
          <HeroButtons />
          <HeroFooter />
          <HeroVideo />
          <HeroCards />
        </HeroContainer>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-0">
          <Image
            src="/images/SVG.svg"
            alt=""
            width={1920}
            height={160}
            className="h-auto w-full"
            aria-hidden="true"
            priority
          />
        </div>
      </div>
    </Background>
  );
};
export default Hero;
