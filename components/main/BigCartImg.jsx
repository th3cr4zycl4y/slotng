import React from "react";
import Image from "next/image";
import Naira from "react-naira";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";

function BigCartImg({ img }) {
  return (
    <div className="space-y-3 group w-full hidden xl:block">
      <div className="w-full relative overflow-hidden ">
        <Image
          src={img}
          alt="Banner Img"
          width="630"
          height="500"
          className="rounded-sm"
        />
        <div className=" group-hover:xl:flex flex-col absolute top-0 -right-10 group-hover:right-0   space-y-2 hidden transition ">
          <div className="cart-icon">
            <FiHeart />
          </div>
          <div className="cart-icon">
            <FiEye />
          </div>
          <div className="cart-icon">
            <ImStack />
          </div>
        </div>
        <div className=" bg-[#ff9300] z-20  group-hover:flex transition items-center justify-center p-2  text-white absolute bottom-2 w-full hidden">
          <p>Add to Cart</p>
        </div>
      </div>
      <div>
        <h3 className="w-[10rem] text-[#0066c0] hover:text-[#ff9300] text-sm mb-3">
          {" "}
          TECNO POP 2F (B1C) 16GB+1GB
        </h3>
        <div className="mb-3">
          <Naira>39300.00</Naira>
        </div>
        <hr />
        <p className="my-5 text-gray-500">
          The maxi led 32 Inch HD LED TV comes with an amazing display and sound
          that ensure maximum entertainment always for you, your friends and
          family. Enjoy luminous clarity that eliminates blur and artifacts
          which ensures fast motion picture quality when viewing your favorite
          programmes. HD 1366 x 768pWith 1366 x 768 high definition resolution,
          the images are so life-like, it feels like you’re really there.
        </p>
      </div>
    </div>
  );
}

export default BigCartImg;
