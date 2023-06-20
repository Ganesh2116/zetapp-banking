import brands from "@/lib/utils/brands";
import Image from "next/image";
import useEmbalaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";

const BrandsCarousel = () => {
  const [embalaRef] = useEmbalaCarousel(
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
  return (
    <div ref={embalaRef} className="overflow-hidden max-w-7xl mx-auto">
      <div className="flex">
        {brands.map((item, id) => (
          <div
            key={id}
            className="flex-[0_0_35%] sm:flex-[0_0_20%] xl:flex-[0_0_15%] 2xl:flex-[0_0_20%] min-w-0 border border-[#e7e7f0] mx-8 flex justify-center py-[3vw] px-[4vw] sm:py-2 sm:px-4 rounded-lg"
          >
            <Image alt="brand img" height={64} width={200} src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
};
export default BrandsCarousel;
