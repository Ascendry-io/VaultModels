import { NFTData } from "../../models/nfts";

/**
 * Represents a get NFTs response object.
 */
export interface GetNftsResponse {
  nfts: NFTData[];
  lastEvaluatedKey?: string;
}
