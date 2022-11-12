import React from "react";
import Image from "next/image";
import Naira from "react-naira";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";

function CartImg({ img }) {
  return (
    <div className="space-y-3 group ">
      <div className="w-fit relative overflow-hidden ">
        <Image
          src={img}
          alt="Banner Img"
          width="210"
          height="200"
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
      <h3 className="w-[10rem] text-[#0066c0] hover:text-[#ff9300] text-sm mb-10">
        {" "}
        TECNO POP 2F (B1C) 16GB+1GB
      </h3>
      <Naira>39300.00</Naira>
    </div>
  );
}

export default CartImg;
