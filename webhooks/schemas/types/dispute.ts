import { DisputeEvidence } from "./disputeEvidence";
import { PaymentMethodData } from "./paymentMethodData";

export interface Dispute {
  id: string;
  token: string;
  status: string;
  amount: number;
  currency: string;
  dispute_category: string;
  dispute_reason_description: string;
  original_transaction_currency: string;
  original_transaction_amount: number;
  original_dispute_amount: number;
  original_dispute_currency: string;
  original_transaction_id: string;
  ewallet_id: string;
  central_processing_date: string;
  created_at: number;
  updated_at: number;
  due_date: number;
  payment_method: string;
  payment_method_data: PaymentMethodData;
  rate: number;
  evidence: DisputeEvidence;
  evidence_reason_code: string;
  pre_dispute: boolean;
  arn: string;
}
