const VAULT_BASE_API_URL: string = 'https://ycz7f841lj.execute-api.us-west-2.amazonaws.com/dev/v1';

export const ENDPOINTS = {
    SUBMIT_TRANSACTION_TO_RPC: `${VAULT_BASE_API_URL}/submitTransactionToRpc`,
    GET_VAULT_NFTS(nftOwnerAddress: string | undefined, lastEvaluatedKey: string = "", paginationSize: string) {
        let endpoint = `${VAULT_BASE_API_URL}/getVaultNfts?lastEvaluatedKey=${lastEvaluatedKey}&paginationSize=${paginationSize}`;
        if (nftOwnerAddress) {
            endpoint += `&nftOwnerAddress=${nftOwnerAddress}`;
        }
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
        STAKE_NFT_FOR_LOAN: `${VAULT_BASE_API_URL}/stakeNftForLoan`,
        CANCEL_LOAN_REQUEST: `${VAULT_BASE_API_URL}/cancelLoanRequest`,
        PROVIDE_LOAN_LIQUIDITY: `${VAULT_BASE_API_URL}/provideLoanLiquidity`,
        REPAY_LOAN: `${VAULT_BASE_API_URL}/repayLoan`
    },
};
