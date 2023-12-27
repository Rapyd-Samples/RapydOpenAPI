export interface EwalletPayment {
  ewallet_id: string;
  amount: number;
  refunded_amount: number;
  released_amount?: number;
}
