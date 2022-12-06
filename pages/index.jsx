import Herobanner from "../components/main/Herobanner";
import { AiOutlineUserAdd, AiOutlineStar } from "react-icons/ai";
import { SlEnvelopeOpen } from "react-icons/sl";
import Services from "../components/main/Services";
import SmallBanner from "../components/main/SmallBanner";
import Blockcat from "../components/main/Blockcat";
import ElectronicCert from "../components/main/ElectronicCert";
import Accessorises from "../components/main/Accessorises";
import Brands from "../components/main/Brands";
import { sanityClient } from "../lib/sanity";

const heroBanner = `*[_type == "banner"][0]{
  heroBanner[]{
    asset -> {
      url
  }
  }
}`;

const techno = `*[_type == "technoPhone"][]{
  name,
  slug{
    current
  } ,
  image { 
  asset -> {
  url
}
},
price,
inStock,
description,
details
}`;

const electronics = `*[_type == "electronics"]{
  name,
   slug{
     current
   } ,
   image { 
   asset -> {
   url
 }
 },
 price,
 inStock,
 description,
 details
 }`

 const access = `*[_type == "accessorises"]{
  name,
   slug{
     current
   } ,
   image { 
   asset -> {
   url
 }
 },
 price,
 inStock,
 description,
 details
 }`

export default function Home({ hbanner, tphone, elect, acces }) {
  return (
    <div className="pt-8 mx-auto max-w-7xl md:px-10 xl:px-0">
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
        <Herobanner hbanner={hbanner} />
      </div>
      <Services />
      <div className="flex flex-col px-5 md:mt-10 md:flex-row md:space-x-7 md:px-0">
        <SmallBanner img="/img/INFINIX.webp" />
        <div className="hidden xl:flex space-x-7">
          <SmallBanner img="/img/samsung_tv.png" />
          <SmallBanner img="/img/tecno_banner.webp" />
        </div>
      </div>
      <div className="my-8 md:my-10">
        <h1 className="mx-4 font-sans text-2xl font-normal md:mx-0">
          Popular Brands This Month
        </h1>
      </div>
      <Blockcat tphone={tphone} />
      <div className="my-10 md:my-10">
        <h1 className="mx-4 font-sans text-2xl font-normal md:mx-0">
          Electronics Product
        </h1>
      </div>
      <ElectronicCert elect={elect} />
      <div className="my-10 md:my-14">
        <h1 className="mx-4 font-sans text-2xl font-normal md:mx-0">
          Accessorises Product
        </h1>
      </div>
      <Accessorises elect={acces} />
      <div className="flex flex-col px-5 md:mt-10 md:flex-row md:space-x-7 md:px-0">
        <SmallBanner img="/img/HOMES-01.webp" />
        <div className="hidden xl:flex w-fit space-x-7">
          <SmallBanner img="/img/samsung_banner.webp" />
          <SmallBanner img="/img/ps_5.webp" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-5 mt-20 md:mt-14 md:flex-row md:space-x-6 md:px-0">
        <Brands img={"/img/infinix_sm_banner.webp"} />
        <div className="hidden space-x-5 xl:flex">
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

export const getServerSideProps = async () => {
  const hbanner = await sanityClient.fetch(heroBanner);
  const tphone = await sanityClient.fetch(techno);
  const elect = await sanityClient.fetch(electronics);
  const acces = await sanityClient.fetch(access);
  return {
    props: { hbanner, tphone, elect, acces},
  };
};
