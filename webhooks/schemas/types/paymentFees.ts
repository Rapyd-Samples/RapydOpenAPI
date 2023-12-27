import { FxFee } from "./fxFee";
import { TransactionFee } from "./transactionFee";

export interface PaymentFees {
  fx_fee: FxFee;
  net_fees: number;
  gross_fees: number;
  transaction_fee: TransactionFee;
  total_merchant_fees: number;
}
