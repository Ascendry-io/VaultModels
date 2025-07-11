import { CompleteVendorListing } from "../../models/listings/complete-vendor-listing";

/**
 * Represents a response from the get vendor listing by ID API.
 */
export interface GetVendorListingByIdResponse {
  listing?: CompleteVendorListing;
}
