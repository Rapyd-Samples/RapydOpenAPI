export interface Discount {
  id: string;
  coupon: object;
  customer: string;
  end: number;
  start: number;
  subscription: string;
  number_of_uses: number;
  valid: boolean;
}
