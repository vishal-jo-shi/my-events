import Stripe from "stripe";

export const  getStripe = ()=>{
  let stripe = null;
  if (process.env.STRIPE_SECRET_KEY) {
    stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  } else {
    console.error("❌ STRIPE_SECRET_KEY is not defined");
  }

  return  stripe;
}

