import React from 'react'
import { useStateContext } from '../../context/StateContext'


function CartQty() {
    const {decQty, incQty, qty, } = useStateContext()

  return (
    <div className='flex items-center px-2 space-x-10 border'> 
    <button className='p-1 text-xl font-bold text-gray-400 hover:text-black' onClick={decQty}>-</button>
    <p>{ qty }</p>
    <button className='p-1 text-xl font-bold text-gray-400 hover:text-black' onClick={incQty}>+</button>
  </div>
  )
}

export default CartQty
