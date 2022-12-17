import React from "react";
import Image from "next/image";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import Link from "next/link";
import { useStateContext } from '../../context/StateContext';


function CartImg2({ img , price, name, slug , product}) {
  const {formatPrice, cartItem , addItem, qty} = useStateContext()

  return (
    <div className="space-y-3 cursor-pointer group ">
      <div className="relative overflow-hidden w-fit ">
      <Link href={`/product/${slug}`}>
        <Image
          src={img}
          alt="Banner Img"
          width="330"
          height="270"
          className="rounded-sm"
        />
        </Link>
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
        <div>        
       
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
      <Link href={`/product/${slug}`}>

        <h3 className="w-[10rem] text-[#0066c0] hover:text-[#ff9300] text-sm mb-10">{name}</h3>
      </Link>
        <p>{formatPrice(price)}</p>
      </div>
  );
}

export default CartImg2;
