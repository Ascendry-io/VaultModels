import { VendorListingAttribute } from "./vendor-listing-attribute";

/**
 * Represents a vendor listing data object.
 */
export interface VendorListingData {
    itemName: string;
    description: string;
    imageUrls: string[];
    mainImageUrl: string;
    category: string;
    attributes: VendorListingAttribute[];
    vendorName: string;
    vendorAddress: string;
    tags: string[];
    ownerAddress: string;
  };