/**
 * The base loan instruction request.
 */
export interface BaseLoanInstructionRequest {
    nftMintAddress: string;
    originalNftOwnerAddress: string;
    loanInstructionType: string;
};
