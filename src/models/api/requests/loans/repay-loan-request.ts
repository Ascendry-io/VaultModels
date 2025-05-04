import { BaseLoanInstructionRequest } from "./base-loan-instruction-request";

/**
 * The request to repay a loan.
 */
export interface RepayLoanRequest extends BaseLoanInstructionRequest {
    loanInstructionType: string;
};
