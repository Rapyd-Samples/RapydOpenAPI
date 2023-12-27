import { Address } from './types/address';
import { Discount } from './types/discount';
import { Subscriptions } from './types/subscriptions';
import { PaymentMethods } from './types/paymentMethods';

export interface CUSTOMER_CREATED {
  id: string;
  name: string;
  email: string;
  ewallet: string;
  discount: Discount;
  metadata: object;
  addresses: Array<Address>;
  created_at: number;
  delinquent: boolean;
  description: string;
  phone_number: string;
  subscriptions: Subscriptions;
  invoice_prefix: string;
  business_vat_id: string;
  payment_methods: PaymentMethods;
  default_payment_method: string;
}
