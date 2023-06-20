"use client";
import Founders from "@/components/about/Founders";
import Investors from "@/components/about/Investors";
import founders from "@/lib/utils/founders";
import investors from "@/lib/utils/investors";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  return (
    <main>
      <section>
        <div className="relative ">
          <Image
            alt="OurMission-image"
            src="/about-img/OurMission.webp"
            width={2880}
            height={1300}
            className="object-cover md:w-full md:h-auto h-[650px] sm:h-auto"
          />
          <div className="absolute inset-0 flex flex-col justify-center gap-2 items-center">
            <div className="text-center gap-6">
              <p className="text-3xl font-bold text-white lg:text-[40px]">
                OUR MISSION
              </p>
            </div>
            <div className="text-center gap-6 px-20">
              <p className="text-base font-light text-white max-w-[400px] sm:max-w-[500px]">
                Enabling finanical inclusion for the next billion indians &
                making their Zindagi Set.Building a platform that enables you to
                sell finanical products & earn up to Rs. 1 lakh every month
              </p>
            </div>
            <div className="text-center p-2">
              <p className="text-base font-bold text-white">
                EARN BETTER LIVE BERTTER
              </p>
            </div>
          </div>
        </div>
        <div className="pb-5 max-w-7xl mx-auto">
          <div className="text-center p-10">
            <p className="text-2xl font-semibold sm:text-[40px]">
              How we evolved over the years
            </p>
          </div>
          <div className="w-full overflow-x-scroll md:overflow-x-visible pt-8">
            <Image
              alt="growth-image"
              src="/about-img/Growth.webp"
              width="1872"
              height="460"
              className="max-w-[200%] md:w-full"
            />
          </div>
        </div>
        <div className=" bg-slate-50 ">
          <div className="flex flex-col py-10 px-10 max-w-7xl mx-auto ">
            <p className="text-2xl mb-2 md:mb-16 font-semibold md:text-[40px]">
              Got Featured
            </p>
            <div className="flex gap-4">
              <Link
                href="https://economictimes.indiatimes.com/tech/funding/onecode-has-raised-13-million-in-fresh-funding-led-by-general-catalyst/articleshow/90571172.cms"
                target="_blank"
              >
                <Image
                  width={472}
                  height={320}
                  alt="economic logo"
                  src="/about-img/EconomicTimes.webp"
                />
              </Link>
              <Link
                href="https://inc42.com/buzz/fintech-startup-onecode-raises-13mn-in-series-a-round-led-by-general-catalyst/"
                target="_blank"
              >
                <Image
                  width={472}
                  height={320}
                  alt="Inc42 logo"
                  src="/about-img/Inc42.webp"
                />
              </Link>
              <Link
                href="https://www.livemint.com/companies/start-ups/onecode-raises-5-million-led-by-sequoia-s-surge-and-nexus-venture-partners-11626329270757.html"
                target="_blank"
              >
                <Image
                  width={472}
                  height={320}
                  alt="mint logo"
                  src="/about-img/mint.webp"
                />
              </Link>
              <Link
                href="https://yourstory.com/2022/03/funding-alert-onecode-series-a-general-catalyst-financial-services"
                target="_blank"
              >
                <Image
                  width={472}
                  height={320}
                  alt="yourstory logo"
                  src="/about-img/YourStory.webp"
                />
              </Link>
              <Link
                href="https://www.business-standard.com/article/companies/onecode-raises-5-mn-led-by-sequoia-capital-s-surge-nexus-venture-partners-121071500470_1.html"
                target="_blank"
              >
                <Image
                  width={472}
                  height={320}
                  alt="BusinessStandard logo"
                  src="/about-img/BusinessStandard.webp"
                />
              </Link>
            </div>
          </div>
        </div>

        <Investors />
        <Founders />

        <div className="w-full">
          <Image
            alt="Aboutfounter img"
            src="/about-img/AboutUsFooter.webp"
            width={2880}
            height={1220}
          />
        </div>

        <div className="h-[2px] bg-white"></div>
      </section>
    </main>
  );
};
export default AboutPage;
