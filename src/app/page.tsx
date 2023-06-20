"use client";
import BrandsCarousel from "@/components/home/BrandsCarousel";
import StartEarningCarousel from "@/components/home/StartEarningCarousel";
import TheZetEffectCarousel from "@/components/home/TheZetEffectCarousel";
import whyChoose from "@/lib/utils/whyChoose";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import ProductsOnZet from "@/components/home/ProductsOnZet";

export default function Home() {
  return (
    <main>
      <section>
        <div className="text-center md:text-left pt-9 px-4 pb-4">
          <div className="bg-sky-100 rounded-md p-4 pb-8 max-w-7xl mx-auto relative md:mt-[100px] md:pl-8 lg:py-16">
            <div className="md:flex md:flex-col md:items-start md:w-1/2">
              <div className="gap-4">
                <p className="text-[40px] md:text-3xl lg:text-[40px] font-bold">
                  Become a Financial Advisor and{" "}
                  <span className="text-primary">Earn Rs.1 Lakh/Month</span>
                </p>
                <p className="text-xl font-light p-2">No investment requried</p>
              </div>
              <Link
                href="https://play.google.com/store/apps/details?id=in.onecode.app"
                target="_blank"
                className="flex justify-center pt-4 md:ml-4"
              >
                <Image
                  width={162}
                  height={48}
                  alt="zet-logo"
                  src="/get-play-store.svg"
                />
              </Link>
            </div>
            <div className="hidden md:block absolute bottom-0 right-0 md:w-[40vw] md:max-w-[350px] lg:max-w-[400px]">
              <Image
                src="/home-img/thumbs-up.webp"
                alt="thumbs up man"
                height={701}
                width={738}
              />
            </div>
          </div>
        </div>

        <div className="px-8 py-4 mt-16 mb-8">
          <div className="text-center mb-4">
            <p className="text-2xl font-bold">Top Brands on ZET</p>
            <p className="text-lg font-light">
              We are trusted by best brand in the country
            </p>
          </div>
          <BrandsCarousel />
        </div>

        <ProductsOnZet />

        <div
          className="bg-primary p-4 md:p-20"
          style={{
            clipPath: "polygon(0% 25%, 100% 0%, 100% 75%, 0% 100%)",
          }}
        >
          <div
            style={{
              background: "rgb(65, 127, 218)",
              clipPath: "polygon(0px 30%, 100% 0%, 100% 70%, 0px 100%)",
            }}
            className="py-[100px] px-8 max-w-7xl mx-auto relative md:min-h-[50vh] md:flex md:flex-col md:justify-center"
          >
            <div className="absolute top-0 bottom-0 hidden md:block -left-1/3 lg:left-0">
              <Image
                src="/home-img/theZetEffect/bg-ppl.webp"
                alt="bg ppl"
                height={463}
                width={695}
                className="mix-blend-luminosity"
              />
            </div>
            <div className="md:w-1/2 ml-auto ">
              <p className="text-xs text-white font-bold">THE ZET EFFECT</p>
              <TheZetEffectCarousel />
            </div>
          </div>
        </div>

        <div className="px-8 py-4 my-6 lg:flex max-w-7xl mx-auto relative min-h-screen">
          <div className="hidden lg:block absolute bottom-[50%] translate-y-[50%]">
            <Image
              src="/home-img/whyChoose-img/bgMesh.webp"
              alt="mesh"
              height={641}
              width={223}
            />
          </div>
          <div className="hidden lg:block absolute bottom-[50%] translate-y-[50%]">
            <Image
              src="/home-img/whyChoose-img/smileingMan.webp"
              alt="red tshirt smiling man"
              height={374}
              width={277}
            />
          </div>
          <div className="text-center lg:mt-[10%] 2xl:mt-[15%]">
            <p className="text-2xl font-bold">
              Why <span className="text-primary">Choose Us</span>
            </p>
            <p className="text-lg font-light">
              Why we are loved by our customers
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto mt-6 lg:grid-cols-2">
            {whyChoose.map((index, id) => (
              <motion.div
                key={id}
                className="flex flex-col justify-center items-center rounded-xl my-2"
                transition={{
                  duration: 1,
                }}
                initial={{
                  opacity: 0,
                  y: 100,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
              >
                <div>
                  <Image
                    alt="product img"
                    src={index.image}
                    width={67.5}
                    height={128}
                  />
                </div>

                <div className="flex flex-col px-8 py-4 text-center">
                  <p className="text-xl font-bold">{index.lable}</p>
                  <p className="text-base font-light">{index.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div
          className="px-8 clip-bg py-[100px] sm:py-[200px] md:py-[350px]"
          style={{
            background: "rgb(10, 37, 64)",
          }}
        >
          <div className="text-center">
            <p className="text-2xl font-bold text-white">
              Start Earning in 3 Easy Steps
            </p>
            <p className="text-lg font-light text-white">
              We have create the app the make your earing easy
            </p>
          </div>
          <StartEarningCarousel />
        </div>
      </section>
    </main>
  );
}
