import React from "react";
import Image from "next/image";
import Naira from "react-naira";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import Link from "next/link";

function CartImg2({ img , price, name, slug}) {
  return (
    <Link href={`/product/${slug}`}>
    <div className="space-y-3 cursor-pointer group ">
      <div className="relative overflow-hidden w-fit ">
        <Image
          src={img}
          alt="Banner Img"
          width="330"
          height="270"
          className="rounded-sm"
        />
        <div className="absolute top-0 flex-col hidden space-y-2 transition  group-hover:xl:flex -right-10 group-hover:right-0">
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
        {name}
        
      </h3>
      <Naira>{price}</Naira>
      </div>
      </Link>
  );
}

export default CartImg2;
