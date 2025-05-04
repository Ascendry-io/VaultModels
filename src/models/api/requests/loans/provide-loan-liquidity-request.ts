import { BaseLoanInstructionRequest } from "./base-loan-instruction-request";

/**
 * The request to provide loan liquidity.
 */
export interface ProvideLoanLiquidityRequest extends BaseLoanInstructionRequest {
    loanInstructionType: string;
    lenderAddress: string;
};
