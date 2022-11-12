import React from "react";
import Cartitems from "./Cartitems";

function Blockcat() {
  return (
    <div className="border py-9 px-8 flex flex-col xl:flex-row overflow-scroll xl:overflow-hidden m-5  no-scrollbar ">
      <div className="md:space-y-2 space-x-10 xl:w-[25%] pr-10 xl:space-x-0 flex xl:block overflow-auto xl:overflow-hidden no-scrollbar  ">
        <div className="cart-list">
          <h3 className="text-[#ff9300]">Tecno</h3>
        </div>
        <div className="cart-list">
          <h3>Infinix</h3>
        </div>
        <div className="cart-list">
          <h3>Iphones</h3>
        </div>
        <div className="cart-list">
          <h3>HP</h3>
        </div>
        <div className="cart-list">
          <h3>ASUS</h3>
        </div>

        <div className="cart-list">
          <h3>SPORT</h3>
        </div>
        <div className="cart-list">
          <h3>Samsung</h3>
        </div>
        <div className="cart-list">
          <h3>Oppo</h3>
        </div>
      </div>
      <div className="xl:w-[75%]">
        <Cartitems />
      </div>
    </div>
  );
}

export default Blockcat;
