import { NftAttribute } from "./nft-attribute";
import { NftMediaFile } from "./nft-media-file";

export interface NFTData {
    nftOwnerAddress: string;
    symbol: string;
    certificate: string;
    status: string;
    attributes: NftAttribute[];
    authenticationDate: string;
    name: string;
    imageUrl: string;
    nftMintAddress: string;
    files: NftMediaFile[];
    mintTimestamp: number;
    vendorAddress: string;
    vendorName: string;
    description: string;
    itemNumber: string;
};