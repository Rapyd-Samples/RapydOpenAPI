import { Discount } from "./discount";
import { SubscriptionItems } from "./subscriptionItems";

export interface Subscription {
  id: string;
  billing: string;
  billing_cycle_anchor: number;
  created_at: number;
  customer_token: string;
  days_until_due: number;
  metadate: object;
  tax_percent: number;
  cancel_at_period_end: number;
  canceled_at: number;
  current_period_end: number;
  current_period_start: number;
  discount: Discount;
  ended_at: number;
  subscription_items: SubscriptionItems;
  status: string;
  trial_end: number;
  trial_start: number;
  payment_method: string;
  payment_fields: object;
  payout_fields: object;
  type: string;
  simultaneous_invoice: boolean;
}
