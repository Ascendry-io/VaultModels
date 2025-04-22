import { CompleteVendorListing } from "../../listings/complete-vendor-listing";

/**
 * Represents a response from the vendor listings API.
 */
export interface GetVendorListingsResponse {
    listings: CompleteVendorListing[];
    lastEvaluatedKey?: string;
};