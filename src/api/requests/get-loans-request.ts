/**
 * Represents a get loans request object.
 */
export interface GetLoansRequest {
    nftMintAddress?: string;
    isActive?: boolean;
    paginationSize?: string;
    lastEvaluatedKey?: string;
};