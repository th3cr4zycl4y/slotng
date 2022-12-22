import dynamic from "next/dynamic";
import Head from "next/head";
import React from "react";
import Footer from "./footer/Footer";

  const Header = dynamic(() => import('./header/Header'), {
    ssr: false,
  })

  

function Layouts({ children }) {
  return (
    <div>
      <Head>
        <title>
          Slot.ng - Phones, Tablets, Laptops, Electronics and Accessories
        </title>
        <meta name="description" content="SlotNg Clone With Nextjs And TailWindCss By Olabode Olaleye" />
        <link rel="icon" type="image/x-icon" href="https://slot.ng/media/favicon/stores/1/S_1_.png" />
      </Head>
      <header>
        <Header />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Layouts;
