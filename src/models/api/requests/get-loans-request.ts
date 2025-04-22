export interface GetLoansRequest {
    nftMintAddress?: string;
    isActive?: boolean;
    paginationSize?: number;
    lastEvaluatedKey?: string;
};