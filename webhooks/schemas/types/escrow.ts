import { EscrowReleases } from "./escrowReleases";

export interface Escrow {
  id: string;
  status: string;
  payment: string;
  currency: string;
  created_at: number;
  updated_at: number;
  amount_on_hold: number;
  escrow_release_days: number;
  total_amount_released: number;
  last_payment_completion: number;
  escrow_releases: EscrowReleases;
}
