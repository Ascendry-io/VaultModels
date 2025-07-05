/**
 * Response body for getting solana network metrics.
 */
export interface GetNetworkMetricsResponse {
  timestamp: number;
  tps: number;
  circulatingSupplyInSol: number;
  nonCirculatingSupplyInSol: number;
}
