import { EscrowReleaseEwallet } from "./escrowReleaseEwallet";

export interface EscrowRelease {
  id: string;
  amount: number;
  trigger: string;
  proportional_release: boolean;
  created_at: number;
  ewallets: Array<EscrowReleaseEwallet>;
}
