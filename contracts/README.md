# ZKHire Contract

This directory contains the Compact smart contract for ZKHire.

## Prerequisites

Before compiling, ensure you have:
- Docker installed and running
- Midnight Compact compiler installed

## Installation

Install the Midnight Compact compiler:

```bash
npm install -g @midnight-ntwrk/compact-compiler
```

Or use Docker:

```bash
docker pull ghcr.io/midnight-ntwrk/compact:latest
```

## Compile the Contract

From the project root:

```bash
compact compile contracts/zkhire.compact
```

Or using npm script:

```bash
npm run compile
```

This will:
1. Compile the Compact contract
2. Generate TypeScript bindings in the `managed/` directory
3. Create circuit artifacts for zero-knowledge proofs

## Contract Overview

The `zkhire.compact` contract implements privacy-preserving job eligibility verification with:

- **Public State**: Verification statistics, job requirements
- **Private Witnesses**: Actual CGPA, degree, experience, salary expectations
- **Zero-Knowledge Proofs**: Prove eligibility without revealing exact credentials

## Functions

1. `verifyEligibility()` - Full verification (CGPA + Degree + Experience)
2. `verifyCGPAOnly()` - Academic verification only
3. `verifyExperienceOnly()` - Experience verification only
4. `verifyWithSalary()` - Includes salary range matching
5. `getStats()` - View verification statistics

## Testing

Run the contract logic tests:

```bash
npm test
```

## Deployment

Deploy to Midnight Preprod network:

```bash
compact deploy --network preprod contracts/zkhire.compact
```

The deployment will output a contract address - save this for frontend integration.
