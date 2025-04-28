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
- `GetLoansRequest`
- `GetNftsRequest`
- `GetPresignedUrlForViewingRequest`
- `GetPresignedVendorMediaFileUrlRequest`
- `GetVendorInfoRequest`
- `GetVendorListingsRequest`
- `GetVendorListingByIdRequest`
- `UploadVendorListingRequest`
- `CancelVendorListingRequest`

#### Responses
- `GetLoansResponse`
- `GetNftsResponse`
- `GetPresignedUrlForViewingResponse`
- `GetPresignedVendorMediaFileUrlResponse`
- `GetVendorInfoResponse`
- `GetVendorListingsResponse`
- `GetVendorListingByIdResponse`
- `UploadVendorListingResponse`
- `CancelVendorListingResponse`

### Domain Models

#### NFTs
- `NFTData`
- `NFTMediaFile`
- `NFTAttribute`

#### Loans
- `LoanInfo`

#### Listings
- `VendorListingData`
- `VendorListingAttribute`
- `ListingStatus`
- `CompleteVendorListing`

## Development

### Building the Package

```bash
npm run build
```

This will compile the TypeScript files and generate the appropriate type definitions.


## Versioning

This package follows [Semantic Versioning](https://semver.org/). When making changes:

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

[Add your license information here] 