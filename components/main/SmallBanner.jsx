import Image from "next/image";
import React from "react";

function SmallBanner({ img }) {
  return (
    <div>
      <Image src={img} alt="small banner" width="400" height="180" />
    </div>
  );
}

export default SmallBanner;
