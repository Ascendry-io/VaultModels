/**
 * The type of loan instruction.
 */
export var LoanInstructionType;
(function (LoanInstructionType) {
    LoanInstructionType["StakeNftForLoan"] = "stake_nft_for_loan";
    LoanInstructionType["CancelLoanRequest"] = "cancel_loan_request";
    LoanInstructionType["ProvideLoanLiquidity"] = "provide_loan_liquidity";
    LoanInstructionType["RepayLoan"] = "repay_loan";
})(LoanInstructionType || (LoanInstructionType = {}));
;
/**
 * Constants for loan instruction types, for use in environments where enums might cause issues
 */
export const LOAN_INSTRUCTION_TYPE = {
    STAKE_NFT_FOR_LOAN: 'stake_nft_for_loan',
    CANCEL_LOAN_REQUEST: 'cancel_loan_request',
    PROVIDE_LOAN_LIQUIDITY: 'provide_loan_liquidity',
    REPAY_LOAN: 'repay_loan',
};
