import { NFTData } from "../../nfts";

export interface GetNftsResponse {
    nfts: NFTData[];
    lastEvaluatedKey?: string;
};
