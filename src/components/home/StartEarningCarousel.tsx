import earning from "@/lib/utils/earning";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const StartEarningCarousel = () => {
  const [embalaRef] = useEmblaCarousel(
    {
      loop: true,
      align: "end",
    },
    [
      AutoPlay({
        delay: 10000,
        stopOnInteraction: false,
      }),
    ]
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="overflow-hidden" ref={embalaRef}>
        {/* embala container */}
        <div
          className="flex touch-pan-y flex-row h-auto -m-4"
          style={{
            backfaceVisibility: "hidden",
          }}
        >
          {earning.map((item, id) => (
            <div
              key={id}
              className="flex-[0_0_90%] min-w-0 overflow-visible mx-8 py-5"
            >
              <div className="flex flex-col gap-8 sm:flex-row-reverse">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  className="w-1/2 sm:w-1/3 md:w-[300px] mx-auto rounded-md "
                >
                  <source src={item.video} type="video/mp4" />
                </video>
                <div className="sm:flex sm:flex-col sm:justify-center sm:gap-5">
                  <div
                    className="py-2 pl-4 pr-8 bg-[#538BFF] w-fit mx-auto sm:ml-0 text-white font-bold"
                    style={{
                      clipPath: "polygon(0% 0%, 80% 0%, 100% 100%, 0% 100%)",
                    }}
                  >
                    STEP {id + 1}
                  </div>
                  <p className="text-2xl font-semibold text-white">
                    {item.text}
                  </p>
                  <div className="w-full sm:w-1/2 h-3 bg-zinc-200 rounded-full">
                    <motion.div
                      className="h-3 bg-[#7CA3FF] rounded-full"
                      transition={{
                        duration: 10,
                      }}
                      initial={{
                        width: 0,
                      }}
                      whileInView={{
                        width: "100%",
                      }}
                    ></motion.div>
                  </div>
                  <Link href={item.link} target="_blank">
                    <Image
                      width={162}
                      height={48}
                      alt="zet-logo"
                      src="/get-play-store.svg"
                      className="mx-auto sm:ml-5"
                    />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default StartEarningCarousel;
