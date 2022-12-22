import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckOutForm";
import { useStateContext } from '../context/StateContext';
import CheckOutCart from "../components/CheckOutCart";
import dynamic from "next/dynamic";
import Head from "next/head";




const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

 function CheckOut() {
  const [clientSecret, setClientSecret] = React.useState("");
  const { 
      totalPrice, 
      cartItem,
     } = useStateContext()

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ totalPrice: totalPrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Head>
        <title>CheckOut</title>
      </Head>
        <div className="my-10 mx-5">
            <h1 className="text-3xl font-bold">Check Out Page</h1>
        </div>
      { cartItem.length ?   <div>
        <CheckOutCart />
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
            <CheckoutForm />
        </Elements>
        )}
    </div> :
    <div>
        <h1>Your Cart is Currently Empty</h1>
    </div>
    
}

    </div>
  );
}

export default dynamic(() => Promise.resolve(CheckOut), { 
    ssr: false 
  })
  