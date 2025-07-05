/**
 * Represents a get vendor listings request object.
 */
export interface GetVendorListingsRequest {
  vendorAddress: string;
  status?: string;
  paginationSize?: string;
  lastEvaluatedKey?: string;
}
