import axios from "axios";
import { ENDPOINTS } from './endpoints';
/**
 * This class is used to interact with the vault API.
 */
export class AscendryClient {
    apiKey;
    /**
     * Constructor for the VaultApi class.
     * @param apiKey - The API key for the Ascendry Vault API.
     */
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Submits a transaction to the RPC.
     * @param serializedTransaction - Based64 encoded signed transaction.
     * @returns The signature of the transaction.
     */
    async submitTransactionToRpc(serializedTransaction) {
        const rpcResponse = await axios.post(ENDPOINTS.SUBMIT_TRANSACTION_TO_RPC, { transaction: serializedTransaction }, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        console.log("API Response:", rpcResponse.data);
        return rpcResponse.data.signature;
    }
    /**
     * Gets the vault NFTs for a given owner address.
     * @param nftOwnerAddress - The owner address of the NFTs to get.
     * @param lastEvaluatedKey - The last evaluated key of the NFTs to get.
     * @param paginationSize - The pagination size of the NFTs to get.
     * @returns The vault NFTs.
     */
    async getVaultNfts(nftOwnerAddress, lastEvaluatedKey, paginationSize) {
        const response = await axios.get(ENDPOINTS.GET_VAULT_NFTS(nftOwnerAddress, lastEvaluatedKey, paginationSize), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return {
            nfts: response.data.nfts,
            lastEvaluatedKey: response.data.lastEvaluatedKey
        };
    }
    /**
     * Gets the vault NFTs for a given mint address.
     * @param nftMintAddress - The mint address of the NFTs to get.
     * @returns The vault NFTs.
     */
    async getVaultNftsByMint(nftMintAddress) {
        const response = await axios.get(ENDPOINTS.GET_VAULT_NFTS_BY_MINT(nftMintAddress), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return {
            nfts: response.data.nfts,
            lastEvaluatedKey: response.data.lastEvaluatedKey
        };
    }
    async getNftHistory(nftMintAddress, lastEvaluatedKey, paginationSize) {
        const response = await axios.get(ENDPOINTS.GET_NFT_HISTORY(nftMintAddress, lastEvaluatedKey, paginationSize), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    async getLoansByNftMintAddress(nftMintAddress) {
        const response = await axios.get(ENDPOINTS.GET_LOANS_BY_NFT_MINT_ADDRESS(nftMintAddress), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Gets the loans for a given status.
     * @param status - The status of the loans to get.
     * @param lastEvaluatedKey - The last evaluated key of the loans to get.
     * @param paginationSize - The pagination size of the loans to get.
     * @returns The loans.
     */
    async getLoans(status, lastEvaluatedKey, paginationSize) {
        const response = await axios.get(ENDPOINTS.GET_LOANS(status, lastEvaluatedKey, paginationSize), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Gets the vendor info for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor info.
     */
    async getVendorInfo(vendorAddress) {
        try {
            const response = await axios.get(ENDPOINTS.GET_VENDOR_INFO(vendorAddress), {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            });
            return response.data;
        }
        catch (error) {
            // Return empty response when the vendor is not found or not authorized
            return {
                vendorAddress: '',
                vendorName: '',
                createdAt: 0
            };
        }
    }
    /**
     * Gets the presigned URL for a given file.
     * @param params - The params for the presigned URL.
     * @returns The presigned URL.
     */
    async getPresignedUrl(getPresignedUrlRequest) {
        try {
            const response = await axios.post(ENDPOINTS.GET_PRESIGNED_URL, getPresignedUrlRequest, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Failed to get presigned URL:', error);
            throw error;
        }
    }
    /**
     * Creates a vendor listing.
     * @param data - The data for the vendor listing.
     * @returns The vendor listing.
     */
    async createVendorListing(uploadVendorListingRequest) {
        try {
            const response = await axios.post(ENDPOINTS.CREATE_VENDOR_LISTING, uploadVendorListingRequest, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Failed to create listing:', error);
            throw error;
        }
    }
    /**
     * Gets the vendor listings for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor listings.
     */
    async getVendorListings(vendorAddress) {
        const response = await axios.get(ENDPOINTS.GET_VENDOR_LISTINGS(vendorAddress), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Gets the vendor listing by listing ID.
     * @param listingId - The ID of the listing to get.
     * @returns The vendor listing.
     */
    async getVendorListingById(listingId) {
        const response = await axios.get(ENDPOINTS.GET_VENDOR_LISTING_BY_LISTING_ID(listingId), {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Generates an unsigned loan transaction.
     * @param loanInstructionRequest - The loan instruction request.
     * @returns The unsigned loan transaction.
     */
    async generateUnsignedLoanTransaction(loanInstructionRequest) {
        const response = await axios.post(ENDPOINTS.TRANSACTIONS.GENERATE_UNSIGNED_LOAN_TRANSACTION, loanInstructionRequest, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Generates an unsigned asset redemption transaction.
     * @param assetRedemptionInstructionRequest - The asset redemption instruction request.
     * @returns The unsigned asset redemption transaction.
     */
    async generateUnsignedAssetRedemptionTransaction(assetRedemptionInstructionRequest) {
        const response = await axios.post(ENDPOINTS.TRANSACTIONS.GENERATE_UNSIGNED_ASSET_REDEMPTION_TRANSACTION, assetRedemptionInstructionRequest, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    /**
     * Generates a memo transaction.
     * @param data - The data for the memo transaction.
     * @returns The memo transaction.
     */
    async generateMemoTransaction(data) {
        const response = await axios.post(ENDPOINTS.GENERATE_MEMO_TRANSACTION, data, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data.transaction;
    }
    /**
     * Submits an asset redemption request.
     * @param submitAssetRedemptionRequest - The submit asset redemption request.
     * @returns The submit asset redemption response.
     */
    async submitAssetRedemptionRequest(submitAssetRedemptionRequest) {
        const response = await axios.post(ENDPOINTS.SUBMIT_ASSET_REDEMPTION_REQUEST, submitAssetRedemptionRequest, {
            headers: {
                "Content-Type": "application/json",
                "x-api-key": this.apiKey,
            }
        });
        return response.data;
    }
    async cancelVendorListing(cancelVendorListingRequest) {
        try {
            const response = await axios.post(ENDPOINTS.CANCEL_VENDOR_LISTING, cancelVendorListingRequest, {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            });
            return response.data;
        }
        catch (error) {
            console.error('Failed to cancel listing:', error);
            throw error;
        }
    }
    async getPresignedUrlForViewing(fileKey) {
        try {
            const response = await axios.get(ENDPOINTS.GET_PRESIGNED_URL_FOR_VIEWING, {
                params: { fileKey },
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            });
            console.log('response.data', response.data);
            return response.data;
        }
        catch (error) {
            console.error('Failed to get presigned URL for viewing:', error);
            throw error;
        }
    }
}
