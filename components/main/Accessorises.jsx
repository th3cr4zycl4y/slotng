import React from "react";
import BigCartImg from "./BigCartImg";
import CartImg2 from "./CartImg2";

function Accessorises({accessorises}) {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="flex xl:absolute xl:space-x-10 right-0 text-sm -top-14 font-bold text-gray-400 ">
        <p className="text-[#ff9300]">accessorises</p>
      </div>
      {/* electronics container */}
      <div className="border p-5 flex  m-5">
        <div className="flex flex-col justify-between w-full  xl:w-[60%] ">
          {/* First row */}
          <div className="flex mb-10">
            <div>
              <CartImg2 product={accessorises[0]} img={accessorises[0].image.asset.url} price={accessorises[0].price} name={accessorises[0].name}  slug={accessorises[0].slug.current}/>
            </div>
            <div>
            <CartImg2 product={accessorises[1]} img={accessorises[1].image.asset.url} price={accessorises[1].price} name={accessorises[1].name} slug={accessorises[1].slug.current} />
            </div>
            <div className="hidden md:block">
            <CartImg2 product={accessorises[3]} img={accessorises[3].image.asset.url} price={accessorises[3].price} name={accessorises[3].name} slug={accessorises[3].slug.current} />
            </div>
          </div>
          {/* Second Row */}
          <div className="flex">
           <div>
           <CartImg2 product={accessorises[4]} img={accessorises[4].image.asset.url} price={accessorises[4].price} name={accessorises[4].name} slug={accessorises[4].slug.current} />
            </div>
            <div>
              <CartImg2 product={accessorises[5]} img={accessorises[5].image.asset.url} price={accessorises[5].price} name={accessorises[5].name} slug={accessorises[5].slug.current} />
            </div>
            <div className="hidden md:block">
              <CartImg2 product={accessorises[6]} img={accessorises[6].image.asset.url} price={accessorises[6].price} name={accessorises[6].name} slug={accessorises[6].slug.current} />
            </div>
          </div>
        </div>
        {/* Big row */}
        <div className="w-[40%] ml-6 hidden xl:block">
          <BigCartImg  img={accessorises[2].image.asset.url} price={accessorises[2].price} name={accessorises[2].name} slug={accessorises[2].slug.current} desc={accessorises[2].description} product={accessorises[2]} />
        </div>
      </div>
      <button className="bg-[#ff9300] text-white text-sm  py-3 w-[12rem] my-9 rounded-sm ">
        LEARN MORE
      </button>
    </div>
  );
}

export default Accessorises;
