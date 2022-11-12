import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Herobanner() {
  return (
    <div className="flex  flex-col px-5 xl:px-0 md:flex-row  md:px-0 w-full  items-center justify-center ">
      <div className="md:w-[1000px] h-2xl">
        <Carousel
          autoPlay={true}
          width="100%"
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          <div className="w-full">
            <Image
              src="/img/banner_big.png"
              alt="Banner Img"
              layout="fill"
              object-fit="contain"
              className="rounded-sm"
            />
          </div>
          <div>
            <Image
              src="/img/banner_1_big.png"
              alt="Banner Img"
              width="900"
              height="340"
              className="rounded-sm"
            />
          </div>

          <div>
            <Image
              src="/img/vivo_banner_big.webp"
              alt="Banner Img"
              width="900"
              height="340"
              className="rounded-sm"
            />
          </div>
        </Carousel>
      </div>
      <div className="flex md:flex-col h-full my-5 md:my-0 xl:ml-5   ">
        <div className="md:pb-5 pr-2 md:pr-0 w-full">
          <Image
            src="/img/apple_watch.webp"
            alt="Banner Img"
            width="300"
            height="160"
            className="rounded-sm "
          />
        </div>
        <div className="md:pb-5 xl:pb-0 pr-2 md:pr-0 w-full">
          <Image
            src="/img/BUY-NOW-PAY-LETTER.webp"
            alt="Banner Img"
            width="300"
            height="160"
            className="rounded-sm "
          />
        </div>
      </div>
    </div>
  );
}

export default Herobanner;
