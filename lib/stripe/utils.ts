import type Stripe from "stripe";

export const formatStripeAmount = (amount: number, currency: string) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format(amount / 100);
};

export const getLatestInvoice = (invoices: Stripe.ApiList<Stripe.Invoice>) => {
  return invoices.data.sort((a, b) => (b.created ?? 0) - (a.created ?? 0))[0];
};
