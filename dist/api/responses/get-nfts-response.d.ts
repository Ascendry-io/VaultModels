import { NFTData } from "../../nfts";
/**
 * Represents a get NFTs response object.
 */
export interface GetNftsResponse {
    nfts: NFTData[];
    lastEvaluatedKey?: string;
}
