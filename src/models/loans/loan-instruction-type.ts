/**
 * The type of loan instruction.
 */
export enum LoanInstructionType {
    StakeNftForLoan = 'stake_nft_for_loan',
    CancelLoanRequest = 'cancel_loan_request',
    ProvideLoanLiquidity = 'provide_loan_liquidity',
    RepayLoan = 'repay_loan',
};

/**
 * Constants for loan instruction types, for use in environments where enums might cause issues
 */
export const LOAN_INSTRUCTION_TYPE = {
    STAKE_NFT_FOR_LOAN: 'stake_nft_for_loan' as const,
    CANCEL_LOAN_REQUEST: 'cancel_loan_request' as const,
    PROVIDE_LOAN_LIQUIDITY: 'provide_loan_liquidity' as const,
    REPAY_LOAN: 'repay_loan' as const,
} as const;
