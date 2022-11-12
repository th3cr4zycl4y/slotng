import React from "react";
import BigCartImg from "./BigCartImg";
import CartImg2 from "./CartImg2";

function ElectronicCert() {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex xl:absolute space-x-10 right-0 text-sm -top-14 font-bold text-gray-400">
        <p className="text-[#ff9300]">Electronics</p>
        <p>Televisions</p>
        <p>Home & Audio Systems</p>
        <p className="hidden xl:block">Fryers</p>
      </div>
      {/* electronics container */}
      <div className="border p-5 flex m-5">
        <div className="flex flex-col justify-between w-full  xl:w-[60%] ">
          {/* First row */}
          <div className="flex mb-10">
            <div>
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
            <div>
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
            <div className="hidden md:block">
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex">
            <div>
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
            <div>
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
            <div className="hidden md:block">
              <CartImg2 img={"/img/hisense-t.v.jpg"} />
            </div>
          </div>
        </div>
        {/* Big row */}
        <div className="xl:w-[40%] ml-6 hidden xl:block">
          <BigCartImg img={"/img/hisense-t.v.jpg"} />
        </div>
      </div>
      <button className="bg-[#ff9300] text-white text-sm  py-3 w-[12rem] mt-9 rounded-sm ">
        LEARN MORE
      </button>
    </div>
  );
}

export default ElectronicCert;
