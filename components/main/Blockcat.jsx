import React from "react";
import Cartitems from "./Cartitems";

function Blockcat({ tphone }) {
  return (
    <div className="flex flex-col px-8 m-5 overflow-scroll border py-9 xl:flex-row xl:overflow-hidden no-scrollbar ">
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
        <Cartitems tphone={tphone} />
      </div>
    </div>
  );
}

export default Blockcat;
