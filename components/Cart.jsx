import { FaTimes } from 'react-icons/fa';
import { useStateContext } from '../context/StateContext';
import Image from 'next/image';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import Link from 'next/link';

function Cart({ hide}) {
  const { totalQuantities,cartItem, totalPrice, formatPrice, handleRemoveItem } = useStateContext()
  
  return (
    <div className='h-fit absolute bg-white w-full md:w-fit right-0  z-30 top-24 md:right-20 rounded-lg border-t-4 border-orange-400'>
    <button className='text-orange-400  text-3xl m-3 absolute right-0 ' onClick={() => hide(prev => !prev)}><FaTimes /> </button>
    <div>
      <p className='text-gray-600 font-bold m-3'>My Cart ( <span className='text-orange-400 text-sm '> {totalQuantities} Item in Cart</span> )</p>
    </div>
        {
          cartItem.map((item, index) => ( 
            <div key={index} className="m-5 ">
              <hr />
              <div className='flex'>
                <Image 
                  src={item.image.asset.url}
                  alt={item.name} 
                  width={90} height={90} 
                  objectFit='cover' />
                <div className='m-3 flex  items-center justify-between w-full '>
                  <div>
                    <p className='text-black text-sm'>{item.name}</p>
                    <p className='text-orange-400 mt-3'>&#8358;{item.price}</p>
                    <p className='text-gray-400 mt-3 text-sm'>QTY: {item.quantity}</p>
                  </div>
                  <div className='text-black flex flex-col space-y-3 mt-5 text-xl'>
                   <Link href={`/product/${item.slug.current}`} > 
                    <button><FaEdit /></button>
                    </Link>
                    <button className='text-red-600'onClick={() => handleRemoveItem(item)}><FaTrashAlt /></button>
                  </div>
                </div>
              </div>
                <hr />                
              </div>
              
          ))
        }
        <div className='flex justify-between items-center m-3 font-bold '>
          <p className='text-black  '>Cart SubTotal: </p>
          <span className='text-orange-400 '>{formatPrice(totalPrice)}</span>
        </div>

        <div className='m-3 space-y-3 text-center'>
          <p className='bg-[#ff9300] text-white py-3 px-10 rounded-[5px]'>Proceed To CheckOut</p>
          <Link href="/cart" >
          <p className='bg-gray-300 hover:bg-[#ff9300] hover:text-white text-black py-3 px-10 rounded-[5px]'>View Cart</p>
          </Link>
        </div>
    </div>
  )
}

export default Cart
