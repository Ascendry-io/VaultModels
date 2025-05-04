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
