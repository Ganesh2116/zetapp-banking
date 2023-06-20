import useEmbalaCarousel, { EmblaCarouselType } from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import theZetEffect from "@/lib/utils/theZetEffect";
import { useCallback, useEffect, useState } from "react";

const TheZetEffectCarousel = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const [embalaRef, emblaApi] = useEmbalaCarousel(
    {
      loop: true,
    },
    [
      AutoPlay({
        delay: 2500,
        stopOnInteraction: false,
      }),
    ]
  );
  const onScroll = useCallback((emblaApi: EmblaCarouselType) => {
    const progress = Math.max(0, Math.min(1, emblaApi.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);
  useEffect(() => {
    if (!emblaApi) return;

    onScroll(emblaApi);
    emblaApi.on("reInit", onScroll);
    emblaApi.on("scroll", onScroll);
  }, [emblaApi, onScroll]);
  return (
    <div ref={embalaRef} className="overflow-hidden max-w-7xl mx-auto">
      <div className="flex">
        {theZetEffect.map((item, id) => (
          <div key={id} className="flex-[0_0_100%] mx-8">
            <p className="font-bold text-2xl text-white">{item}</p>
          </div>
        ))}
      </div>
      <div
        className="h-3 w-1/2 mt-4 rounded-full relative overflow-hidden"
        style={{
          background: "rgb(0,0,0,.25)",
        }}
      >
        <div
          className="h-full bg-white w-full rounded-full absolute left-[-100%]"
          style={{ transform: `translate3d(${scrollProgress}%,0px,0px)` }}
        ></div>
      </div>
    </div>
  );
};
export default TheZetEffectCarousel;
