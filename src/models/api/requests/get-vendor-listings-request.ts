export interface GetVendorListingsRequest {
    vendorAddress: string;
    status?: string;
    paginationSize?: number;
    lastEvaluatedKey?: string;
};