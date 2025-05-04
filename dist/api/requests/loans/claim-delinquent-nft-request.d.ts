import { BaseLoanInstructionRequest } from "./base-loan-instruction-request";
/**
 * The request to claim a delinquent NFT.
 */
export interface ClaimDelinquentNftRequest extends BaseLoanInstructionRequest {
    lenderAddress: string;
}
