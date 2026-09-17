# ZKHire Level 4 Submission Checklist

Quick reference for final verification before submission.

---

## ✅ Technical Requirements

- [ ] Contract compiled: `compact compile contracts/zkhire.compact`
- [ ] Tests passing: `npm test` → 16/16 ✅
- [ ] Build successful: `npm run build` → zero errors
- [ ] CI/CD passing: GitHub Actions green ✅

---

## 🚀 Deployment Requirements

- [ ] Contract deployed to Preprod
- [ ] **Contract address in README.md** ⚠️ MANDATORY
- [ ] Frontend deployed (Vercel/Netlify/GitHub Pages)
- [ ] Live demo URL in README.md
- [ ] CI badge in README.md

---

## 📄 Documentation Requirements

- [ ] README.md complete with ALL sections:
  - [ ] CI badge
  - [ ] Live demo link
  - [ ] Contract address table ⚠️ MANDATORY
  - [ ] What product does (2-3 paragraphs)
  - [ ] Privacy model (public/private/proved)
  - [ ] Tech stack
  - [ ] Prerequisites
  - [ ] Setup & run locally (numbered steps)
  - [ ] Run tests section
  - [ ] CI/CD description
  - [ ] Usage guide reference
  - [ ] Product X profile link

- [ ] docs/USAGE.md created
- [ ] PROPOSAL.md from Level 3 included
- [ ] File structure matches spec

---

## 🐦 X Profile Requirements

- [ ] Product X account created
- [ ] Tweet 1 posted (Introduction)
- [ ] Tweet 2 posted (Technical insight)
- [ ] Tweet 3 posted (Call to action with demo link)
- [ ] X profile link added to README.md
- [ ] Demo URL updated in tweets

---

## 📹 Video Requirements (Optional but Recommended)

- [ ] Demo video recorded (1-2 minutes)
- [ ] Shows wallet connection
- [ ] Shows verification process
- [ ] Explains privacy model
- [ ] Video uploaded

---

## 💾 Git Requirements

- [ ] At least 15 meaningful commits
- [ ] Clear commit messages (not "update", "fix", etc.)
- [ ] All code pushed to GitHub
- [ ] Repository is public
- [ ] No sensitive data committed (.env files, keys, etc.)

---

## 🔍 Pre-Submission Verification

Run these commands:

```bash
# 1. Tests pass
npm test
# Expected: 16 passing tests

# 2. Build succeeds
npm run build
# Expected: Build completes with no errors

# 3. Check commit count
git log --oneline | wc -l
# Expected: 15 or more

# 4. Verify contract file exists
ls contracts/zkhire.compact
# Expected: File found

# 5. Check README has contract address
grep "midnight1" README.md
# Expected: Contract address found
```

---

## ⚠️ CRITICAL - Must Have

These items will cause submission failure if missing:

1. **Contract address in README.md**
   - Must be actual deployed address
   - Must start with "midnight1..."
   - Must be in the Contract Address table

2. **Live demo URL in README.md**
   - Must be working URL
   - Must be accessible publicly

3. **15+ meaningful commits**
   - Each commit should have clear message
   - Should show development progression

4. **Zero build errors**
   - `npm run build` must succeed
   - `npm test` must pass

---

## 📋 Final Check Before Submit

Read through your README.md and verify:

- [ ] No "[PLACEHOLDER]" text remaining
- [ ] No "YOUR_USERNAME" or "YOUR_LINK" remaining
- [ ] Contract address is present and correct
- [ ] Live demo URL works when clicked
- [ ] X profile link works when clicked
- [ ] CI badge shows passing status
- [ ] All links are clickable and correct

---

## 🎯 Submission Steps

1. [ ] Go to Rise In platform
2. [ ] Navigate to Level 4 submission
3. [ ] Paste GitHub repo URL
4. [ ] Add live demo URL
5. [ ] Add X profile URL
6. [ ] Add demo video URL (if you made one)
7. [ ] Submit

---

## ✨ Post-Submission

- [ ] Tweet about completing Level 4
- [ ] Tag @MidnightNtwrk
- [ ] Use #MidnightBuilderChallenge
- [ ] Share demo with community

---

**Current Status:**

Contract: ⬜ Not Deployed / ✅ Deployed  
Frontend: ⬜ Not Deployed / ✅ Deployed  
X Account: ⬜ Not Created / ✅ Created  
Commits: ___/15 completed

**Last Updated:** [Date]

---

## Need Help?

- Review: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)
- User Guide: [docs/USAGE.md](./docs/USAGE.md)
- Midnight Docs: https://docs.midnight.network
- Community: Midnight Discord
