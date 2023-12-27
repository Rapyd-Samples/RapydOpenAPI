import { Refund } from "./refund";

export interface Refunds {
  data: Array<Refund>;
  has_more: boolean;
  total_count: number;
  url: string;
}
