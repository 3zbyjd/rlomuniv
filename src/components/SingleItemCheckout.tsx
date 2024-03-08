import { StripeElementsOptions, loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutPage from "./CheckoutPage";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_rLzK97qwfIVJIK4W3AQnGdK1");

function SingleItemCheckout() {
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

  return (
    <Elements stripe={stripePromise} options={newOptons}>
      <CheckoutPage />
    </Elements>
  );
}

export default SingleItemCheckout;
