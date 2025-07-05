import { CancelLoanRequest } from "./cancel-loan-request";
import { ClaimDelinquentNftRequest } from "./claim-delinquent-nft-request";
import { ProvideLoanLiquidityRequest } from "./provide-loan-liquidity-request";
import { RepayLoanRequest } from "./repay-loan-request";
import { StakeNftForLoanRequest } from "./stake-nft-for-loan-request";

/**
 * The request to create a loan.
 */
export type LoanInstructionRequest =
  | StakeNftForLoanRequest
  | CancelLoanRequest
  | ProvideLoanLiquidityRequest
  | RepayLoanRequest
  | ClaimDelinquentNftRequest;
