import React from "react";
import Image from "next/image";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import Link from "next/link";
import { useStateContext } from "../../context/StateContext";

function BigCartImg( { img , price, name, slug, desc, product}) {
  const {qty, addItem, formatPrice , cartItem} = useStateContext()
  return (
    <Link href={`/product/${slug}`}>
    <div className="hidden w-full space-y-3 cursor-pointer group xl:block">
      <div className="relative w-full overflow-hidden ">
        <Image
          src={img}
          alt="Banner Img"
          width="630"
          height="500"
          className="rounded-sm"
        />
        <div className="absolute top-0 flex-col hidden space-y-2 transition group-hover:xl:flex -right-10 group-hover:right-0">
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
        <div  onClick={() => addItem(product, qty)}>
            {
             <div>   
             { 
              cartItem.includes(product) ?
              (
                <Link href='/cart' > 
                  <button className='bg-[#ff9300] z-20  group-hover:flex transition items-center justify-center p-2  text-white absolute bottom-2 w-full hidden'>View Cart</button>    
                </Link>         
             ) : (
               <div onClick={() => addItem(product, qty)  }>
                 <button className='bg-[#ff9300] z-20  group-hover:flex transition items-center justify-center p-2  text-white absolute bottom-2 w-full hidden'>Add to Cart</button>     
               </div>
             )}
           </div>  
            }      
        </div>
      </div>
      <div>
        <h3 className="w-[10rem] text-[#0066c0] hover:text-[#ff9300] text-sm mb-3">
          {name}
        </h3>
        <div className="mb-3">
          <p>{formatPrice(price)}</p>
        </div>
        <hr />
        <p className="my-5 text-gray-500">{desc}</p>
      </div>
    </div>
    </Link> 
  );
}

export default BigCartImg;
