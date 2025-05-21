import { BaseNftHistoricEvent } from "./base-nft-historic-event";
/**
 * Represents a loan NFT historic event.
 */
export interface LoanNftHistoricEvent extends BaseNftHistoricEvent {
    duration: number;
    interestAmount: number;
    isActive: boolean;
    lenderAddress?: string;
    loanAmount: number;
    loanPdaAddress: string;
    loanRequestTimestamp: number;
    startTime: number;
    sellerFeeBasisPoints: number;
}
