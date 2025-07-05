/**
 * The type of asset redemption instruction.
 */
export const CREATE_ASSET_REDEMPTION_REQUEST =
  "create_asset_redemption_request";
export const CANCEL_ASSET_REDEMPTION_REQUEST =
  "cancel_asset_redemption_request";
export const FULFILL_ASSET_REDEMPTION_REQUEST =
  "fulfill_asset_redemption_request";

export enum AssetRedemptionInstructionType {
  CreateAssetRedemptionRequest = CREATE_ASSET_REDEMPTION_REQUEST,
  CancelAssetRedemptionRequest = CANCEL_ASSET_REDEMPTION_REQUEST,
  FulfillAssetRedemptionRequest = FULFILL_ASSET_REDEMPTION_REQUEST,
}
