import { LoanInfo } from "../../loans/loan-info";

export interface GetLoansResponse {
    loans: LoanInfo[];
    lastEvaluatedKey: string | null;
};