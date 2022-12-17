import Image from "next/image";
import Link from "next/link";
import React, {useContext} from "react";
import { useStateContext } from "../../context/StateContext";
import { FiMapPin } from "react-icons/fi";
import { BsHandbag } from "react-icons/bs";
import { TbHeadset } from "react-icons/tb";
import { FaBars } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import Cart from "../Cart";



function Header() {
  const { totalQuantities,showCart, setShowCart} = useStateContext()

  return (
    <header className="bg-[#D72423] h-[12rem]  xl:h-[12.7rem] w-full text-white overflow-hidden"  >
      <div className="max-w-7xl mx-auto ">
        {/* top container */}
        <div className="flex xl:justify-between align-center justify-center ">
          <div className="xl:flex  items-center text-[12.5px] font-sans space-x-2 xl:py-[14px] hidden">
            <FiMapPin />
            <p>Find a store</p>
          </div>
          <div className=" xl:py-[14px] md:text-[16px] text-[10px] xl:text-[12px] space-x-2 font-semibold  flex items-center pt-4 xl:pt-[14px]">
            <div className="px-4 border-r-2  ">
              <Link href="/">
                <a>My Account</a>
              </Link>
            </div>
            <div className="px-4 border-r-2 ">
              <Link href="/">
                <a>My Wish List (0)</a>
              </Link>
            </div>
            <div className="px-4 border-r-2 ">
              <Link href="/">
                <a>Sign In</a>
              </Link>
            </div>
            <div>
              <Link href="/">
                <a>Compare (0)</a>
              </Link>
            </div>
          </div>
        </div>
        {/* middle container */}
        <div>
          {/* logo image */}
          <div className="flex xl:space-x-10 py-[15px] mx-5 xl:ml-0 items-center justify-between">
            <Link href="/">
            <div className="py-[15px] h-[10px] w-[90px] md:h-[35px] md:w-[150px]  relative cursor-pointer">
              <Image
                src="/img/logo_white.webp"
                alt="logo image"
                layout="fill"
                object-fit="contain"
              />
            </div>
            </Link>
            <div className="flex items-center justify-around w-fit xl:w-full ">
              <div className="xl:flex hidden ">
                <TbHeadset className="w-12 h-12 text-[#ff9300]" />
                <div className="float-left w-[170px] ">
                  <label>Hotline:</label>
                  <div className="leading-4">
                    014663633 <br />
                    07005000050
                  </div>
                </div>
              </div>
              <form className="relative">
                <div className="md:h-[50px] h-[40px]  bg-white rounded-3xl  flex items-center absolute -right-10  md:right-10 md:top-8 top-12 xl:static">
                  <input
                    type="text"
                    className="placeholder:text-gray-300 pr-16 pl-10 w-[15rem] md:w-[25rem] rounded-3xl text-gray-400 placeholder:text-[12px] xl:placeholder:text-[16px] "
                    placeholder="Search entire store here..."
                  />
                  <button className="bg-[#ff9300] h-full rounded-r-3xl  px-[2rem] xl:px-[4rem]">
                    Search
                  </button>
                </div>
              </form>
              <div className="relative -top-3 right-0">
                <div className="bg-[#ff9300] rounded-full flex justify-center items-center text-sm relative -right-7 -bottom-2 h-5 w-5">
                  {totalQuantities}
                </div>
                <div onClick={() => setShowCart(prev => !prev)}>
                <BsHandbag className="w-8 h-8 " />
                </div>
              </div>
              {
                showCart && <Cart show={showCart} hide={setShowCart}/>
              }
              
            </div>
          </div>
        </div>
        {/* Last container */}
        <div className="flex items-center space-x-6 w-screen ">
          <div>
            <div className="flex justify-center items-center space-x-4 ml-4 xl:ml-0 relative -bottom-2 xl:static">
              <FaBars className="text-3xl xl:text-2xl" />
              <span className=" hidden xl:block">SHOP BY DEPARTMENT</span>
            </div>
          </div>
          <div className=" xl:flex space-x-5 hidden">
            <div className="list_container">
              <span>PHONE AND TABLETS</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>GENERATORS AND POWER SOLUTIONS</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>COMPUTING</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>ELECTRONICS</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>HOME AND KITCHEN</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>AUTOMOBILES</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
            <div className="list_container">
              <span>ACCESSORIES</span>
              <MdKeyboardArrowDown className="arrow_down " />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
