import React from "react";
import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Herobanner({ hbanner }) {
  return (
    <div className="flex flex-col items-center justify-center w-full px-5 xl:px-0 md:flex-row md:px-0 ">
      <div className="md:w-[1000px] h-2xl">
        <Carousel
          autoPlay={true}
          width="100%"
          interval={3000}
          infiniteLoop={true}
          showStatus={false}
          showThumbs={false}
        >
          {hbanner.heroBanner.map((item, i) => (
            <div key={i}>
              <Image
                src={item.asset.url}
                alt="Banner Img"
                width="900"
                height="340"
                className="rounded-sm"
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="flex h-full my-5 md:flex-col md:my-0 xl:ml-5 ">
        <div className="w-full pr-2 md:pb-5 md:pr-0">
          <Image
            src="/img/apple_watch.webp"
            alt="Banner Img"
            width="300"
            height="160"
            className="rounded-sm "
          />
        </div>
        <div className="w-full pr-2 md:pb-5 xl:pb-0 md:pr-0">
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
