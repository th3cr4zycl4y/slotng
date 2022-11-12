import Image from "next/image";
import React from "react";

function Brands({ img }) {
  return (
    <div>
      <Image src={img} alt="small banner" width="200" height="80" />
    </div>
  );
}

export default Brands;
