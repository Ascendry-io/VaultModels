import { LoanInfo } from "../../models/loans/loan-info";

/**
 * Represents a get loans response object.
 */
export interface GetLoansResponse {
    loans: LoanInfo[];
    lastEvaluatedKey?: string;
};