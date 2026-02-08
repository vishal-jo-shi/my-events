export const ensureStripe = (stripe) => {
  if (!stripe) {
    throw new Error("Stripe is not configured properly");
  }
};