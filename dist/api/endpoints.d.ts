export declare const ENDPOINTS: {
    SUBMIT_TRANSACTION_TO_RPC: string;
    GET_VAULT_NFTS(nftOwnerAddress: string | undefined, lastEvaluatedKey: string | undefined, paginationSize: string): string;
    GET_NFT_HISTORY(nftMintAddress: string, lastEvaluatedKey: string | undefined, paginationSize: string): string;
    GET_VAULT_NFTS_BY_MINT(nftMintAddress: string): string;
    GET_LOANS_BY_NFT_MINT_ADDRESS(nftMintAddress: string): string;
    GET_LOANS(status?: string, lastEvaluatedKey?: string, paginationSize?: number): string;
    GET_VENDOR_INFO(vendorAddress: string): string;
    GET_PRESIGNED_URL: string;
    GET_PRESIGNED_URL_FOR_VIEWING: string;
    CREATE_VENDOR_LISTING: string;
    CANCEL_VENDOR_LISTING: string;
    GENERATE_MEMO_TRANSACTION: string;
    GET_VENDOR_LISTINGS(vendorAddress: string): string;
    GET_VENDOR_LISTING_BY_LISTING_ID(listingId: string): string;
    CANCEL_LISTING(listingId: string): string;
    TRANSACTIONS: {
        GENERATE_UNSIGNED_LOAN_TRANSACTION: string;
    };
};
