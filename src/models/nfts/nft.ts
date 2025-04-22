import { NftAttribute } from "./nftAttribute";
import { NftMediaFile } from "./nftMediaFile";

export interface NFTData {
    nftOwnerAddress: string;
    symbol: string;
    certificate: string;
    status: string;
    countryOfOrigin: string;
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