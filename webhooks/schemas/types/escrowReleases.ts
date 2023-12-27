import { EscrowRelease } from "./escrowRelease";

export interface EscrowReleases {
  data: Array<EscrowRelease>;
  has_more: boolean;
  total_count: number;
  url: string;
}
