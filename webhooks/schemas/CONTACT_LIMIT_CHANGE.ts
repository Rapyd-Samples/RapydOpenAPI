import { Limit } from './types/limit';

export interface CONTACT_LIMIT_CHANGE {
  limits: Array<Limit>;
  contact: string;
  country: string;
  ewallet: string;
  wallet_type: string;
  contact_type: string;
}
