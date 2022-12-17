import Image from "next/image";

function services() {
  return (
    <div className="md:flex flex-wrap items-center justify-center space-y-5 xl:space-y-0  border text-gray-600 p-2 py-5 my-5  hidden ">
      <div className="service-item">
        <div className="w-12 h-12 ">
          <Image
            src="/img/bus.png"
            alt="bus icon"
            width="100%"
            height="100%"
            className=" text-orange-500"
          />
        </div>
        <div>
          <h6 className="text-[14px]">Free Delivery</h6>
          <p className="text-[12px]">Free delivery within Lagos</p>
        </div>
      </div>
      <div className="service-item">
        <div className="w-12 h-12">
          <Image
            src="/img/card.png"
            alt="bus icon"
            width="100%"
            height="100%"
            className=" text-orange-500"
          />
        </div>
        <div>
          <h6 className="text-[14px]">Safe Payment</h6>
          <p className="text-[12px]">100% secure payment</p>
        </div>
      </div>
      <div className="service-item">
        <div className="w-12 h-12 ">
          <Image
            src="/img/shop.png"
            alt="bus icon"
            width="100%"
            height="100%"
            className=" text-orange-500"
          />
        </div>
        <div>
          <h6 className="text-[14px]">Shop With Confidence</h6>
          <p className="text-[12px]">Buy now pay later</p>
        </div>
      </div>
      <div className="service-item">
        <div className="w-12 h-12 ">
          <Image
            src="/img/message.png"
            alt="bus icon"
            width="100%"
            height="100%"
            className=" text-orange-500"
          />
        </div>
        <div>
          <h6 className="text-[14px]">24/7 Help Center</h6>
          <p className="text-[12px]">Dedicated online and offline support</p>
        </div>
      </div>
      <div className="flex space-x-3 pl-5 ">
        <div className="w-12 h-12 ">
          <Image
            src="/img/news.png"
            alt="bus icon"
            width="100%"
            height="100%"
            className=" text-orange-500"
          />
        </div>
        <div>
          <h6 className="text-[14px]">Friendly Services</h6>
          <p className="text-[12px]">30 day satisfaction guarantee</p>
        </div>
      </div>
    </div>
  );
}

export default services;
