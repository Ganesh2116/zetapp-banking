import product from "@/lib/utils/product";
import Image from "next/image";
import { useEffect, useRef } from "react";

const ProductsOnZet = () => {
  return (
    <div
      className="px-8 py-4 relative"
      style={{
        background:
          "linear-gradient(168deg, rgb(233, 244, 255) 0%, rgb(255, 255, 255) 100%)",
      }}
    >
      <div className="absolute top-0 left-0 z-10">
        <Image
          src="/home-img/products-img/top-left-mesh.svg"
          alt="top left mesh"
          height={452}
          width={341}
        />
      </div>
      <div className="absolute bottom-0 right-0 z-0">
        <Image
          src="/home-img/products-img/bottom-right-mesh.svg"
          alt="top left mesh"
          height={452}
          width={386}
        />
      </div>
      <div className="text-center p-4">
        <p className="text-2xl font-bold">Products on ZET</p>
        <p className="text-lg font-light">
          We are trusted by best brand in the country
        </p>
      </div>
      <div className="grid grid-cols-1 max-w-7xl mx-auto sm:grid-cols-2 relative z-10">
        {product.map((index, id) => (
          <ProductCard
            key={id}
            {...{
              ...index,
              index: id,
            }}
          />
        ))}
      </div>
    </div>
  );
};

function ProductCard({
  image,
  lable,
  description,
  color,
  index,
}: {
  image: string;
  lable: string;
  description: string;
  color: string;
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
      style={{
        perspective: "40px",
        WebkitTransition: "transform 0.5s",
        transition: "transform 0.5s",
      }}
      className="product-card-container"
      id={`container-${index}`}
    >
      <div
        className="flex flex-col justify-center items-center rounded-xl my-2 sm:mx-2 lg:flex-row lg:px-10 lg:py-3 product-card"
        style={{
          backgroundColor: color,
        }}
        id={`inner-${index}`}
      >
        <div className="lg:w-2/6">
          <Image
            alt="product img"
            src={image}
            width={111.59}
            height={111.72}
            className="w-full"
          />
        </div>

        <div className="flex flex-col px-8 py-4 text-center lg:w-3/5">
          <p className="text-xl font-bold">{lable}</p>
          <p className="text-base font-light">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductsOnZet;
