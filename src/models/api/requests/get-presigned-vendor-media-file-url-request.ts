/**
 * Represents a get presigned vendor media file url request object.
 */
export interface GetPresignedVendorMediaFileUrlRequest {
    fileType: string;
    fileSize: number;
    vendorAddress: string;
};
