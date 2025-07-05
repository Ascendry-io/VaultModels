/**
 * Represents a cancel vendor listing request object.
 */
export interface CancelVendorListingRequest {
  signedMemoTransaction: string;
  listingId: string;
  vendorAddress: string;
}
