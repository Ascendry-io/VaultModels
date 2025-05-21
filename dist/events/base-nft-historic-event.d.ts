import { NftHistoricEventCategory } from "./nft-historic-event-category";
import { NftHistoricEventType } from "./nft-historic-event-type";
/**
 * Represents a NFT historic event.
 */
export interface BaseNftHistoricEvent {
    nftMintAddress: string;
    lastUpdatedTimestamp: number;
    nftOwnerAddress: string;
    eventCategory: NftHistoricEventCategory;
    eventType: NftHistoricEventType;
    mintTimestamp?: number;
}
