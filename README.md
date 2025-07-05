# Ascendry SDK

A comprehensive TypeScript SDK for interacting with the Ascendry.io API, providing shared models, types, and a client for seamless integration.

## Overview

The Ascendry SDK is a core package that provides:
- **Shared TypeScript models** ensuring type consistency across frontend and backend applications
- **API client** for direct interaction with the Ascendry Vault API
- **Complete type definitions** for all API requests, responses, and domain models
- **Transaction generation** utilities for Solana blockchain operations

## Purpose

The primary goals of this package are to:

- Maintain consistent data structures across the entire application stack
- Provide a unified client for API interactions
- Reduce duplication of type definitions and API calls
- Ensure type safety between frontend and backend
- Simplify API contract management
- Enable better developer experience with shared types and utilities

## Installation

```bash
npm install @ascendry/sdk
```

## Dependencies

This package uses:
- TypeScript ^5.0.0
- axios ^1.9.0

## Usage

### API Client

```typescript
import { AscendryClient } from '@ascendry/sdk';

// Initialize the client with your API key
const client = new AscendryClient('your-api-key');

// Get vault NFTs for a specific owner
const nfts = await client.getVaultNfts('owner-address', '', 10);

// Get loans for an NFT
const loans = await client.getLoansByNftMintAddress('nft-mint-address');

// Create a vendor listing
const listingResponse = await client.createVendorListing({
  vendorAddress: 'vendor-address',
  listingData: { /* listing data */ }
});

// Generate unsigned loan transaction
const transaction = await client.generateUnsignedLoanTransaction({
  loanInstructionType: 'STAKE_NFT_FOR_LOAN',
  nftMintAddress: 'nft-mint-address',
  loanAmount: 1000000, // in lamports
  loanDuration: 30 // days
});
```

### Type Imports

```typescript
import { 
  NFTData, 
  LoanInfo, 
  VendorListingData,
  GetNftsResponse,
  LoanInstructionRequest,
  AssetRedemptionInstructionRequest
} from '@ascendry/sdk';

// Use the types in your components
const nft: NFTData = {
  // ... NFT data
};

const loan: LoanInfo = {
  // ... loan information
};
```

## Available Models

### API Client Methods

#### NFT Operations
- `getVaultNfts(nftOwnerAddress?, lastEvaluatedKey, paginationSize?)` - Get NFTs by owner
- `getVaultNftsByMint(nftMintAddress)` - Get NFT by mint address
- `getNftHistory(nftMintAddress, lastEvaluatedKey, paginationSize?)` - Get NFT transaction history

#### Loan Operations
- `getLoans(status?, lastEvaluatedKey?, paginationSize?)` - Get loans with optional filtering
- `getLoansByNftMintAddress(nftMintAddress)` - Get loans for specific NFT
- `generateUnsignedLoanTransaction(loanInstructionRequest)` - Generate loan transactions

#### Asset Redemption Operations
- `getAssetRedemptionInfo(nftMintAddress)` - Get asset redemption information
- `generateUnsignedAssetRedemptionTransaction(assetRedemptionInstructionRequest)` - Generate redemption transactions
- `submitAssetRedemptionRequest(submitAssetRedemptionRequest)` - Submit redemption requests

#### Vendor Operations
- `getVendorInfo(vendorAddress)` - Get vendor information
- `createVendorListing(uploadVendorListingRequest)` - Create new vendor listing
- `getVendorListings(vendorAddress)` - Get vendor's listings
- `getVendorListingById(listingId)` - Get specific listing by ID
- `cancelVendorListing(cancelVendorListingRequest)` - Cancel vendor listing

#### File Operations
- `getPresignedUrl(getPresignedUrlRequest)` - Get presigned URL for file upload
- `getPresignedUrlForViewing(fileKey)` - Get presigned URL for file viewing

#### Transaction Operations
- `submitTransactionToRpc(serializedTransaction)` - Submit signed transaction to RPC
- `generateMemoTransaction(data)` - Generate memo transaction

### API Models

#### Requests
- `AssetRedemptionInstructionRequest` - Asset redemption transaction requests
- `BaseLoanInstructionRequest` - Base loan instruction requests
- `CancelLoanRequest` - Cancel loan requests
- `CancelVendorListingRequest` - Cancel vendor listing requests
- `ClaimDelinquentNftRequest` - Claim delinquent NFT requests
- `GetAssetRedemptionInfoRequest` - Get asset redemption info requests
- `GetLoansRequest` - Get loans requests
- `GetNftHistoryRequest` - Get NFT history requests
- `GetNftsRequest` - Get NFTs requests
- `GetPresignedUrlForViewingRequest` - Get presigned URL requests
- `GetPresignedVendorMediaFileUrlRequest` - Get vendor media presigned URL requests
- `GetVendorInfoRequest` - Get vendor info requests
- `GetVendorListingByIdRequest` - Get vendor listing by ID requests
- `GetVendorListingsRequest` - Get vendor listings requests
- `LoanInstructionRequest` - Loan instruction requests
- `ProvideLoanLiquidityRequest` - Provide loan liquidity requests
- `RepayLoanRequest` - Repay loan requests
- `StakeNftForLoanRequest` - Stake NFT for loan requests
- `SubmitAssetRedemptionRequest` - Submit asset redemption requests
- `UploadVendorListingRequest` - Upload vendor listing requests

#### Responses
- `AssetRedemptionTransactionResponse` - Asset redemption transaction responses
- `CancelVendorListingResponse` - Cancel vendor listing responses
- `GetAssetRedemptionInfoResponse` - Get asset redemption info responses
- `GetLoansResponse` - Get loans responses
- `GetNftHistoryResponse` - Get NFT history responses
- `GetNftsResponse` - Get NFTs responses
- `GetPresignedUrlForViewingResponse` - Get presigned URL responses
- `GetPresignedVendorMediaFileUrlResponse` - Get vendor media presigned URL responses
- `GetVendorInfoResponse` - Get vendor info responses
- `GetVendorListingByIdResponse` - Get vendor listing by ID responses
- `GetVendorListingsResponse` - Get vendor listings responses
- `LoanTransactionResponse` - Loan transaction responses
- `SubmitAssetRedemptionResponse` - Submit asset redemption responses
- `UploadVendorListingResponse` - Upload vendor listing responses

### Domain Models

#### NFTs
- `NFTData` - Complete NFT information including metadata
- `NftMediaFile` - Media file information for NFTs
- `NftAttribute` - NFT attribute key-value pairs

#### Loans
- `LoanInfo` - Complete loan information
- `LoanInstructionType` - Enum for different loan instruction types (STAKE_NFT_FOR_LOAN, PROVIDE_LOAN_LIQUIDITY, REPAY_LOAN, etc.)

#### Asset Redemptions
- `AssetRedemptionFormData` - Asset redemption form data
- `AssetRedemptionInstructionType` - Enum for asset redemption instruction types

#### Listings
- `VendorListingData` - Base vendor listing information
- `VendorListingAttribute` - Listing attribute key-value pairs
- `ListingStatus` - Enum for listing states (INITIATED, CANCELLED, MINTED, BURNED)
- `CompleteVendorListing` - Extended vendor listing with additional metadata

#### Events
- `BaseNftHistoricEvent` - Base NFT historic event
- `LoanNftHistoricEvent` - Loan-related NFT historic event
- `NftHistoricEventCategory` - NFT historic event categories
- `NftHistoricEventType` - NFT historic event types

## API Endpoints

The SDK provides access to the following API endpoints:

- **Base URL**: `https://ycz7f841lj.execute-api.us-west-2.amazonaws.com/dev/v1`
- **Authentication**: API key required via `x-api-key` header
- **Content-Type**: `application/json`

## Development

### Building the Package

```bash
npm run build
```

This will:
1. Clean the previous build using `npm run clean`
2. Compile the TypeScript files using `tsc`
3. Generate appropriate type definitions

### Development Scripts

- `npm run build` - Build the package
- `npm run clean` - Clean the dist directory
- `npm run prepare` - Clean and build (runs automatically on npm install)

When making changes:
- **Major version**: Breaking changes to the API or client interface
- **Minor version**: New features that are backward compatible
- **Patch version**: Backward compatible bug fixes

## Contributing

When adding new models or modifying existing ones:

1. Ensure the changes are backward compatible
2. Update the documentation
3. Add appropriate tests
4. Follow the existing type naming conventions
5. Consider the impact on both frontend and backend
6. Update the API client if adding new endpoints

## Best Practices

1. **Type Consistency**: Always use the shared types from this package instead of creating local type definitions
2. **API Client**: Use the `AscendryClient` for all API interactions to ensure consistency
3. **Error Handling**: Implement proper error handling for API calls
4. **Documentation**: Add JSDoc comments to all new types and interfaces
5. **Validation**: Consider adding runtime validation for critical types
6. **Versioning**: Be mindful of version compatibility when making changes

## License

This project is licensed under the MIT License. See the LICENSE file for details. 