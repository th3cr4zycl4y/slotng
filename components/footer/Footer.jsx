import React from "react";
import NewsLetter from "./NewsLetter";
import About from "./About";
import Nav from "./Nav";
import Image from "next/image";

function Footer() {
  return (
    <div>
      <NewsLetter />
      <div className="mx-10 flex mb-20">
        <About />
        <Nav />
      </div>
      <div className="bg-red-600 xl:justify-between justify-center text-center font-bold md:flex items-center px-10 p-3">
        <p className="text-white">
          Copyrigth <span className="text-[#ff9300]">slot.ng</span> 2022 All
          Rights Reserverd.
        </p>
        <Image src="/img/visa.png" alt="visa" width="70" height="30" />
      </div>
    </div>
  );
}

export default Footer;
