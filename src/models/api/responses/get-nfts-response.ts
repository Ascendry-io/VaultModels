import { LoanInfo } from "../../loans/loan-info";

export interface GetNftsResponse {
    nfts: LoanInfo[];
    lastEvaluatedKey?: string;
};
