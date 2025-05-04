# VaultModels

A shared TypeScript models package that ensures type consistency between the Vault frontend and backend applications.

## Overview

VaultModels is a core package that defines shared TypeScript interfaces and types used across the Vault ecosystem. It serves as a single source of truth for data structures, ensuring type safety and consistency between the frontend (Vault-UI) and backend (VaultCDK) applications.

## Purpose

The primary goals of this package are to:

- Maintain consistent data structures across the entire application stack
- Reduce duplication of type definitions
- Ensure type safety between frontend and backend
- Simplify API contract management
- Enable better developer experience with shared types

## Installation

```bash
npm install vaultmodels
```

## Dependencies

This package uses:
- TypeScript ^5.0.0
- axios ^1.9.0

## Usage

### In Frontend (Vault-UI)

```typescript
import { NFTData, LoanInfo, VendorListingData } from 'vaultmodels';

// Use the types in your components
const nft: NFTData = {
  // ... NFT data
};

const loan: LoanInfo = {
  // ... loan information
};
```

### In Backend (VaultCDK)

```typescript
import { NFTData, LoanInfo, VendorListingData } from 'vaultmodels';

// Use the same types in your Lambda handlers
async function processNft(nft: NFTData): Promise<void> {
  // ... process NFT data
}
```

## Available Models

### API Models

#### Requests
- `BaseLoanInstructionRequest`
- `CancelLoanRequest`
- `CancelVendorListingRequest`
- `ClaimDelinquentNftRequest`
- `GetLoansRequest`
- `GetNftsRequest`
- `GetPresignedUrlForViewingRequest`
- `GetVendorInfoRequest`
- `GetVendorListingByIdRequest`
- `GetVendorListingsRequest`
- `LoanInstructionRequest`
- `ProvideLoanLiquidityRequest`
- `RepayLoanRequest`
- `StakeNftForLoanRequest`
- `UploadVendorListingRequest`

#### Responses
- `CancelVendorListingResponse`
- `GetLoansResponse`
- `GetNftsResponse`
- `GetPresignedUrlForViewingResponse`
- `GetPresignedVendorMediaFileUrlResponse`
- `GetVendorInfoResponse`
- `GetVendorListingByIdResponse`
- `GetVendorListingsResponse`
- `LoanTransactionResponse`
- `UploadVendorListingResponse`

### Domain Models

#### NFTs
- `NFTData` - Complete NFT information including metadata
- `NftMediaFile` - Media file information for NFTs
- `NftAttribute` - NFT attribute key-value pairs

#### Loans
- `LoanInfo` - Complete loan information
- `LoanInstructionType` - Enum for different loan instruction types

#### Listings
- `VendorListingData` - Base vendor listing information
- `VendorListingAttribute` - Listing attribute key-value pairs
- `ListingStatus` - Enum for listing states (INITIATED, CANCELLED, MINTED, BURNED)
- `CompleteVendorListing` - Extended vendor listing with additional metadata

## Development

### Building the Package

```bash
npm run build
```

This will:
1. Clean the previous build using `npm run clean`
2. Compile the TypeScript files using `tsc`
3. Generate appropriate type definitions

## Versioning

This package follows [Semantic Versioning](https://semver.org/). Current version: 2.0.1

When making changes:
- Major version: Breaking changes to the API
- Minor version: New features that are backward compatible
- Patch version: Backward compatible bug fixes

## Contributing

When adding new models or modifying existing ones:

1. Ensure the changes are backward compatible
2. Update the documentation
3. Add appropriate tests
4. Follow the existing type naming conventions
5. Consider the impact on both frontend and backend

## Best Practices

1. **Type Consistency**: Always use the shared types from this package instead of creating local type definitions
2. **Documentation**: Add JSDoc comments to all new types and interfaces
3. **Validation**: Consider adding runtime validation for critical types
4. **Versioning**: Be mindful of version compatibility when making changes

## License

This project is licensed under the MIT License. See the LICENSE file for details. 