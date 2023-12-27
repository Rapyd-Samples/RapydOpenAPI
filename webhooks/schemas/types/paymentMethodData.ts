import { BinDetails } from "./binDetails";

export interface PaymentMethodData {
  id: string;
  name: string;
  type: string;
  image: string;
  last4: string;
  category: string;
  metadata: object;
  acs_check: string;
  cvv_check: string;
  bin_details: BinDetails;
  next_action: string;
  webhook_url: string;
  expiration_year: string;
  expiration_month: string;
  fingerprint_token: string;
  supporting_documentation: string;
}
