export interface GetNftsRequest {
    nftMintAddress?: string;
    status?: string;
    paginationSize?: number;
    lastEvaluatedKey?: string;
    nftOwnerAddress?: string;
};