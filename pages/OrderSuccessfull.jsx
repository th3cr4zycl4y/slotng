import React from 'react'
import Link  from 'next/link';
import { useStateContext } from '../context/StateContext';
import { useEffect } from 'react';

function OrderSucc() {
  const { setTotalQuantities,setCartItem, setTotalPrice } = useStateContext()

  useEffect(() => {
  setCartItem([])
  setTotalPrice(0)
  setTotalQuantities(0)
  }, [])
  
  console.log("success");

  return (
    <div className='flex items-center justify-center flex-col text-center text-2xl  md:text-3xl font-bold h-[50vh] '>
      <h1>Congrats Order successfully Placed</h1>
      <h2>Your Orders are on there way to your door step </h2>
      <Link href='/'>
      <button className='py-3 p-10 m-5 bg-[#ff9300]  text-lg text-white rounded-lg'>
        Shop Now
      </button>
      </Link>
    </div>
  )
}

export default OrderSucc
