/**
 * Represents a get presigned vendor media file url request object.
 */
export interface GetPresignedVendorMediaFileUrlRequest {
    fileName: string;
    fileType: string;
    vendorAddress: string;
};
