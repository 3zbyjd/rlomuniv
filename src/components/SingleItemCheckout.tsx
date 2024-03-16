import { useState, useEffect } from "react";
import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = await loadStripe("pk_test_rLzK97qwfIVJIK4W3AQnGdK1");

function SingleItemCheckout() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const options = {
    business: "RedeemingLove",
    mode: "payment",
    amount: 1099,
    currency: "usd",
    appearance: { theme: "stripe" },
    layout: {
      type: "accordion",
      defaultCollapsed: false,
      radios: true,
      spacedAccordionItems: false,
    },
  };

  let newOptons = options as StripeElementsOptions;
  console.log(newOptons);
  console.log(clientSecret);
  console.log(stripePromise);
  return (
    // <div className="App">
    //   {clientSecret && (
    <Elements stripe={stripePromise} options={newOptons}>
      <CheckoutForm />
    </Elements>
    //   )}
    // </div>
  );
}

export default SingleItemCheckout;
