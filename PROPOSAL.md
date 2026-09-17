# ZKHire — Private Job Eligibility Verification

**Category:** Consumer & Social

## Short Idea

A privacy-preserving job verification system where applicants can prove they meet job requirements—such as degree, CGPA, experience, or certification—using Zero-Knowledge Proofs (ZKPs) without revealing their complete personal information.

## Example

> "I have a valid degree and CGPA above 7.0" ✅

**Without revealing:**
- The applicant's exact CGPA
- Full academic record
- Personal identifying information

## Why Midnight?

Traditional job applications require sharing complete credentials and personal data with every employer, creating privacy risks and data exposure. ZKHire uses Midnight's Zero-Knowledge Proofs to allow applicants to prove eligibility without revealing sensitive details, giving control back to job seekers while maintaining trust for employers.

## Product Vision

Job seekers can:
- Store their credentials privately
- Generate proofs of eligibility for specific requirements
- Apply to jobs without oversharing personal data

Employers can:
- Set verifiable requirements (degree, CGPA threshold, years of experience)
- Verify applicants meet criteria without accessing raw data
- Trust the proof while respecting privacy

## Privacy Model

- **Public:** Job requirements, proof verification results
- **Private:** Actual CGPA, degree details, personal credentials
- **Proved:** Applicant meets threshold requirements without revealing exact values
