import { Subscription } from "./subscription";

export interface Subscriptions {
  data: Array<Subscription>;
  has_more: boolean;
  total_count: number;
  url: string;
}
