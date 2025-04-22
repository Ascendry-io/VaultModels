import { LoanInfo } from "../../loans/loan-info";

/**
 * Represents a get loans response object.
 */
export interface GetLoansResponse {
    loans: LoanInfo[];
    lastEvaluatedKey?: string;
};