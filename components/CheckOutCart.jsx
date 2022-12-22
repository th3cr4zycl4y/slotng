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
    <div className='flex flex-col items-center mx-2 mt-5 lg:m-5 lg:items-start lg:flex-row'>
      <div className='border lg:w-[60%] w-full'>
        <div  className='flex flex-col items-center justify-center w-full py-5 border'>
        <p className='text-lg font-bold'>Product Name</p>
        </div>
        <div className='border'>
          {
            cartItem.map((item, i) => {
              return (
                <div key={i} className='p-5 text-gray-600 border'>
                  <div className='flex items-center space-x-10 '>
                  <Image 
                        src={item.image.asset.url}
                        alt={item.name} 
                        width={100} height={100} 
                        objectFit='cover' 
                  />
                  <p className='text-sm md:text-xl '>
                      {item.name}
                  </p>
                  </div>
                  <div className='flex items-center justify-center p-5 space-x-10 '>
                    <div className='space-y-2 text-sm text-center md:text-xl'>
                      <p >Price:</p>
                      <p className='text-[#ff9300] font-bold'>{formatPrice(item.price)}</p>
                    </div>
                    <div className='space-y-2 text-sm text-center md:text-xl'>
                      <p >Qty:</p>
                      <div className="flex space-x-5 bg-gray-100">
                        <button onClick={() => decItemQty(item) } className='px-3 '>-</button>
                        <p >{item.quantity}</p>
                        <button onClick={() => incItemQty(item) } className='px-3 '>+</button>
                      </div>
                    </div>


                  <div className='space-y-2 text-sm text-center md:text-xl'>
                    <p >Subtotal</p>
                    <span className='text-[#ff9300] font-bold'>{formatPrice(item.quantity * item.price)}</span></div>
                  </div>
                  <div className='flex items-center justify-center space-x-10 text-xl text-black'>
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

      <div className='bg-gray-100 mx-10 w-full lg:w-[30%] mt-5 lg:mt-0 p-5 space-y-4 sticky top-0 '>
          <h2 className='text-xl font-bold '>SUMMARY</h2>
          <div className='space-y-3'>
            <div className='flex justify-between w-full'>
              <p className=''>Subtotal</p>
              {formatPrice(totalPrice)}
            </div>
            <div className='flex justify-between w-full'>
              <p className=''>Suregifts Discount</p>
              {formatPrice('0')}
            </div>
            <div className='flex justify-between w-full'>
              <p className=''>shipping</p>
              {formatPrice('0')}
            </div>
          </div>
          <div className='my-10'>
            <div className='flex justify-between w-full'>
              <p className='text-lg font-bold'>Order Total</p>
              {formatPrice(totalPrice)}
            </div>
          </div>
        <div className='border-b border-gray-700'></div>
          <p className='flex items-center justify-between text-lg font-bold'>APPLY DISCOUNT CODE <MdOutlineKeyboardArrowDown className="text-3xl"/> </p>
      
      </div>

      
    </div>
  )
}

export default CartItems
