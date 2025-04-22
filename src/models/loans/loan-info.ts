export interface LoanInfo {
    nftOwnerAddress: string;
    startTime: number;
    isActive: boolean;
    loanAmount: number;
    sellerFeeBasisPoints: number;
    lenderAddress: string;
    loanRequestTimestamp: number;
    nftMintAddress: string;
    interestAmount: number;
    lastUpdatedTimestamp: number;
    duration: number;
};