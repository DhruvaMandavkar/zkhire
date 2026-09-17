# Contract Compilation Instructions

## ⚠️ Important: Midnight Compact Compiler Required

To compile the ZKHire contract, you need the Midnight Compact compiler installed.

## Installation Options

### Option 1: Using Docker (Recommended)

```bash
# Pull the Midnight Compact compiler image
docker pull ghcr.io/midnight-ntwrk/compact:latest

# Compile the contract
docker run --rm -v ${PWD}:/workspace ghcr.io/midnight-ntwrk/compact:latest compile contracts/zkhire.compact
```

### Option 2: Direct Installation

Follow the official Midnight documentation to install the Compact compiler:
https://docs.midnight.network/develop/compact/

## Compilation Command

Once the compiler is installed:

```bash
compact compile contracts/zkhire.compact
```

This will:
1. Validate the Compact syntax
2. Generate circuit artifacts for zero-knowledge proofs
3. Create TypeScript bindings in the `managed/` directory
4. Prepare the contract for deployment

## Expected Output

After successful compilation, you should see:
- `managed/` directory with generated TypeScript code
- Circuit artifacts (`.zkir` files)
- Proof system files

## Tests

The contract logic tests are already passing (16/16 ✅):

```bash
npm test
```

These tests validate the privacy-preserving verification logic without requiring compilation.

## Next Steps

After compilation:
1. Review the generated code in `managed/`
2. Deploy to Midnight Preprod: `compact deploy --network preprod`
3. Save the contract address for frontend integration
