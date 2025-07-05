import { BaseNftHistoricEvent } from "./base-nft-historic-event";

/**
 * Represents a loan NFT historic event.
 */
export interface LoanNftHistoricEvent extends BaseNftHistoricEvent {
  duration: number; // Duration in seconds
  interestAmount: number; // Lamports of SOL
  isActive: boolean; // Whether the loan is currently active
  lenderAddress?: string; // Address of the lender
  loanAmount: number; // Lamports of SOL
  loanPdaAddress: string; // PDA address of the loan
  loanRequestTimestamp: number;
  startTime: number; // Timestamp of the loan start
  sellerFeeBasisPoints: number; // Fee basis points for the seller
}
