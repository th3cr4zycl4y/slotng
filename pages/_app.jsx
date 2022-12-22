import "../styles/globals.css";
import Layouts from "../components/Layouts";
import NextNProgress from 'nextjs-progressbar';
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";


function MyApp({ Component, pageProps }) {
  return (
    <StateContext>
      <Layouts>
      <NextNProgress color="#ff9300" />
      <Toaster />
        <Component {...pageProps} />
      </Layouts>
    </StateContext>
  );
}

export default MyApp;
