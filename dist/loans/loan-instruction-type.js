/**
 * The type of loan instruction.
 */
export const STAKE_NFT_FOR_LOAN = 'stake_nft_for_loan';
export const CANCEL_LOAN_REQUEST = 'cancel_loan_request';
export const PROVIDE_LOAN_LIQUIDITY = 'provide_loan_liquidity';
export const REPAY_LOAN = 'repay_loan';
export var LoanInstructionType;
(function (LoanInstructionType) {
    LoanInstructionType["StakeNftForLoan"] = "stake_nft_for_loan";
    LoanInstructionType["CancelLoanRequest"] = "cancel_loan_request";
    LoanInstructionType["ProvideLoanLiquidity"] = "provide_loan_liquidity";
    LoanInstructionType["RepayLoan"] = "repay_loan";
})(LoanInstructionType || (LoanInstructionType = {}));
;
