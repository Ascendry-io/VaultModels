/**
 * Represents a get NFTs request object.
 */
export interface GetNftsRequest {
    nftMintAddress?: string;
    status?: string;
    paginationSize?: string;
    lastEvaluatedKey?: string;
    nftOwnerAddress?: string;
};