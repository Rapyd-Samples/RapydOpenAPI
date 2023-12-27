import { RefundEwallet } from "./refundEwallet";

export interface Refund {
  id: string;
  amount: number;
  payment: string;
  currency: string;
  failure_reason: string;
  metadata: object;
  reason: string;
  status: string;
  receipt_number: number;
  created_at: number;
  updated_at: number;
  merchant_reference_id: string;
  payment_created_at: number;
  payment_method_type: string;
  ewallets: Array<RefundEwallet>;
  proportional_refund: boolean;
  merchant_debited_amount: number;
  merchant_debited_currency: string;
  fixed_side: string;
  fx_rate: number;
}
