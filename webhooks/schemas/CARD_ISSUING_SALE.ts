export interface CARD_ISSUING_SALE {
  id: string;
  bin: string;
  last4: string;
  amount: number;
  card_id: string;
  fx_rate: number;
  currency: string;
  auth_code: string;
  created_at: number;
  card_program: string;
  pos_entry_mode: string;
  issuing_txn_type: string;
  card_authorization: string;
  original_txn_amount: number;
  original_txn_currency: string;
  wallet_transaction_id: string;
  merchant_category_code: string;
  merchant_name_location: string;
  original_transaction_id: string;
  authorization_approved_by: string;
  retrieval_reference_number: string;
  systems_trace_audit_number: string;
}
