import dynamic from 'next/dynamic' 
import React from 'react'
import { useStateContext } from '../context/StateContext';
import Head from 'next/head';
import Link from 'next/link';
import CartItems from '../components/ViewItems';


function Cart() {
  const { cartItem } = useStateContext()

  return (
    <div className='pt-8 mx-auto max-w-7xl md:px-10 xl:px-0'>
      <Head>
        <title>Cart</title>
      </Head>
      <h1 className='text-4xl font-bold'>Shopping Cart</h1>
      

    { cartItem.length ? <CartItems /> : <div className='h-[30vh] w-full flex items-center justify-center flex-col'>
        <p className='text-3xl '>Cart is Empty</p>
        <Link href='/'>
          <button className='bg-[#ff9300] text-white py-2 px-6 mt-5 font-bold rounded-lg'>Shop Now</button>
        </Link>
      </div>}
          
      </div>
  )
}

export default dynamic(() => Promise.resolve(Cart), { 
  ssr: false 
})

