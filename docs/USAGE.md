# How to Use ZKHire

Welcome to ZKHire! This guide will walk you through using the privacy-preserving job eligibility verification system.

## What You Need

Before you start, make sure you have:

1. **Lace Wallet** - Download from [lace.io](https://www.lace.io)
   - Install the browser extension
   - Create or restore a wallet
   - Configure it for Midnight Network Preprod

2. **Your Job Credentials** (keep these private!)
   - Your actual CGPA (e.g., 7.8 on a 10.0 scale)
   - Your degree level (Bachelors, Masters, or PhD)
   - Your years of work experience (e.g., 5 years)
   - Your salary expectations (optional)

3. **Job Requirements** (usually provided by employer)
   - Minimum CGPA required
   - Minimum degree level required
   - Minimum years of experience
   - Salary range (if applicable)

---

## Step-by-Step Guide

### Step 1: Connect Your Wallet

1. Visit the ZKHire application (Preprod demo link in README)
2. You'll see a **"Connect Lace Wallet"** button
3. Click the button
4. Your Lace wallet will open - approve the connection
5. Once connected, you'll see your wallet address displayed

**What's happening:** You're securely connecting to the Midnight Network where your privacy proofs will be verified.

---

### Step 2: Choose Your Verification Type

ZKHire offers four verification modes:

- **Full Eligibility** - Verify CGPA + Degree + Experience all together
- **CGPA Only** - Verify only your academic performance
- **Experience Only** - Verify only your work experience
- **With Salary** - Verify credentials + salary expectation matching

Click the button for the type of verification you need.

---

### Step 3: Enter Your Private Credentials

In the **"Private Data"** section (marked with 🔒):

1. **Enter your actual CGPA**
   - Example: If you have a 7.8 CGPA, enter `7.8`
   - This stays private - no one will ever see this exact number

2. **Select your degree level** (if required)
   - Choose: Bachelors, Masters, or PhD
   - This stays private

3. **Enter your years of experience** (if required)
   - Example: If you have 5 years, enter `5`
   - This stays private

4. **Enter your salary expectation** (if using "With Salary" mode)
   - Example: Enter `75000` for $75,000
   - This stays private - employers won't see your exact expectation

**Important:** All this data stays on your device. It's never sent to a server or revealed to anyone.

---

### Step 4: Enter Job Requirements

In the **"Job Requirements"** section (marked with 🌐):

These are the requirements set by the employer:

1. **Minimum CGPA Required**
   - Example: `7.0` means you need at least 7.0 CGPA

2. **Minimum Degree Required**
   - Choose: Bachelors, Masters, or PhD
   - Example: If Bachelors is required, Masters/PhD holders also qualify

3. **Minimum Experience Required**
   - Example: `3` means at least 3 years of experience

4. **Salary Range** (if applicable)
   - Minimum and Maximum salary offered
   - Example: $60,000 - $90,000 range

**Note:** These requirements are public - everyone can see them.

---

### Step 5: Generate Proof & Verify

1. Review your inputs carefully
2. Click the **"Generate Proof & Verify"** button
3. Wait while the system creates your zero-knowledge proof (takes a few seconds)
4. You'll see the verification result:
   - ✅ **Success** - You meet all requirements!
   - ❌ **Failed** - Requirements not met

---

### Step 6: Understand Your Result

**If Verification Succeeds:**
- The employer knows you're qualified
- But they DON'T know your exact CGPA, experience, or salary expectation
- You proved eligibility without revealing your private data

**If Verification Fails:**
- The system determined requirements weren't met
- Your private data was still NOT revealed
- You can adjust requirements and try again

---

## What Gets Proved (and What Stays Private)

### ✅ What Employers Can See (Public):

- Whether you meet the requirements (Yes/No)
- The requirements themselves
- That a valid proof was generated

### 🔒 What Stays Private (Your Secrets):

- Your exact CGPA (e.g., they don't know if you have 7.2 or 9.8)
- Your exact years of experience (e.g., they don't know if you have 5 or 10 years)
- Your exact salary expectation
- Your personal wallet details
- Any other credential information

### 🔐 What Gets Proved (Zero-Knowledge Magic):

- "My CGPA is ≥ 7.0" (without revealing your actual CGPA)
- "My experience is ≥ 3 years" (without revealing exact years)
- "My degree level meets requirements" (without full academic records)
- "My salary expectation is in range" (without revealing the exact amount)

---

## Real-World Example

**Scenario:** You're applying for a Software Engineer position

**Requirements (Public):**
- Minimum CGPA: 7.0
- Degree: Bachelors or higher
- Experience: 3 years minimum
- Salary: $60,000 - $90,000

**Your Credentials (Private):**
- Actual CGPA: 7.8 (private!)
- Degree: Masters (private!)
- Experience: 5 years (private!)
- Salary expectation: $75,000 (private!)

**What Happens:**
1. You enter your private data
2. You enter the job requirements
3. Click "Generate Proof & Verify"
4. Result: ✅ **Eligible**

**What Employer Learns:**
- This candidate is eligible ✓
- That's it!

**What Employer DOESN'T Learn:**
- Not your exact CGPA (7.8)
- Not your exact experience (5 years)
- Not your exact salary expectation ($75,000)

They just know you qualify. Your competitive advantage stays with you!

---

## Troubleshooting

### Problem: Wallet won't connect

**Solutions:**
- Make sure Lace wallet extension is installed
- Ensure you're connected to Midnight Preprod network
- Refresh the page and try again
- Check that your wallet is unlocked

### Problem: Verification taking too long

**Solutions:**
- Zero-knowledge proof generation can take 5-30 seconds
- Check your internet connection
- Wait for the transaction to complete
- Don't close the browser window

### Problem: Verification keeps failing

**Solutions:**
- Double-check you entered values correctly
- Make sure your credentials actually meet the requirements
- Verify decimal places (7.5 not 75 for CGPA)
- Check that degree level meets minimum (Bachelors < Masters < PhD)

### Problem: "Not enough funds" error

**Solutions:**
- You need some test tokens for transaction fees on Preprod
- Visit Midnight faucet to get test tokens
- Wait for tokens to arrive, then retry

---

## Privacy Guarantee

**ZKHire uses cryptographic Zero-Knowledge Proofs to ensure:**

- ✅ Your actual credentials are NEVER revealed
- ✅ Only the verification result (pass/fail) goes on-chain
- ✅ Proofs are mathematically secure
- ✅ Even ZKHire cannot see your private data
- ✅ Data never leaves your device unencrypted

**How it works:**
1. Your private data stays in your browser
2. A zero-knowledge circuit generates a proof
3. The proof shows you meet requirements WITHOUT revealing actual values
4. The proof is verified on Midnight Network
5. Only the result is recorded

---

## Privacy Tips

1. **Never share your private keys or seed phrases**
2. **Don't screenshot or share your actual credentials**
3. **Use ZKHire for initial screening, reveal details only if you choose to proceed**
4. **Disconnect wallet when done**
5. **Only use on trusted networks**

---

## Next Steps

After successful verification:

1. **Screenshot the success message** (it doesn't reveal private data)
2. **Share the verification result** with the employer
3. **Proceed to next interview stages** with confidence
4. **Choose when to reveal actual credentials** - you're in control

---

## Support

Having issues? 

- Check our [GitHub Issues](https://github.com/your-username/zkhire/issues)
- Read the technical [README.md](../README.md)
- Review the [contract documentation](../contracts/README.md)

---

## Why This Matters

Traditional job applications require you to share everything upfront:
- Complete academic transcripts
- Full employment history
- Salary expectations
- Personal details

**ZKHire changes this:**
- Prove you're qualified first
- Share details only when YOU choose
- Maintain competitive advantage
- Control your personal data

**Your credentials are YOUR asset. Keep them private until you're ready to share.**

---

Built with privacy-first principles on Midnight Network 🌙
