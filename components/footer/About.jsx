import Image from "next/image";
import React from "react";
import { TbHeadset } from "react-icons/tb";

function About() {
  return (
    <div className="xl:w-[30%]">
      <div className="w-[10rem] h-[4rem] my-10 relative">
        <Image
          src="/img/logo.webp"
          alt="logo image"
          layout="fill"
          object-fit="contain"
        />
      </div>
      <p className="  mb-3">
        SLOT Systems Limited is the leading retail company for affordable and
        durable mobile phones, computers, accessorises, and various types of
        Electronics. We consider it necessary to fill up this need in the global
        information technology sector with emphasis on Africa market.
      </p>
      <div className="flex my-5">
        <TbHeadset className="w-14 h-14 text-[#ff9300]" />
        <div className="float-left w-[170px] ">
          <label className="text-gray-500">Hotline:</label>
          <div className="leading-8 font-normal text-3xl">
            014663633 <br />
            07005000050
          </div>
        </div>
      </div>
      <p className="">Address:2B Medical Road, Ikeja Lagos</p>
      <button className="text-white bg-red-600 p-3 rounded-xl mt-6 px-4">
        Find A Store
      </button>
    </div>
  );
}

export default About;
