/**
 * The base request for an asset redemption instruction.
 */
export interface BaseAssetRedemptionInstructionRequest {
  nftMintAddress: string;
  nftOwnerAddress: string;
  assetRedemptionInstructionType: string;
}
