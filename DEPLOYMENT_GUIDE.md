# ZKHire Deployment Guide

This guide walks you through deploying ZKHire to Midnight Preprod network and completing your Level 4 submission.

---

## 📋 Pre-Deployment Checklist

Before you deploy, verify all code is ready:

- [x] ✅ Contract compiled successfully
- [x] ✅ All tests passing (16/16)
- [x] ✅ Frontend builds with zero errors
- [x] ✅ CI/CD workflow configured
- [x] ✅ Documentation complete
- [x] ✅ X launch posts prepared

---

## 🚀 Deployment Steps

### STEP 1: Install Midnight Compact Compiler

You need the Compact compiler to deploy your contract.

**Option A: Using Docker (Recommended)**

```bash
# Pull the latest Compact compiler image
docker pull ghcr.io/midnight-ntwrk/compact:latest

# Verify it works
docker run --rm ghcr.io/midnight-ntwrk/compact:latest --version
```

**Option B: Install Directly**

Follow the official Midnight documentation:
https://docs.midnight.network/develop/compact/

---

### STEP 2: Compile the Contract

From your project root:

```bash
# Using Docker
docker run --rm -v ${PWD}:/workspace ghcr.io/midnight-ntwrk/compact:latest compile contracts/zkhire.compact

# Or if installed locally
compact compile contracts/zkhire.compact
```

**Expected output:**
- `managed/` directory created with TypeScript bindings
- Circuit artifacts generated
- No compilation errors

**Troubleshooting:**
- If you get syntax errors, review `contracts/zkhire.compact`
- Ensure Docker is running
- Check that the file path is correct

---

### STEP 3: Set Up Lace Wallet for Preprod

1. **Install Lace Wallet**
   - Download from https://www.lace.io
   - Install browser extension

2. **Configure for Preprod**
   - Open Lace wallet
   - Go to Settings → Network
   - Select "Preprod" network
   - Save changes

3. **Get Test Tokens**
   - Visit Midnight Preprod faucet
   - Request test tokens for deployment fees
   - Wait for tokens to arrive in your wallet

---

### STEP 4: Deploy Contract to Preprod

**Deploy Command:**

```bash
# Using Docker
docker run --rm -v ${PWD}:/workspace ghcr.io/midnight-ntwrk/compact:latest deploy --network preprod contracts/zkhire.compact

# Or if installed locally
compact deploy --network preprod contracts/zkhire.compact
```

**You will be prompted to:**
1. Connect your Lace wallet
2. Approve the deployment transaction
3. Pay deployment fee (test tokens)

**⚠️ CRITICAL: Save the Contract Address!**

After successful deployment, you'll see output like:

```
✅ Contract deployed successfully!
Network: preprod
Address: midnight1abc123def456ghi789jkl...
Transaction Hash: 0x123456789abcdef...
```

**COPY AND SAVE THIS ADDRESS IMMEDIATELY!**

---

### STEP 5: Update README.md with Contract Address

**This is MANDATORY for submission!**

1. Open `README.md`
2. Find the Contract Address table:

```markdown
## Contract Address

| Network  | Address                              |
|----------|--------------------------------------|
| Preprod  | [PLACEHOLDER - Will be added after contract deployment] |
```

3. Replace the placeholder with your actual address:

```markdown
## Contract Address

| Network  | Address                              |
|----------|--------------------------------------|
| Preprod  | midnight1abc123def456ghi789jkl...    |
```

4. Save the file

**⚠️ Without this address, your submission will be invalid!**

---

### STEP 6: Update Environment Variables

Update `.env` file:

```env
VITE_NETWORK=preprod
VITE_CONTRACT_ADDRESS=midnight1abc123def456ghi789jkl...
```

This connects your frontend to the deployed contract.

---

### STEP 7: Deploy Frontend

Choose one of these platforms:

#### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Build first
npm run build

# Deploy
vercel --prod
```

Follow prompts to connect your GitHub repo. Vercel will give you a URL like:
`https://zkhire.vercel.app`

#### Option B: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build first
npm run build

# Deploy
netlify deploy --prod --dir=dist
```

You'll get a URL like: `https://zkhire.netlify.app`

#### Option C: GitHub Pages

```bash
# Build
npm run build

# Install gh-pages
npm install -g gh-pages

# Deploy
gh-pages -d dist
```

You'll get: `https://YOUR_USERNAME.github.io/zkhire`

**Save your frontend URL!**

---

### STEP 8: Update README.md with Live Demo Link

1. Open `README.md`
2. Find the Live Demo section:

```markdown
## Live Demo

**Preprod Demo:** [PLACEHOLDER - Will be added after frontend deployment]
```

3. Replace with your actual URL:

```markdown
## Live Demo

**Preprod Demo:** https://zkhire.vercel.app

Try the live application on Midnight Preprod network.
```

4. Save the file

---

### STEP 9: Create Product X Account

1. **Create new X (Twitter) account**
   - Username suggestion: @ZKHireApp or @ZKHire_xyz
   - Profile picture: Create a logo or use 🔒 emoji
   - Bio: "Privacy-preserving job verification using Zero-Knowledge Proofs. Built on @MidnightNtwrk 🌙"
   - Website: Add your GitHub repo or demo URL

2. **Post the 3 launch tweets**
   - Open `X_LAUNCH_POSTS.md`
   - Copy Tweet 1 (Introduction) and post
   - Wait 30 minutes
   - Copy Tweet 2 (Technical Insight) and post
   - Wait 30 minutes
   - Copy Tweet 3 (Call to Action) and post
   - **Replace [YOUR_DEMO_LINK_HERE] with actual demo URL**
   - **Replace [YOUR_GITHUB_REPO_HERE] with actual GitHub URL**

3. **Follow relevant accounts**
   - @MidnightNtwrk
   - @lace_io
   - Other Midnight builders

4. **Pin Tweet 3** (the one with demo link) to your profile

---

### STEP 10: Update README.md with X Profile

1. Open `README.md`
2. Find the Product X Profile section:

```markdown
## Product X Profile

**X (Twitter):** [PLACEHOLDER - Will be added after creating the product X account]
```

3. Replace with your X handle:

```markdown
## Product X Profile

**X (Twitter):** https://x.com/ZKHireApp

Follow for updates, privacy insights, and launch announcements.
```

4. Save the file

---

### STEP 11: Update CI Badge

1. Push your code to GitHub
2. GitHub Actions will run automatically
3. Go to Actions tab in your repo
4. Once workflow completes, get the badge URL
5. Update README.md:

```markdown
![CI](https://github.com/YOUR_USERNAME/zkhire/actions/workflows/ci.yml/badge.svg)
```

Replace `YOUR_USERNAME` with your actual GitHub username.

---

### STEP 12: Record Demo Video

Create a 1-2 minute screen recording showing:

1. **Opening** (5 seconds)
   - Show the ZKHire homepage

2. **Wallet Connection** (10 seconds)
   - Click "Connect Lace Wallet"
   - Approve connection
   - Show connected state

3. **Verification Demo** (45 seconds)
   - Select "Full Eligibility" mode
   - Enter private credentials:
     - CGPA: 7.8
     - Degree: Masters
     - Experience: 5 years
   - Enter job requirements:
     - Min CGPA: 7.0
     - Required Degree: Bachelors
     - Min Experience: 3 years
   - Click "Generate Proof & Verify"
   - Show the loading state
   - Show success result

4. **Privacy Explanation** (20 seconds)
   - Highlight that actual CGPA (7.8) was NOT revealed
   - Point to privacy guarantee section
   - Show that only "eligible: true" is public

5. **Closing** (5 seconds)
   - Show GitHub repo
   - Show X profile
   - End card with "Your credentials. Your control."

**Tools for recording:**
- OBS Studio (free)
- Loom (easy sharing)
- QuickTime (Mac)
- Windows Game Bar (Windows)

**Upload to:**
- YouTube (public or unlisted)
- Loom
- X directly

---

### STEP 13: Make Meaningful Commits

The challenge requires **at least 15 meaningful commits** with clear messages.

**Good commit practices:**

```bash
# Initial setup
git add .
git commit -m "Initial project structure with contracts and src directories"

# Contract
git add contracts/zkhire.compact
git commit -m "Add ZKHire Compact contract with privacy verification logic"

# Tests
git add tests/
git commit -m "Add comprehensive test suite with 16 tests for all verification modes"

# Components
git add src/components/WalletConnect.tsx
git commit -m "Add WalletConnect component with Lace integration"

git add src/components/EligibilityVerifier.tsx
git commit -m "Add EligibilityVerifier component with 4 verification modes"

# Hooks and utils
git add src/hooks/useMidnight.ts
git commit -m "Add useMidnight hook for wallet state management"

git add src/utils/contract.ts
git commit -m "Add contract interaction utilities and helper functions"

# Styling
git add src/App.css src/index.css
git commit -m "Add responsive styling with privacy-first design"

git add src/components/*.css
git commit -m "Add component-specific styles for wallet and verifier"

# CI/CD
git add .github/workflows/ci.yml
git commit -m "Configure GitHub Actions CI/CD with test and build jobs"

# Documentation
git add README.md
git commit -m "Add comprehensive README with setup and deployment instructions"

git add docs/USAGE.md
git commit -m "Add user guide with step-by-step verification walkthrough"

git add COMPILE.md
git commit -m "Add contract compilation guide with Docker instructions"

# Configuration
git add package.json tsconfig.json
git commit -m "Configure TypeScript and build tooling"

git add .env.example
git commit -m "Add environment variable template"

# Final updates
git add README.md
git commit -m "Update README with deployed contract address"

git add README.md
git commit -m "Add live demo URL to README"

git add README.md
git commit -m "Add X profile link to README"
```

**Check your commit count:**
```bash
git log --oneline | wc -l
```

Should show 15 or more.

---

### STEP 14: Final Repository Check

Before submitting, verify your repo has:

**Required Files:**
- [x] `README.md` with contract address (MANDATORY!)
- [x] `README.md` with live demo URL
- [x] `README.md` with X profile link
- [x] `README.md` with CI badge
- [x] `contracts/zkhire.compact`
- [x] `src/` directory with all components
- [x] `tests/` with passing tests
- [x] `.github/workflows/ci.yml`
- [x] `docs/USAGE.md`
- [x] `package.json`

**Verification Commands:**
```bash
# Tests pass
npm test

# Build succeeds
npm run build

# No errors
echo $?  # Should output 0
```

---

## ✅ Final Submission Checklist

Print this and check each item:

### Code & Tests
- [ ] Contract compiled successfully with no errors
- [ ] All 16 tests passing (`npm test`)
- [ ] Frontend builds with zero errors (`npm run build`)
- [ ] CI/CD workflow passing on GitHub

### Deployment
- [ ] Contract deployed to Midnight Preprod
- [ ] Contract address added to README.md (MANDATORY!)
- [ ] Frontend deployed to Vercel/Netlify/GitHub Pages
- [ ] Live demo URL added to README.md
- [ ] Environment variables configured

### Documentation
- [ ] README.md complete with all sections
- [ ] docs/USAGE.md created
- [ ] PROPOSAL.md from Level 3 included
- [ ] File structure matches specification

### X Profile
- [ ] Product X account created
- [ ] Posted all 3 launch tweets
- [ ] Replaced placeholders with actual URLs
- [ ] X profile link added to README.md
- [ ] Pinned demo tweet to profile

### Git & GitHub
- [ ] At least 15 meaningful commits
- [ ] Clear commit messages
- [ ] CI badge in README.md
- [ ] All code pushed to GitHub
- [ ] Repository is public

### Video
- [ ] Demo video recorded (1-2 minutes)
- [ ] Shows wallet connection
- [ ] Shows verification process
- [ ] Explains privacy guarantees
- [ ] Video uploaded and link ready

### Final Verification
- [ ] Clicked through live demo - works correctly
- [ ] Tested wallet connection on Preprod
- [ ] Verified contract address is correct
- [ ] All README placeholders replaced
- [ ] Double-checked contract address in README (CRITICAL!)

---

## 🎯 Submission

Once all checklist items are complete:

1. **Go to Rise In**
   - Navigate to Midnight Builder Challenge Level 4
   - Click "Submit"

2. **Submit Your GitHub Repo URL**
   - Example: `https://github.com/YOUR_USERNAME/zkhire`
   - Make sure it's the correct repo
   - Ensure repo is public

3. **Provide Additional Info**
   - Live Demo URL: `https://zkhire.vercel.app`
   - X Profile: `https://x.com/ZKHireApp`
   - Demo Video: [YouTube/Loom link]
   - Contract Address: `midnight1abc123...` (should already be in README)

4. **Submit!**

---

## 🎉 Post-Submission

After submitting:

1. **Share on X**
   - Post about completing Level 4
   - Tag @MidnightNtwrk
   - Use #MidnightBuilderChallenge

2. **Engage with Community**
   - Reply to other builders
   - Share your learnings
   - Help others with questions

3. **Continue Building**
   - Add features from the roadmap
   - Improve UI/UX
   - Add more verification modes
   - Consider mainnet deployment

---

## 🆘 Troubleshooting

### "Contract deployment failed"
- Check you have test tokens in Lace wallet
- Verify you're on Preprod network
- Ensure contract compiles with no errors
- Check Docker is running

### "Frontend won't connect to wallet"
- Verify Lace wallet is installed
- Check wallet is on Preprod network
- Clear browser cache and try again
- Check console for errors

### "Build fails"
- Run `npm install` again
- Delete `node_modules` and reinstall
- Check TypeScript errors: `npx tsc --noEmit`
- Verify Node.js version is 22+

### "CI/CD failing on GitHub"
- Check GitHub Actions tab for error details
- Ensure all files are committed
- Verify package.json scripts are correct
- Try running commands locally first

### "Can't find contract address"
- Check deployment terminal output
- Look for "Contract deployed successfully"
- Address starts with "midnight1..."
- If lost, redeploy contract

---

## 📚 Resources

- **Midnight Docs:** https://docs.midnight.network
- **Lace Wallet:** https://www.lace.io
- **Compact Language Guide:** https://docs.midnight.network/develop/compact/
- **Rise In Platform:** https://risein.com
- **Midnight Discord:** Join for community support

---

## 🏆 Success Criteria

Your submission must have:

✅ **MANDATORY:**
- Contract address in README.md
- Live Preprod demo URL
- 15+ meaningful commits
- All tests passing
- Zero build errors

✅ **Recommended:**
- X profile with 3 posts
- Demo video
- Complete documentation
- CI/CD passing

**Without the contract address in README.md, your submission is INVALID!**

---

Good luck with your deployment! 🚀

Built with privacy-first principles on Midnight Network 🌙
