const VAULT_BASE_API_URL = 'https://ycz7f841lj.execute-api.us-west-2.amazonaws.com/dev/v1';
export const ENDPOINTS = {
    SUBMIT_TRANSACTION_TO_RPC: `${VAULT_BASE_API_URL}/submitTransactionToRpc`,
    GET_VAULT_NFTS(nftOwnerAddress, lastEvaluatedKey = "", paginationSize = 8) {
        let endpoint = `${VAULT_BASE_API_URL}/getVaultNfts?lastEvaluatedKey=${lastEvaluatedKey}&paginationSize=${paginationSize.toString()}`;
        if (nftOwnerAddress) {
            endpoint += `&nftOwnerAddress=${nftOwnerAddress}`;
        }
        return endpoint;
    },
    GET_NFT_HISTORY(nftMintAddress, lastEvaluatedKey = "", paginationSize = 5) {
        let endpoint = `${VAULT_BASE_API_URL}/getNftHistory?nftMintAddress=${nftMintAddress}&lastEvaluatedKey=${lastEvaluatedKey}&paginationSize=${paginationSize.toString()}`;
        return endpoint;
    },
    GET_VAULT_NFTS_BY_MINT(nftMintAddress) {
        return `${VAULT_BASE_API_URL}/getVaultNfts?nftMintAddress=${nftMintAddress}`;
    },
    GET_LOANS_BY_NFT_MINT_ADDRESS(nftMintAddress) {
        return `${VAULT_BASE_API_URL}/getLoans?nftMintAddress=${nftMintAddress}`;
    },
    GET_LOANS(status, lastEvaluatedKey, paginationSize = 5) {
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
    GET_ASSET_REDEMPTION_INFO(nftMintAddress) {
        return `${VAULT_BASE_API_URL}/getAssetRedemptionInfo?nftMintAddress=${nftMintAddress}`;
    },
    GET_VENDOR_INFO(vendorAddress) {
        return `${VAULT_BASE_API_URL}/getVendorInfo?vendorAddress=${vendorAddress}`;
    },
    GET_PRESIGNED_URL: `${VAULT_BASE_API_URL}/getPresignedUrl`,
    GET_PRESIGNED_URL_FOR_VIEWING: `${VAULT_BASE_API_URL}/getPresignedUrlForViewing`,
    CREATE_VENDOR_LISTING: `${VAULT_BASE_API_URL}/createVendorListing`,
    CANCEL_VENDOR_LISTING: `${VAULT_BASE_API_URL}/cancelVendorListing`,
    SUBMIT_ASSET_REDEMPTION_REQUEST: `${VAULT_BASE_API_URL}/submitAssetRedemptionRequest`,
    GENERATE_MEMO_TRANSACTION: `${VAULT_BASE_API_URL}/generateMemoTransaction`,
    GET_VENDOR_LISTINGS(vendorAddress) {
        return `${VAULT_BASE_API_URL}/getVendorListings?vendorAddress=${vendorAddress}`;
    },
    GET_VENDOR_LISTING_BY_LISTING_ID(listingId) {
        return `${VAULT_BASE_API_URL}/getVendorListingByListingId?listingId=${listingId}`;
    },
    CANCEL_LISTING(listingId) {
        return `${VAULT_BASE_API_URL}/cancelListing?listingId=${listingId}`;
    },
    TRANSACTIONS: {
        GENERATE_UNSIGNED_LOAN_TRANSACTION: `${VAULT_BASE_API_URL}/generateUnsignedLoanTransaction`,
        GENERATE_UNSIGNED_ASSET_REDEMPTION_TRANSACTION: `${VAULT_BASE_API_URL}/generateUnsignedAssetRedemptionTransaction`,
    },
};
