const VAULT_BASE_API_URL: string = 'https://ycz7f841lj.execute-api.us-west-2.amazonaws.com/dev/v1';

export const ENDPOINTS = {
    SUBMIT_TRANSACTION_TO_RPC: `${VAULT_BASE_API_URL}/submitTransactionToRpc`,
    GET_VAULT_NFTS(nftOwnerAddress: string | undefined, lastEvaluatedKey: string = "", paginationSize: number = 8) {
        let endpoint = `${VAULT_BASE_API_URL}/getVaultNfts?lastEvaluatedKey=${lastEvaluatedKey}&paginationSize=${paginationSize.toString()}`;
        if (nftOwnerAddress) {
            endpoint += `&nftOwnerAddress=${nftOwnerAddress}`;
        }
        return endpoint;
    },
    GET_NFT_HISTORY(nftMintAddress: string, lastEvaluatedKey: string = "", paginationSize: number = 5) {
        let endpoint = `${VAULT_BASE_API_URL}/getNftHistory?nftMintAddress=${nftMintAddress}&lastEvaluatedKey=${lastEvaluatedKey}&paginationSize=${paginationSize.toString()}`;
        return endpoint;
    },
    GET_VAULT_NFTS_BY_MINT(nftMintAddress: string) {
        return `${VAULT_BASE_API_URL}/getVaultNfts?nftMintAddress=${nftMintAddress}`;
    },
    GET_LOANS_BY_NFT_MINT_ADDRESS(nftMintAddress: string) {
        return `${VAULT_BASE_API_URL}/getLoans?nftMintAddress=${nftMintAddress}`;
    },
    GET_LOANS(status?: string, lastEvaluatedKey?: string, paginationSize: number = 5) {
        let endpoint = `${VAULT_BASE_API_URL}/getLoans`;
        const params = new URLSearchParams();
        if (status) 
            params.append('status', status);
        if (lastEvaluatedKey) 
            params.append('lastEvaluatedKey', lastEvaluatedKey);
        params.append('paginationSize', paginationSize.toString());
        const queryString = params.toString();
        return queryString ? `${endpoint}?${queryString}` : endpoint;
    },
    GET_VENDOR_INFO(vendorAddress: string) {
        return `${VAULT_BASE_API_URL}/getVendorInfo?vendorAddress=${vendorAddress}`;
    },
    GET_PRESIGNED_URL: `${VAULT_BASE_API_URL}/getPresignedUrl`,
    GET_PRESIGNED_URL_FOR_VIEWING: `${VAULT_BASE_API_URL}/getPresignedUrlForViewing`,
    CREATE_VENDOR_LISTING: `${VAULT_BASE_API_URL}/createVendorListing`,
    CANCEL_VENDOR_LISTING: `${VAULT_BASE_API_URL}/cancelVendorListing`,
    GENERATE_MEMO_TRANSACTION: `${VAULT_BASE_API_URL}/generateMemoTransaction`,
    GET_VENDOR_LISTINGS(vendorAddress: string) {
        return `${VAULT_BASE_API_URL}/getVendorListings?vendorAddress=${vendorAddress}`;
    },
    GET_VENDOR_LISTING_BY_LISTING_ID(listingId: string) {
        return `${VAULT_BASE_API_URL}/getVendorListingByListingId?listingId=${listingId}`;
    },
    CANCEL_LISTING(listingId: string) {
        return `${VAULT_BASE_API_URL}/cancelListing?listingId=${listingId}`;
    },
    TRANSACTIONS: {
        GENERATE_UNSIGNED_LOAN_TRANSACTION: `${VAULT_BASE_API_URL}/generateUnsignedLoanTransaction`
    },
};
