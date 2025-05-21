import { BaseNftHistoricEvent } from "../../events";
/**
 * Represents a get NFT history response object.
 */
export interface GetNftHistoryResponse {
    historicEvents: BaseNftHistoricEvent[];
    lastEvaluatedKey?: string;
}
