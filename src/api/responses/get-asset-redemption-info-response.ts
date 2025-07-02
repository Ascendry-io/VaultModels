import { AssetRedemptionFormData } from "../../models/asset-redemptions/asset-redemption-form-data";

/**
 * Response model for getting asset redemption info.
 */
export interface GetAssetRedemptionInfoResponse {
  nftOwner: string;
  isFulfilled: boolean;
  requestTimestamp: number;
  assetRedemptionFormData?: AssetRedemptionFormData;
};