import dynamic from "next/dynamic";
import Image from 'next/image';
import Link from 'next/link';
import  Head  from 'next/head';
import {  urlFor } from "../../lib/sanity";
import { FiHeart, FiPrinter,FiShare2 } from "react-icons/fi";
import {ImStack} from "react-icons/im"
import { useStateContext } from '../../context/StateContext';




const CartQty = dynamic(() => import('./CartQty'), {
  ssr: false,

})



function Cart({ product}) {
  
  const { qty, addItem, formatPrice} = useStateContext()

  const {image, slug, name, description, price, sku, details, _id} = product
  
   return (
    <div className='mx-4 mt-6 md:m-10' >
    <Head>
      <title>{name}</title>  
    </Head>      
      <div className='flex items-center space-x-3 '>
          <Link href="/" ><p className='cursor-pointer hover:text-orange-400'>Home</p></Link>
          <p className='text-sm text-orange-400'> &gt; {name}</p>
        </div>
        <div className='xl:flex'>
        <div className='flex flex-col-reverse xl:relative xl:flex-col  xl:w-[55%] items-center mt-10'>
          <div className='left-0 w-24 mt-5 xl:m-0 xl:absolute -top-0'>
            <Image
              src={urlFor(image).url()}
              alt="Banner Img"
              width="100"
              height="90" 
              className="z-0 rounded-sm"
            />
          </div>
          <div className='w-full mt-5 text-center'>
            <Image
              src={urlFor(image).url()}
              alt="Banner Img"
              width="350"
              height="340"
              className="z-0 rounded-sm"
            />
          </div>
        </div>
        <div className='xl:w-[50%] mt-2'>
          <h1 className='text-2xl xl:text-3xl font-bold'>{name}</h1>

          <p className='py-5 text-sm text-gray-400'>0 Review</p>
          <h3 className='font-bold text-2xl text-[#ff9300] pb-5'>
          {formatPrice(price)}
          </h3>

          <p>Avilability: <span className='text-[#ff9300]'>In Stock</span></p>
          <p className='pb-5 text-sm text-gray-400'>SKU: <span className='text-[#ff9300]'>{sku}</span></p>
          <p className='text-gray-700 w-[90%]'>
            {description}
          </p>
          <div className='flex py-10 space-x-5'>
           <CartQty product={product} />
            <div  onClick={() => addItem(product, qty)}>

            {
              // cartItem.includes(product) ?
              // <button className='bg-[#ff9300] text-white py-2 px-10 rounded-[5px]'>View Cart</button> : 
              <button className='bg-[#ff9300] text-white py-2 px-10 rounded-[5px]'>
                Add to Cart
              </button>
            }
        
            </div>

          </div>
            <div className='space-x-3'>
                <button className='cartbutton'>
                    <FiHeart />
                </button>
                <button className='cartbutton'>
                    <ImStack />
                </button>
                <button className='cartbutton'>
                    <FiPrinter />
                </button>
                <button className='cartbutton'>
                    <FiShare2 />
                </button>
            </div>
        </div>
        </div>

        <div className='mt-20'>
            <div className='flex space-x-5 text-2xl'>
                <div className='w-10 mr-10 border-b-2 border-orange-400 '>
                <h3 className='w-full'>Details</h3>
                </div>
                <h3 className='text-gray-300'>Reviews</h3>
            </div>
            {details && <ul className='mt-5 ml-10 space-y-3'>
                {
                    details?.map((item, i) => <li className='list-disc' key={i}>{item}</li>)
                }
            </ul>}

            <p className='mt-10'>Delivery period: 24 hours within Lagos, 3-5 days outside Lagos</p>
        </div>
    </div>
  )
}

export default Cart
