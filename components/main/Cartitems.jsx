import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { FiHeart, FiEye } from "react-icons/fi";
import { ImStack } from "react-icons/im";
import Link  from 'next/link';
import { useStateContext } from "../../context/StateContext";

function Cartitems({ tphone }) {
  const { addItem, qty, cartItem , formatPrice} = useStateContext()



  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: "slides",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: false,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
        {tphone.map((item, i) => ( 
        <div key={i} >
          <div className="space-y-3 cursor-pointer group " >
            <div className="relative overflow-hidden w-52 h-52 ">
            <Link href={`/product/${item.slug.current}`} > 
              <Image
                src={item.image.asset.url} 
                alt="Banner Img"
                layout="fill"
                className="rounded-sm"
                objectFit="contain"
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
                  {
                  <div>   
                    { 
                      cartItem.includes(item) ?
                      (
                      <Link href='/cart' > 
                        <button className='bg-[#ff9300] z-20  group-hover:flex transition items-center justify-center p-2  text-white absolute bottom-2 w-full hidden'>View Cart</button>    
                      </Link>         
                   ) : (
                      <div onClick={() => addItem(item, qty)  }>
                        <button className='bg-[#ff9300] z-20  group-hover:flex transition items-center justify-center p-2  text-white absolute bottom-2 w-full hidden'>Add to Cart</button>     
                      </div>
                    )}
                  </div>
                }      
                </div>
            <Link href={`/product/${item.slug.current}`} > 

            <h3 className="w-[10rem] text-[#0066c0] hover:text-[#ff9300] text-sm mb-10">
              {item.name}
            </h3>
            </Link>
            <p>{formatPrice(item.price)}</p>
          </div>
          </div>
        ))}
      </Slider>
  );
}

export default Cartitems;
