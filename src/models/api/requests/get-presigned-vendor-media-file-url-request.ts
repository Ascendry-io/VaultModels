/**
 * Represents a get presigned vendor media file url request object.
 */
export interface GetPresignedVendorMediaFileUrlRequest {
    fileName: string;
    fileSize: number;
    vendorAddress: string;
};
