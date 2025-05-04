import axios from "axios";
import { ENDPOINTS } from './endpoints';
import { GetPresignedVendorMediaFileUrlRequest, UploadVendorListingRequest, CancelVendorListingRequest } from "./requests";
import { GetVendorInfoResponse, GetNftsResponse, GetLoansResponse, GetVendorListingsResponse, GetPresignedVendorMediaFileUrlResponse, UploadVendorListingResponse, GetVendorListingByIdResponse, CancelVendorListingResponse, GetPresignedUrlForViewingResponse } from "./responses";
/**
 * This class is used to interact with the vault API.
 */
export class AscendryClient {
    private readonly apiKey: string;

    /**
     * Constructor for the VaultApi class.
     * @param apiKey - The API key for the Ascendry Vault API.
     */
    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    /**
     * Submits a transaction to the RPC.
     * @param serializedTransaction - Based64 encoded signed transaction.
     * @returns The signature of the transaction.
     */
    public async submitTransactionToRpc(serializedTransaction: string): Promise<string> {
        const rpcResponse = await axios.post(
          ENDPOINTS.SUBMIT_TRANSACTION_TO_RPC,
          { transaction: serializedTransaction },
          {
            headers: {
              "Content-Type": "application/json",
              "x-api-key": this.apiKey,
            }
          }
        );

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
    async getVaultNfts(
        nftOwnerAddress: string | undefined, 
        lastEvaluatedKey: string, 
    ): Promise<GetNftsResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_VAULT_NFTS(nftOwnerAddress, lastEvaluatedKey, '12'),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return {
            nfts: response.data.nfts,
            lastEvaluatedKey: response.data.lastEvaluatedKey
        } as GetNftsResponse;
    }

    /**
     * Gets the vault NFTs for a given mint address.
     * @param nftMintAddress - The mint address of the NFTs to get.
     * @returns The vault NFTs.
     */
    async getVaultNftsByMint(
        nftMintAddress: string,
    ): Promise<GetNftsResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_VAULT_NFTS_BY_MINT(nftMintAddress),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return {
            nfts: response.data.nfts,
            lastEvaluatedKey: response.data.lastEvaluatedKey
        } as GetNftsResponse;
    }

    async getLoansByNftMintAddress(nftMintAddress: string): Promise<GetLoansResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_LOANS_BY_NFT_MINT_ADDRESS(nftMintAddress),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data as GetLoansResponse;
    }

    /**
     * Gets the loans for a given status.
     * @param status - The status of the loans to get.
     * @param lastEvaluatedKey - The last evaluated key of the loans to get.
     * @param paginationSize - The pagination size of the loans to get.
     * @returns The loans.
     */
    async getLoans(
        status?: string, 
        lastEvaluatedKey?: string, 
        paginationSize: number = 5
    ): Promise<GetLoansResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_LOANS(status, lastEvaluatedKey, paginationSize),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data as GetLoansResponse;
    }

    /**
     * Gets the vendor info for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor info.
     */
    async getVendorInfo(vendorAddress: string): Promise<GetVendorInfoResponse> {
        try {
            const response = await axios.get(
                ENDPOINTS.GET_VENDOR_INFO(vendorAddress),
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this.apiKey,
                    }
                }
            );
            return response.data as GetVendorInfoResponse;
        } catch (error) {
            // Return empty response when the vendor is not found or not authorized
            return {
                vendorAddress: '',
                vendorName: '',
                createdAt: 0
            } as GetVendorInfoResponse;
        }
    }

    /**
     * Gets the presigned URL for a given file.
     * @param params - The params for the presigned URL.
     * @returns The presigned URL.
     */
    async getPresignedUrl(getPresignedUrlRequest: GetPresignedVendorMediaFileUrlRequest): Promise<GetPresignedVendorMediaFileUrlResponse> {
        try {
            const response = await axios.post(
                ENDPOINTS.GET_PRESIGNED_URL,
                getPresignedUrlRequest,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this.apiKey,
                    }
                }
            );
            return response.data as GetPresignedVendorMediaFileUrlResponse;
        } catch (error) {
            console.error('Failed to get presigned URL:', error);
            throw error;
        }
    }

    /**
     * Creates a vendor listing.
     * @param data - The data for the vendor listing.
     * @returns The vendor listing.
     */
    async createVendorListing(uploadVendorListingRequest: UploadVendorListingRequest): Promise<UploadVendorListingResponse> {
        try {
            const response = await axios.post(
                ENDPOINTS.CREATE_VENDOR_LISTING,
                uploadVendorListingRequest,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this.apiKey,
                    }
                }
            );
            return response.data as UploadVendorListingResponse;
        } catch (error) {
            console.error('Failed to create listing:', error);
            throw error;
        }
    }

    /**
     * Gets the vendor listings for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor listings.
     */
    async getVendorListings(vendorAddress: string): Promise<GetVendorListingsResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_VENDOR_LISTINGS(vendorAddress),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data as GetVendorListingsResponse;
    }

    async getVendorListingById(listingId: string): Promise<GetVendorListingByIdResponse> {
        const response = await axios.get(
            ENDPOINTS.GET_VENDOR_LISTING_BY_LISTING_ID(listingId),
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data as GetVendorListingByIdResponse;
    }

    /**
     * Stakes an NFT for a loan.
     * @param nftMintAddress - The mint address of the NFT to stake.
     * @param loanAmountInSOL - The amount of SOL to loan.
     * @param loanInterestInSOL - The interest rate for the loan.
     * @param loanDurationInSeconds - The duration of the loan in seconds.
     * @param nftOwnerAddress - The owner address of the NFT to stake.
     * @returns The signature of the transaction.
     */ 
    public async stakeNftForLoan(
        nftMintAddress: string,
        loanAmountInSOL: number,
        loanInterestInSOL: number,
        loanDurationInSeconds: number,
        nftOwnerAddress: string
    ): Promise<string> {
        const response = await axios.post(
            ENDPOINTS.TRANSACTIONS.STAKE_NFT_FOR_LOAN,
            {
                nftMintAddress,
                loanAmountInSOL,
                loanInterestInSOL,
                loanDurationInSeconds,
                nftOwnerAddress
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        console.log("API Response:", response.data);
        return response.data.transaction;
    }

    /**
     * Cancels a loan request.
     * @param nftMintAddress - The mint address of the NFT to cancel the loan for.
     * @param nftOwnerAddress - The owner address of the NFT to cancel the loan for.
     * @returns The signature of the transaction.
     */
    public async cancelLoanRequest(nftMintAddress: string, nftOwnerAddress: string): Promise<string> {
        const response = await axios.post(
            ENDPOINTS.TRANSACTIONS.CANCEL_LOAN_REQUEST,
            {
                nftMintAddress,
                nftOwnerAddress
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data.transaction;
    }

    /**
     * Provides loan liquidity to a borrower.
     * @param nftMintAddress - The mint address of the NFT to provide loan liquidity for.
     * @param borrowerAddress - The address of the borrower to provide loan liquidity to.
     * @param lenderAddress - The address of the lender to provide loan liquidity to.
     * @returns The signature of the transaction.
     */ 
    public async provideLoanLiquidity(nftMintAddress: string, borrowerAddress: string, lenderAddress: string): Promise<string> {
        const response = await axios.post(
            ENDPOINTS.TRANSACTIONS.PROVIDE_LOAN_LIQUIDITY,
            {
                nftMintAddress,
                borrowerAddress,
                lenderAddress
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data.transaction;
    }

    /**
     * Repays a loan.
     * @param nftMintAddress - The mint address of the NFT to repay the loan for.
     * @param borrowerAddress - The address of the borrower to repay the loan for.
     * @returns The signature of the transaction.
     */
    public async repayLoan(nftMintAddress: string, borrowerAddress: string): Promise<string> {
        const response = await axios.post(
            ENDPOINTS.TRANSACTIONS.REPAY_LOAN,
            {
                nftMintAddress,
                borrowerAddress
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data.transaction;
    }

    /**
     * Generates a memo transaction.
     * @param data - The data for the memo transaction.
     * @returns The memo transaction.
     */
    async generateMemoTransaction(data: {
        memoMessage: string;
        signerAddress: string;
    }): Promise<string> {
        const response = await axios.post(
            ENDPOINTS.GENERATE_MEMO_TRANSACTION,
            data,
            {
                headers: {
                    "Content-Type": "application/json",
                    "x-api-key": this.apiKey,
                }
            }
        );
        return response.data.transaction;
    }

    async cancelVendorListing(cancelVendorListingRequest: CancelVendorListingRequest): Promise<CancelVendorListingResponse> {
        try {
            const response = await axios.post(
                ENDPOINTS.CANCEL_VENDOR_LISTING,
                cancelVendorListingRequest,
                {
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this.apiKey,
                    }
                }
            );
            return response.data as CancelVendorListingResponse;
        } catch (error) {
            console.error('Failed to cancel listing:', error);
            throw error;
        }
    }

    async getPresignedUrlForViewing(fileKey: string): Promise<GetPresignedUrlForViewingResponse> {
        try {
            const response = await axios.get(
                ENDPOINTS.GET_PRESIGNED_URL_FOR_VIEWING,
                {
                    params: { fileKey },
                    headers: {
                        "Content-Type": "application/json",
                        "x-api-key": this.apiKey,
                    }
                }
            );
            console.log('response.data', response.data);
            return response.data as GetPresignedUrlForViewingResponse;
        } catch (error) {
            console.error('Failed to get presigned URL for viewing:', error);
            throw error;
        }
    }
}
