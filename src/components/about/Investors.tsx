import investors from "@/lib/utils/investors";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
const Investors = () => {
  return (
    <div className="max-w-7xl mx-auto px-10">
      <div>
        <p className="text-2xl font-semibold py-10 pl-2 md:text-[40px] ">
          Meet the Investors
        </p>
      </div>
      <motion.div
        className="grid grid-cols-3 md:grid-cols-4 gap-4"
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
        <Image
          alt="SequoiaCompany logo"
          src="/about-img/company-img/SequoiaCompany1.webp"
          width={600}
          height={320}
        />

        <Image
          alt="NexusCompany logo"
          src="/about-img/company-img/NexusCompany2.webp"
          width={600}
          height={320}
        />
        <Image
          alt="GeneralCaralystCompany logo"
          src="/about-img/company-img/GeneralCaralystCompany3.webp"
          width={600}
          height={320}
        />
        <Image
          alt="waterBridgeCompany logo"
          src="/about-img/company-img/WaterBridgeCompany4.webp"
          width={600}
          height={320}
        />
      </motion.div>

      <div className="grid grid-cols-3 sm:grid-cols-4 gap-12 p-4 md:gap-16 md:p-12 max-w-7xl mx-auto">
        {investors.peple.map((item, id) => (
          <InvestorCard
            key={id}
            {...{
              ...item,
              index: id,
            }}
          />
        ))}
      </div>
    </div>
  );
};

function InvestorCard({
  image,
  name,
  work,
  index,
}: {
  image: string;
  name: string;
  work: string;
  index: number;
}) {
  useEffect(() => {
    const container = document.getElementById(
      `container-${index}`
    ) as HTMLElement;
    const inner = document.getElementById(`inner-${index}`) as HTMLElement;

    var mouse = {
      _x: 0,
      _y: 0,
      x: 0,
      y: 0,
      updatePosition: function (event: MouseEvent) {
        var e = event || window.event;
        this.x = e.clientX - this._x;
        this.y = (e.clientY - this._y) * -1;
      },
      setOrigin: function (e: HTMLElement) {
        this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
        this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
      },
      show: function () {
        return "(" + this.x + ", " + this.y + ")";
      },
    };

    mouse.setOrigin(container);

    var counter = 0;
    var refreshRate = 1;
    var isTimeToUpdate = function () {
      return counter++ % refreshRate === 0;
    };

    var onMouseEnterHandler = function (event: MouseEvent) {
      // console.log("mouse enter");
      update(event);
    };

    var onMouseLeaveHandler = function () {
      inner.style.transform = "";
    };

    var onMouseMoveHandler = function (event: MouseEvent) {
      if (isTimeToUpdate()) {
        update(event);
      }
    };
    var update = function (event: MouseEvent) {
      mouse.updatePosition(event);
      updateTransformStyle(
        Number((mouse.y / inner.offsetHeight / 2).toFixed(2)),
        Number((mouse.x / inner.offsetWidth / 2).toFixed(2))
      );
    };

    var updateTransformStyle = function (x: number, y: number) {
      var style = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
      inner.style.transform = style;
    };

    container.onmousemove = onMouseMoveHandler;
    container.onmouseleave = onMouseLeaveHandler;
    container.onmouseenter = onMouseEnterHandler;
  });
  return (
    <div
      id={`container-${index}`}
      style={{
        perspective: "150px",
      }}
    >
      <div
        className="flex flex-col gap-4"
        id={`inner-${index}`}
        style={{
          transition: "transform 0.5s",
        }}
      >
        <Image alt="investor image" src={image} height={340} width={402} />
        <div className="flex flex-col ">
          <p className="text-[10px] sm:text-sm md:text-lg">{name}</p>
          <p className="text-[10px] sm:text-sm md:text-base text-[#8691A8]">
            {work}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Investors;
