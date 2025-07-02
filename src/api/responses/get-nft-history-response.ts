import { BaseNftHistoricEvent } from "../../models/events";

/**
 * Represents a get NFT history response object.
 */
export interface GetNftHistoryResponse {
    historicEvents: BaseNftHistoricEvent[];
    lastEvaluatedKey?: string;
};