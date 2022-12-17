import React from "react";
import BigCartImg from "./BigCartImg";
import CartImg2 from "./CartImg2";

function ElectronicCert({elect}) {
  return (
    <div className="relative flex flex-col items-center justify-center">
      <div className="right-0 flex space-x-10 text-sm font-bold text-gray-400 xl:absolute -top-14">
        <p className="text-[#ff9300]">Electronics</p>
        <p>Televisions</p>
        <p>Home & Audio Systems</p>
        <p className="hidden xl:block">Fryers</p>
      </div>
      {/* electronics container */}
      <div className="flex p-5 m-5 border">
        <div className="flex flex-col justify-between w-full  xl:w-[60%] ">
          {/* First row */}
          <div className="flex mb-10">
            <div>
              <CartImg2 product={elect[0]} img={elect[0].image.asset.url} price={elect[0].price} name={elect[0].name}  slug={elect[0].slug.current}/>
            </div>
            <div>
            <CartImg2 product={elect[1]} img={elect[1].image.asset.url} price={elect[1].price} name={elect[1].name} slug={elect[1].slug.current} />
            </div>
            <div className="hidden md:block">
            <CartImg2 product={elect[2]} img={elect[3].image.asset.url} price={elect[3].price} name={elect[3].name} slug={elect[3].slug.current} />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex">
           <div>
           <CartImg2 product={elect[4]} img={elect[4].image.asset.url} price={elect[4].price} name={elect[4].name} slug={elect[4].slug.current} />
            </div>
            <div>
              <CartImg2 product={elect[5]} img={elect[5].image.asset.url} price={elect[5].price} name={elect[5].name} slug={elect[5].slug.current} />
            </div>
            <div className="hidden md:block">
              <CartImg2 product={elect[2]} img={elect[2].image.asset.url} price={elect[2].price} name={elect[2].name} slug={elect[5].slug.current} />
            </div>
          </div>
        </div>
        {/* Big row */}
        <div className="xl:w-[40%] ml-6 hidden xl:block">
          <BigCartImg product={elect[5]}  img={elect[5].image.asset.url} price={elect[5].price} name={elect[5].name} slug={elect[5].slug.current} desc={elect[5].description}/>
        </div>
      </div>
      <button className="bg-[#ff9300] text-white text-sm  py-3 w-[12rem] mt-9 rounded-sm ">
        LEARN MORE
      </button>
    </div>
  );
}

export default ElectronicCert;
