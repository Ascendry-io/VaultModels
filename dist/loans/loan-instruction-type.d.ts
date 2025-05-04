/**
 * The type of loan instruction.
 */
export declare enum LoanInstructionType {
    StakeNftForLoan = "stake_nft_for_loan",
    CancelLoanRequest = "cancel_loan_request",
    ProvideLoanLiquidity = "provide_loan_liquidity",
    RepayLoan = "repay_loan"
}
/**
 * Constants for loan instruction types, for use in environments where enums might cause issues
 */
export declare const LOAN_INSTRUCTION_TYPE: {
    readonly STAKE_NFT_FOR_LOAN: "stake_nft_for_loan";
    readonly CANCEL_LOAN_REQUEST: "cancel_loan_request";
    readonly PROVIDE_LOAN_LIQUIDITY: "provide_loan_liquidity";
    readonly REPAY_LOAN: "repay_loan";
};
