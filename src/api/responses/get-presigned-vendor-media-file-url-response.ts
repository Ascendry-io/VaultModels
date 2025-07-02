/**
 * Represents a response from the get presigned vendor media file url API.
 */
export interface GetPresignedVendorMediaFileUrlResponse {
    presignedUrl: string;
    fileKey: string;
}
