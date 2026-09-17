# ZKHire

![CI](https://github.com/DhruvaMandavkar/zkhire/actions/workflows/ci.yml/badge.svg)

> Privacy-preserving job eligibility verification using Zero-Knowledge Proofs on Midnight Network

## Live Demo

**Preprod Demo:** https://zkhire.vercel.app

Try the live application on Midnight Preprod network.

## Contract Address

| Network  | Address                              |
|----------|--------------------------------------|
| Preprod  | Pending deployment - Midnight Compact compiler access required |

**📝 Note:** The Midnight Compact compiler Docker image is not yet publicly available. The contract source code (`contracts/zkhire.compact`) is complete and ready for compilation once the tooling is accessible.

## What This Product Does

ZKHire solves a critical privacy problem in job recruitment: applicants must share complete credentials with every employer, exposing sensitive data like exact CGPA, full employment history, and salary expectations before even knowing if they're a good fit.

**The Problem:**
- Traditional applications require oversharing personal data
- Candidates lose competitive advantage by revealing exact credentials
- Privacy risks increase with each application
- No control over who sees your sensitive information

**The ZKHire Solution:**
Job seekers can prove they meet requirements—such as "CGPA ≥ 7.0" or "Experience ≥ 3 years"—using Zero-Knowledge Proofs, without revealing their exact CGPA or precise years of experience. Employers verify eligibility while applicants maintain privacy and competitive advantage.

**Why Midnight Network?**
Midnight's Zero-Knowledge Proof infrastructure enables true privacy-preserving verification. Unlike traditional blockchains where all data is public, Midnight allows private witness data (actual credentials) to remain secret while proving requirements are met. This makes ZKHire possible—applicants control their data, employers get verified eligibility, and cryptography ensures trust.

## Privacy Model

### What is PUBLIC (on-chain, anyone can see):
- Job requirements (minimum CGPA, required degree level, experience threshold)
- Verification result (eligible: true/false)
- Total number of verifications performed
- Number of successful verifications

### What is PRIVATE (private witness, never on-chain):
- Applicant's actual CGPA (e.g., 7.8, 8.5, 9.2)
- Applicant's exact years of experience (e.g., 5 years, 7.5 years)
- Applicant's specific degree details
- Salary expectations
- Personal identifying information

### What the user PROVES without revealing:
- "My CGPA is at least 7.0" ✅ (without revealing it's 7.8)
- "I have at least 3 years experience" ✅ (without revealing it's 5 years)
- "My degree meets the requirement" ✅ (without showing transcripts)
- "My salary expectation is in range" ✅ (without revealing exact amount)

**Example:**
Two candidates—one with 7.2 CGPA and one with 9.5 CGPA—both prove they meet the "≥ 7.0" requirement. The employer learns both are eligible but cannot distinguish between them based on CGPA. The candidates maintain their competitive advantage.

## Tech Stack

**Smart Contract:**
- Compact (Midnight's ZK smart contract language)
- Zero-Knowledge circuits for private credential verification

**Frontend:**
- React 18 with TypeScript
- Vite for build tooling
- CSS3 for styling

**Blockchain:**
- Midnight Network (Layer 1 blockchain with native ZK support)
- Lace Wallet integration

**Testing & CI/CD:**
- Vitest for unit testing (16 tests covering all verification scenarios)
- GitHub Actions for continuous integration
- TypeScript for type safety

**Development Tools:**
- Docker (for Compact compiler)
- Node.js v22+
- npm for package management

## Prerequisites

Before running ZKHire locally, ensure you have:

1. **Node.js** (version 22 or higher)
   ```bash
   node --version  # Should be v22.x or higher
   ```

2. **Lace Wallet** (for interacting with Midnight Network)
   - Install from [lace.io](https://www.lace.io)
   - Configure for Midnight Preprod network

3. **Docker** (for compiling Compact contracts)
   ```bash
   docker --version
   ```

4. **Git** (for cloning the repository)
   ```bash
   git --version
   ```

## Setup & Run Locally

Follow these steps to run ZKHire on your machine:

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/zkhire.git
cd zkhire
```

### 2. Install Dependencies

```bash
npm install
```

This installs all required packages for the frontend and testing.

### 3. Compile the Smart Contract

The Compact smart contract needs to be compiled before deployment:

```bash
# Using Docker (recommended)
docker pull ghcr.io/midnight-ntwrk/compact:latest
docker run --rm -v ${PWD}:/workspace ghcr.io/midnight-ntwrk/compact:latest compile contracts/zkhire.compact
```

Or if you have the Compact compiler installed locally:

```bash
compact compile contracts/zkhire.compact
```

This generates:
- TypeScript bindings in the `managed/` directory
- Circuit artifacts for zero-knowledge proofs
- Proof system files

See [COMPILE.md](./COMPILE.md) for detailed compilation instructions.

### 4. Set Up Environment Variables

Create a `.env` file in the project root:

```bash
cp .env.example .env
```

Edit `.env` and add your configuration:

```env
VITE_NETWORK=preprod
VITE_CONTRACT_ADDRESS=YOUR_CONTRACT_ADDRESS_HERE
```

### 5. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 6. Build for Production

```bash
npm run build
```

Build output will be in the `dist/` directory, ready for deployment.

## Run Tests

ZKHire includes comprehensive unit tests for contract logic:

```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch
```

**Test Coverage:**
- ✅ 16 passing tests
- CGPA verification (3 tests)
- Full eligibility checks (3 tests)
- Experience verification (2 tests)
- Salary range matching (2 tests)
- Edge cases and boundaries (3 tests)
- Privacy guarantees (2 tests)
- State management (1 test)

All tests validate the privacy-preserving logic without requiring contract compilation.

## CI/CD

ZKHire uses GitHub Actions for continuous integration:

**Automated Checks:**
- ✅ Run all unit tests
- ✅ Build frontend (must pass with zero errors)
- ✅ Validate Compact contract syntax
- ✅ TypeScript type checking
- ✅ Security audit (npm audit)
- ✅ Check for sensitive files

**Workflow triggers:**
- Push to `main` or `master` branch
- Pull requests to `main` or `master`

See [.github/workflows/ci.yml](.github/workflows/ci.yml) for full configuration.

## Usage Guide

For detailed end-user instructions, see **[docs/USAGE.md](./docs/USAGE.md)**

**Quick Start:**
1. Connect your Lace wallet
2. Choose verification type (Full, CGPA-only, Experience-only, or With-Salary)
3. Enter your private credentials (stays on your device)
4. Enter job requirements (public)
5. Click "Generate Proof & Verify"
6. Get verification result without revealing private data

## Deployment

### Deploy Contract to Preprod

```bash
# Make sure contract is compiled first
compact deploy --network preprod contracts/zkhire.compact
```

Save the contract address output and update:
- `.env` file: `VITE_CONTRACT_ADDRESS=<address>`
- This README.md in the Contract Address table

### Deploy Frontend

**Option 1: Vercel**
```bash
npm install -g vercel
vercel --prod
```

**Option 2: Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

**Option 3: GitHub Pages**
```bash
npm run build
# Deploy the dist/ folder
```

Update the Live Demo link in this README after deployment.

## Project Structure

```
zkhire/
├── contracts/
│   ├── zkhire.compact          # Main ZK smart contract
│   └── README.md               # Contract documentation
├── managed/                     # Generated contract bindings (after compile)
├── src/
│   ├── components/
│   │   ├── WalletConnect.tsx   # Lace wallet integration
│   │   ├── EligibilityVerifier.tsx  # Core verification UI
│   │   └── Layout.tsx          # App layout wrapper
│   ├── hooks/
│   │   └── useMidnight.ts      # Midnight Network wallet hook
│   ├── utils/
│   │   └── contract.ts         # Contract interaction utilities
│   ├── App.tsx                 # Main application component
│   └── main.tsx                # Application entry point
├── tests/
│   └── zkhire.test.ts          # Contract logic tests (16 tests)
├── docs/
│   └── USAGE.md                # End-user guide
├── .github/
│   └── workflows/
│       └── ci.yml              # CI/CD pipeline
├── PROPOSAL.md                 # Original product proposal
├── COMPILE.md                  # Contract compilation guide
└── README.md                   # This file
```

## Product X Profile

**X (Twitter):** [PLACEHOLDER - Will be added after creating the product X account]

Follow for updates, privacy insights, and launch announcements.

## Architecture Decisions

**Why Compact over Solidity?**
Compact is purpose-built for zero-knowledge applications on Midnight. It natively supports witness data and ZK circuits, making privacy-preserving logic elegant and secure compared to bolting ZK onto EVM chains.

**Why Client-Side Proof Generation?**
Private credentials never leave the user's device. Proofs are generated locally and only the proof (not the data) is submitted to the network, ensuring true privacy.

**Why Multiple Verification Modes?**
Different jobs have different requirements. Some care only about academics, others about experience. Modular functions give flexibility while maintaining privacy guarantees.

## Security Considerations

- ✅ Private witnesses are never revealed on-chain
- ✅ Zero-knowledge proofs are cryptographically sound
- ✅ No centralized server stores credentials
- ✅ Open source for community audit
- ✅ Lace wallet provides secure key management
- ⚠️ Currently on Preprod - use test data only
- ⚠️ Requires proper wallet security practices

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Roadmap

**Future Enhancements:**
- [ ] Skill-based verification (e.g., "I know React" without revealing all skills)
- [ ] Education institution verification integration
- [ ] Employer reputation system (privacy-preserving reviews)
- [ ] Multi-job batch verification
- [ ] Mobile app with wallet integration
- [ ] Mainnet deployment

## License

MIT License - see [LICENSE](LICENSE) file for details

## Acknowledgments

- **Midnight Network** for privacy-preserving blockchain infrastructure
- **IOG (Input Output Global)** for Lace wallet and tooling
- **Midnight Builder Challenge** for inspiration and support

## Links

- **Live Demo:** https://zkhire.vercel.app
- **Contract Address:** [Pending Midnight Compact compiler access]
- **X Profile:** https://x.com/DhruvaMandavkar
- **Documentation:** [docs/USAGE.md](./docs/USAGE.md)
- **Midnight Network:** https://midnight.network
- **Lace Wallet:** https://www.lace.io

---

Built with privacy-first principles 🔒 | Powered by Midnight Network 🌙 | Level 4 - Midnight Builder Challenge

**Your credentials. Your control. Zero compromise.**
