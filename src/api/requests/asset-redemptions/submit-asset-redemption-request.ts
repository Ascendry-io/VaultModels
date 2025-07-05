import { AssetRedemptionFormData } from "../../../models/asset-redemptions";

/**
 * Request to submit an asset redemption.
 */
export interface SubmitAssetRedemptionRequest {
  serializedTransaction: string;
  nftMintAddress: string;
  assetRedemptionFormData: AssetRedemptionFormData;
}
