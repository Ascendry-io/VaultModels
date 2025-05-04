/**
 * The type of loan instruction.
 */
export const STAKE_NFT_FOR_LOAN = 'stake_nft_for_loan';
export const CANCEL_LOAN_REQUEST = 'cancel_loan_request';
export const PROVIDE_LOAN_LIQUIDITY = 'provide_loan_liquidity';
export const REPAY_LOAN = 'repay_loan';

export enum LoanInstructionType {
    StakeNftForLoan = STAKE_NFT_FOR_LOAN,
    CancelLoanRequest = CANCEL_LOAN_REQUEST,
    ProvideLoanLiquidity = PROVIDE_LOAN_LIQUIDITY,
    RepayLoan = REPAY_LOAN,
};