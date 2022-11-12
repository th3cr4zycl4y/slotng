import Herobanner from "../components/main/Herobanner";
import { AiOutlineUserAdd, AiOutlineStar } from "react-icons/Ai";
import { SlEnvelopeOpen } from "react-icons/Sl";
import Services from "../components/main/Services";
import SmallBanner from "../components/main/SmallBanner";
import Blockcat from "../components/main/Blockcat";
import ElectronicCert from "../components/main/ElectronicCert";
import Accessorises from "../components/main/Accessorises";
import Brands from "../components/main/Brands";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-8  md:px-10 xl:px-0">
      <div>
        <div className="w-fit fixed right-2 z-20 bottom-[40%] hidden xl:block">
          <div className="side_icon">
            <AiOutlineUserAdd />
          </div>
          <div className="side_icon">
            <AiOutlineStar />
          </div>
          <div className="side_icon">
            <SlEnvelopeOpen />
          </div>
        </div>
        <Herobanner />
      </div>
      <Services />
      <div className="md:mt-10 flex flex-col md:flex-row md:space-x-7 px-5 md:px-0">
        <SmallBanner img="/img/INFINIX.webp" />
        <div className="hidden xl:flex space-x-7">
          <SmallBanner img="/img/samsung_tv.png" />
          <SmallBanner img="/img/tecno_banner.webp" />
        </div>
      </div>
      <div className="md:my-10 my-8">
        <h1 className="text-2xl mx-4 md:mx-0 font-normal font-sans">
          Popular Brands This Month
        </h1>
      </div>
      <Blockcat />
      <div className="md:my-10 my-10">
        <h1 className="text-2xl mx-4 md:mx-0 font-normal font-sans">
          Electronics Product
        </h1>
      </div>
      <ElectronicCert />
      <div className="md:my-14 my-10">
        <h1 className="text-2xl mx-4 md:mx-0 font-normal font-sans">
          Accessorises Product
        </h1>
      </div>
      <Accessorises />
      <div className="md:mt-10 flex flex-col md:flex-row md:space-x-7 px-5 md:px-0">
        <SmallBanner img="/img/HOMES-01.webp" />
        <div className="hidden xl:flex  w-fit space-x-7">
          <SmallBanner img="/img/samsung_banner.webp" />
          <SmallBanner img="/img/ps_5.webp" />
        </div>
      </div>
      <div className="md:mt-14 mt-20  flex justify-center items-center flex-col md:flex-row md:space-x-6 px-5 md:px-0">
        <Brands img={"/img/infinix_sm_banner.webp"} />
        <div className="hidden xl:flex space-x-5">
          <Brands img={"/img/huawei_sm_bannner.webp"} />
          <Brands img={"/img/nokia_sm_bannner.webp"} />
          <Brands img={"/img/oppo_sm_bannner.webp"} />
          <Brands img={"/img/samsung_sm_bannner.webp"} />
          <Brands img={"/img/tecno_sm_bannner.webp"} />
        </div>
      </div>
    </div>
  );
}
