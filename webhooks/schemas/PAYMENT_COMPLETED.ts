import { Escrow } from "../types/escrow";
import { Address } from "../types/address";
import { Dispute } from "../types/dispute";
import { Refunds } from "../types/refunds";
import { PaymentFees } from "../types/paymentFees";
import { RemitterInformation } from "../types/remitterInformation";
import { PaymentMethodData } from "../types/paymentMethodData";
import { EwalletPayment } from "../types/ewalletPayment";

export interface PAYMENT_COMPLETED {
  id: string;
  mid: string;
  paid: boolean;
  order: any;
  amount: number;
  escrow: Escrow;
  status: string;
  address: Address;
  dispute: Dispute;
  fx_rate: number;
  invoice: string;
  outcome: any | false;
  paid_at: number;
  refunds: Refunds;
  captured: boolean;
  ewallets: Array<EwalletPayment>;
  metadata: object;
  refunded: boolean;
  auth_code: string;
  flow_type: string;
  created_at: number;
  error_code: string;
  ewallet_id: string;
  expiration: number;
  fixed_side: string;
  is_partial: boolean;
  description: string;
  next_action: string;
  country_code: string;
  failure_code: string;
  instructions: object;
  payment_fees: PaymentFees;
  redirect_url: string;
  visual_codes: object;
  cancel_reason: string;
  currency_code: string;
  group_payment: string;
  receipt_email: string;
  textual_codes: object;
  customer_token: string;
  payment_method: string;
  receipt_number: string;
  transaction_id: string;
  failure_message: string;
  initiation_type: string;
  original_amount: number;
  refunded_amount: number;
  error_payment_url: string;
  payment_method_data: PaymentMethodData;
  payment_method_type: string;
  save_payment_method: boolean;
  complete_payment_url: string;
  remitter_information: RemitterInformation;
  statement_descriptor: string;
  merchant_reference_id: string;
  payment_method_options: object;
  merchant_requested_amount: number;
  merchant_requested_currency: string;
  payment_method_type_category: string;
}
