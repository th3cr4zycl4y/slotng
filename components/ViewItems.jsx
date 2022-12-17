import React from 'react'
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import Link from 'next/link';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';


function CartItems() {
  const { 
    totalPrice, 
    cartItem,
    formatPrice,
    handleRemoveItem,
    incItemQty,
    decItemQty
   } = useStateContext()
 
  return (
    <div className='lg:m-5 mx-2 mt-5 flex items-center flex-col'>
      <div className='border lg:w-[60%] w-full'>
        <div  className='border w-full flex justify-center items-center flex-col py-5'>
        <p className='text-lg font-bold'>Product Name</p>
        </div>
        <div className='border'>
          {
            cartItem.map((item, i) => {
              return (
                <div key={i} className='text-gray-600 p-5 border'>
                  <div className=' flex items-center space-x-10  '>
                  <Image 
                        src={item.image.asset.url}
                        alt={item.name} 
                        width={100} height={100} 
                        objectFit='cover' 
                  />
                  <p className='text-sm md:text-xl  '>
                      {item.name}
                  </p>
                  </div>
                  <div className='flex justify-center space-x-10 p-5 items-center '>
                    <div className='text-sm md:text-xl text-center  space-y-2'>
                      <p >Price:</p>
                      <p className='text-[#ff9300] font-bold'>{formatPrice(item.price)}</p>
                    </div>
                    <div className='text-sm md:text-xl text-center  space-y-2'>
                      <p >Qty:</p>
                      <div className="space-x-5 bg-gray-100 flex">
                        <button onClick={() => decItemQty(item) } className='px-3 '>-</button>
                        <p >{item.quantity}</p>
                        <button onClick={() => incItemQty(item) } className='px-3 '>+</button>
                      </div>
                    </div>


                  <div className='text-sm md:text-xl text-center  space-y-2'>
                    <p >Subtotal</p>
                    <span className='text-[#ff9300] font-bold'>{formatPrice(item.quantity * item.price)}</span></div>
                  </div>
                  <div className='text-black flex justify-center  items-center space-x-10 text-xl'>
                        <Link href={`/product/${item.slug.current}`} > 
                          <button><FaEdit /></button>
                          </Link>
                          <button className='text-red-600'onClick={() => handleRemoveItem(item)}><FaTrashAlt /></button>
                        </div>
                </div>

              )
            })
          }
        </div>
      </div>

      <div className='bg-gray-100 mx-10 w-full lg:w-[30%] mt-5 p-5 space-y-4 sticky top-0 h-fit'>
          <h2 className='font-bold text-xl '>SUMMARY</h2>
          <div className='space-y-3'>
            <div className='flex w-full justify-between'>
              <p className=''>Subtotal</p>
              {formatPrice(totalPrice)}
            </div>
            <div className='flex w-full justify-between'>
              <p className=''>Suregifts Discount</p>
              {formatPrice('0')}
            </div>
            <div className='flex w-full justify-between'>
              <p className=''>shipping</p>
              {formatPrice('0')}
            </div>
          </div>
          <div className='my-10'>
            <div className='flex w-full justify-between'>
              <p className='text-lg font-bold'>Order Total</p>
              {formatPrice(totalPrice)}
            </div>
          </div>
        <div className='border-b border-gray-700'></div>
          <p className='text-lg font-bold flex items-center justify-between'>APPLY DISCOUNT CODE <MdOutlineKeyboardArrowDown className="text-3xl"/> </p>
      
      <button className='text-center w-full text-white rounded-lg bg-[#ff9300] p-3 '>Proceed To Checkout</button>
      </div>

      
    </div>
  )
}

export default CartItems
