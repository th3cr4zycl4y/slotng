// This is your test secret API key.
const stripe = require("stripe")(process.env.NEXT_PRIVATE_STRIPE_SECRET_KEY);


export default async function handler(req, res) {
  const { totalPrice } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: totalPrice,
    currency: "ngn",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};