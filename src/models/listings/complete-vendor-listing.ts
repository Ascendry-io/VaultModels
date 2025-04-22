import { ListingStatus } from "./listing-status";
import { VendorListingData } from "./vendor-listing-data";

export interface CompleteVendorListing extends VendorListingData {
    listingId: string;
    createdAtTimestamp: number;
    status: ListingStatus;
    memoTransactionSignature: string;
};