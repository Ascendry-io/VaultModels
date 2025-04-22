import { VendorListingData } from "../../listings/vendor-listing-data";

/**
 * Represents a upload vendor listing request object.
 */
export interface UploadVendorListingRequest {
    listingData: VendorListingData;
    signedMemoTransaction: string;
    listingId: string;
};