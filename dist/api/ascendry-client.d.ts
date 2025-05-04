import { GetPresignedVendorMediaFileUrlRequest, UploadVendorListingRequest, CancelVendorListingRequest } from "./requests";
import { GetVendorInfoResponse, GetNftsResponse, GetLoansResponse, GetVendorListingsResponse, GetPresignedVendorMediaFileUrlResponse, UploadVendorListingResponse, GetVendorListingByIdResponse, CancelVendorListingResponse, GetPresignedUrlForViewingResponse } from "./responses";
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
    getVendorListingById(listingId: string): Promise<GetVendorListingByIdResponse>;
    /**
     * Stakes an NFT for a loan.
     * @param nftMintAddress - The mint address of the NFT to stake.
     * @param loanAmountInSOL - The amount of SOL to loan.
     * @param loanInterestInSOL - The interest rate for the loan.
     * @param loanDurationInSeconds - The duration of the loan in seconds.
     * @param nftOwnerAddress - The owner address of the NFT to stake.
     * @returns The signature of the transaction.
     */
    stakeNftForLoan(nftMintAddress: string, loanAmountInSOL: number, loanInterestInSOL: number, loanDurationInSeconds: number, nftOwnerAddress: string): Promise<string>;
    /**
     * Cancels a loan request.
     * @param nftMintAddress - The mint address of the NFT to cancel the loan for.
     * @param nftOwnerAddress - The owner address of the NFT to cancel the loan for.
     * @returns The signature of the transaction.
     */
    cancelLoanRequest(nftMintAddress: string, nftOwnerAddress: string): Promise<string>;
    /**
     * Provides loan liquidity to a borrower.
     * @param nftMintAddress - The mint address of the NFT to provide loan liquidity for.
     * @param borrowerAddress - The address of the borrower to provide loan liquidity to.
     * @param lenderAddress - The address of the lender to provide loan liquidity to.
     * @returns The signature of the transaction.
     */
    provideLoanLiquidity(nftMintAddress: string, borrowerAddress: string, lenderAddress: string): Promise<string>;
    /**
     * Repays a loan.
     * @param nftMintAddress - The mint address of the NFT to repay the loan for.
     * @param borrowerAddress - The address of the borrower to repay the loan for.
     * @returns The signature of the transaction.
     */
    repayLoan(nftMintAddress: string, borrowerAddress: string): Promise<string>;
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
