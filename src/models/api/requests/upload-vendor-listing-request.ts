import { VendorListingData } from "../../listings/vendor-listing-data";

export interface UploadVendorListingRequest {
    listingData: VendorListingData;
    signedMemoTransaction: string;
    listingId: string;
};