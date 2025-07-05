/**
 * Represents a get NFT history request object.
 */
export interface GetNftHistoryRequest {
  nftMintAddress: string;
  paginationSize?: string;
  lastEvaluatedKey?: string;
}
