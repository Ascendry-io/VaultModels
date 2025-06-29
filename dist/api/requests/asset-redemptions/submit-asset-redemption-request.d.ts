import { AssetRedemptionFormData } from "../../asset_redemptions";
/**
 * Request to submit an asset redemption.
 */
export interface SubmitAssetRedemptionRequest {
    serializedTransaction: string;
    assetRedemptionFormData: AssetRedemptionFormData;
}
