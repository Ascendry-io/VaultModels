import { GetPresignedVendorMediaFileUrlRequest, UploadVendorListingRequest, CancelVendorListingRequest, LoanInstructionRequest } from "./requests";
import { GetVendorInfoResponse, GetNftsResponse, GetLoansResponse, GetVendorListingsResponse, GetPresignedVendorMediaFileUrlResponse, UploadVendorListingResponse, GetVendorListingByIdResponse, CancelVendorListingResponse, GetPresignedUrlForViewingResponse, LoanTransactionResponse, GetNftHistoryResponse } from "./responses";
/**
 * This class is used to interact with the vault API.
 */
export declare class AscendryClient {
    private readonly apiKey;
    /**
     * Constructor for the VaultApi class.
     * @param apiKey - The API key for the Ascendry Vault API.
     */
    constructor(apiKey: string);
    /**
     * Submits a transaction to the RPC.
     * @param serializedTransaction - Based64 encoded signed transaction.
     * @returns The signature of the transaction.
     */
    submitTransactionToRpc(serializedTransaction: string): Promise<string>;
    /**
     * Gets the vault NFTs for a given owner address.
     * @param nftOwnerAddress - The owner address of the NFTs to get.
     * @param lastEvaluatedKey - The last evaluated key of the NFTs to get.
     * @param paginationSize - The pagination size of the NFTs to get.
     * @returns The vault NFTs.
     */
    getVaultNfts(nftOwnerAddress: string | undefined, lastEvaluatedKey: string): Promise<GetNftsResponse>;
    /**
     * Gets the vault NFTs for a given mint address.
     * @param nftMintAddress - The mint address of the NFTs to get.
     * @returns The vault NFTs.
     */
    getVaultNftsByMint(nftMintAddress: string): Promise<GetNftsResponse>;
    getNftHistory(nftMintAddress: string, lastEvaluatedKey: string, paginationSize: string): Promise<GetNftHistoryResponse>;
    getLoansByNftMintAddress(nftMintAddress: string): Promise<GetLoansResponse>;
    /**
     * Gets the loans for a given status.
     * @param status - The status of the loans to get.
     * @param lastEvaluatedKey - The last evaluated key of the loans to get.
     * @param paginationSize - The pagination size of the loans to get.
     * @returns The loans.
     */
    getLoans(status?: string, lastEvaluatedKey?: string, paginationSize?: number): Promise<GetLoansResponse>;
    /**
     * Gets the vendor info for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor info.
     */
    getVendorInfo(vendorAddress: string): Promise<GetVendorInfoResponse>;
    /**
     * Gets the presigned URL for a given file.
     * @param params - The params for the presigned URL.
     * @returns The presigned URL.
     */
    getPresignedUrl(getPresignedUrlRequest: GetPresignedVendorMediaFileUrlRequest): Promise<GetPresignedVendorMediaFileUrlResponse>;
    /**
     * Creates a vendor listing.
     * @param data - The data for the vendor listing.
     * @returns The vendor listing.
     */
    createVendorListing(uploadVendorListingRequest: UploadVendorListingRequest): Promise<UploadVendorListingResponse>;
    /**
     * Gets the vendor listings for a given vendor address.
     * @param vendorAddress - The address of the vendor to get.
     * @returns The vendor listings.
     */
    getVendorListings(vendorAddress: string): Promise<GetVendorListingsResponse>;
    /**
     * Gets the vendor listing by listing ID.
     * @param listingId - The ID of the listing to get.
     * @returns The vendor listing.
     */
    getVendorListingById(listingId: string): Promise<GetVendorListingByIdResponse>;
    /**
     * Generates an unsigned loan transaction.
     * @param loanInstructionRequest - The loan instruction request.
     * @returns The unsigned loan transaction.
     */
    generateUnsignedLoanTransaction(loanInstructionRequest: LoanInstructionRequest): Promise<LoanTransactionResponse>;
    /**
     * Generates a memo transaction.
     * @param data - The data for the memo transaction.
     * @returns The memo transaction.
     */
    generateMemoTransaction(data: {
        memoMessage: string;
        signerAddress: string;
    }): Promise<string>;
    cancelVendorListing(cancelVendorListingRequest: CancelVendorListingRequest): Promise<CancelVendorListingResponse>;
    getPresignedUrlForViewing(fileKey: string): Promise<GetPresignedUrlForViewingResponse>;
}
