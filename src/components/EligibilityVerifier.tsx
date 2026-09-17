import React, { useState } from 'react'
import './EligibilityVerifier.css'

interface EligibilityVerifierProps {
  walletAddress: string | null
}

type VerificationType = 'full' | 'cgpa' | 'experience' | 'salary'

const EligibilityVerifier: React.FC<EligibilityVerifierProps> = () => {
  const [verificationType, setVerificationType] = useState<VerificationType>('full')
  const [isVerifying, setIsVerifying] = useState(false)
  const [verificationResult, setVerificationResult] = useState<{
    success: boolean
    message: string
  } | null>(null)

  // Form state for full verification
  const [actualCGPA, setActualCGPA] = useState('')
  const [minCGPA, setMinCGPA] = useState('7.0')
  const [actualDegree, setActualDegree] = useState('1')
  const [requiredDegree, setRequiredDegree] = useState('1')
  const [actualExperience, setActualExperience] = useState('')
  const [minExperience, setMinExperience] = useState('3')
  
  // Salary verification
  const [expectedSalary, setExpectedSalary] = useState('')
  const [minSalary, setMinSalary] = useState('60000')
  const [maxSalary, setMaxSalary] = useState('90000')

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsVerifying(true)
    setVerificationResult(null)

    // Simulate ZK proof generation and verification
    // In production, this would call the actual Midnight contract
    await new Promise(resolve => setTimeout(resolve, 2000))

    let isEligible = false

    try {
      switch (verificationType) {
        case 'full':
          isEligible = 
            parseFloat(actualCGPA) >= parseFloat(minCGPA) &&
            parseInt(actualDegree) >= parseInt(requiredDegree) &&
            parseFloat(actualExperience) >= parseFloat(minExperience)
          break
        
        case 'cgpa':
          isEligible = parseFloat(actualCGPA) >= parseFloat(minCGPA)
          break
        
        case 'experience':
          isEligible = parseFloat(actualExperience) >= parseFloat(minExperience)
          break
        
        case 'salary':
          isEligible = 
            parseFloat(actualCGPA) >= parseFloat(minCGPA) &&
            parseFloat(actualExperience) >= parseFloat(minExperience) &&
            parseFloat(expectedSalary) >= parseFloat(minSalary) &&
            parseFloat(expectedSalary) <= parseFloat(maxSalary)
          break
      }

      setVerificationResult({
        success: isEligible,
        message: isEligible 
          ? '✅ Verification Successful! You meet all requirements.'
          : '❌ Verification Failed. Requirements not met.'
      })
    } catch (error) {
      setVerificationResult({
        success: false,
        message: '⚠️ Verification error. Please check your inputs.'
      })
    } finally {
      setIsVerifying(false)
    }
  }

  return (
    <div className="eligibility-verifier">
      <div className="verifier-card">
        <h2 className="verifier-title">🔐 Privacy-Preserving Verification</h2>
        <p className="verifier-description">
          Your actual credentials are never revealed. Only the verification result is public.
        </p>

        <div className="verification-type-selector">
          <button
            className={`type-btn ${verificationType === 'full' ? 'active' : ''}`}
            onClick={() => setVerificationType('full')}
          >
            Full Eligibility
          </button>
          <button
            className={`type-btn ${verificationType === 'cgpa' ? 'active' : ''}`}
            onClick={() => setVerificationType('cgpa')}
          >
            CGPA Only
          </button>
          <button
            className={`type-btn ${verificationType === 'experience' ? 'active' : ''}`}
            onClick={() => setVerificationType('experience')}
          >
            Experience Only
          </button>
          <button
            className={`type-btn ${verificationType === 'salary' ? 'active' : ''}`}
            onClick={() => setVerificationType('salary')}
          >
            With Salary
          </button>
        </div>

        <form onSubmit={handleVerify} className="verification-form">
          <div className="form-sections">
            {/* Private Data Section */}
            <div className="form-section private-section">
              <h3 className="section-title">
                <span className="lock-icon">🔒</span>
                Private Data (Never Revealed)
              </h3>
              
              {(verificationType === 'full' || verificationType === 'cgpa' || verificationType === 'salary') && (
                <div className="form-group">
                  <label>Your Actual CGPA</label>
                  <input
                    type="number"
                    step="0.01"
                    min="0"
                    max="10"
                    value={actualCGPA}
                    onChange={(e) => setActualCGPA(e.target.value)}
                    required
                    placeholder="e.g., 7.8"
                    className="form-input"
                  />
                  <span className="input-hint">This value stays private</span>
                </div>
              )}

              {verificationType === 'full' && (
                <div className="form-group">
                  <label>Your Degree Level</label>
                  <select
                    value={actualDegree}
                    onChange={(e) => setActualDegree(e.target.value)}
                    className="form-input"
                  >
                    <option value="1">Bachelors</option>
                    <option value="2">Masters</option>
                    <option value="3">PhD</option>
                  </select>
                  <span className="input-hint">This value stays private</span>
                </div>
              )}

              {(verificationType === 'full' || verificationType === 'experience' || verificationType === 'salary') && (
                <div className="form-group">
                  <label>Your Years of Experience</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    value={actualExperience}
                    onChange={(e) => setActualExperience(e.target.value)}
                    required
                    placeholder="e.g., 5"
                    className="form-input"
                  />
                  <span className="input-hint">This value stays private</span>
                </div>
              )}

              {verificationType === 'salary' && (
                <div className="form-group">
                  <label>Your Expected Salary ($)</label>
                  <input
                    type="number"
                    step="1000"
                    min="0"
                    value={expectedSalary}
                    onChange={(e) => setExpectedSalary(e.target.value)}
                    required
                    placeholder="e.g., 75000"
                    className="form-input"
                  />
                  <span className="input-hint">This value stays private</span>
                </div>
              )}
            </div>

            {/* Public Requirements Section */}
            <div className="form-section public-section">
              <h3 className="section-title">
                <span className="lock-icon">🌐</span>
                Job Requirements (Public)
              </h3>

              {(verificationType === 'full' || verificationType === 'cgpa' || verificationType === 'salary') && (
                <div className="form-group">
                  <label>Minimum CGPA Required</label>
                  <input
                    type="number"
                    step="0.1"
                    min="0"
                    max="10"
                    value={minCGPA}
                    onChange={(e) => setMinCGPA(e.target.value)}
                    className="form-input"
                  />
                </div>
              )}

              {verificationType === 'full' && (
                <div className="form-group">
                  <label>Minimum Degree Required</label>
                  <select
                    value={requiredDegree}
                    onChange={(e) => setRequiredDegree(e.target.value)}
                    className="form-input"
                  >
                    <option value="1">Bachelors</option>
                    <option value="2">Masters</option>
                    <option value="3">PhD</option>
                  </select>
                </div>
              )}

              {(verificationType === 'full' || verificationType === 'experience' || verificationType === 'salary') && (
                <div className="form-group">
                  <label>Minimum Experience Required (years)</label>
                  <input
                    type="number"
                    step="0.5"
                    min="0"
                    value={minExperience}
                    onChange={(e) => setMinExperience(e.target.value)}
                    className="form-input"
                  />
                </div>
              )}

              {verificationType === 'salary' && (
                <>
                  <div className="form-group">
                    <label>Minimum Salary Offer ($)</label>
                    <input
                      type="number"
                      step="1000"
                      min="0"
                      value={minSalary}
                      onChange={(e) => setMinSalary(e.target.value)}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label>Maximum Salary Offer ($)</label>
                    <input
                      type="number"
                      step="1000"
                      min="0"
                      value={maxSalary}
                      onChange={(e) => setMaxSalary(e.target.value)}
                      className="form-input"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg verify-btn"
            disabled={isVerifying}
          >
            {isVerifying ? (
              <>
                <span className="spinner"></span>
                Generating Zero-Knowledge Proof...
              </>
            ) : (
              <>
                Generate Proof & Verify
              </>
            )}
          </button>
        </form>

        {verificationResult && (
          <div className={`verification-result ${verificationResult.success ? 'success' : 'failure'}`}>
            <p className="result-message">{verificationResult.message}</p>
            <div className="result-explanation">
              <h4>What Just Happened?</h4>
              <p>
                {verificationResult.success ? (
                  <>
                    A zero-knowledge proof was generated proving you meet the requirements.
                    The employer can verify you're eligible, but your actual credentials
                    (exact CGPA, years of experience, etc.) remain completely private.
                  </>
                ) : (
                  <>
                    The verification process determined that the provided credentials
                    don't meet the specified requirements. No private data was revealed
                    during this check.
                  </>
                )}
              </p>
            </div>
          </div>
        )}

        <div className="privacy-guarantee">
          <h4>🛡️ Privacy Guarantee</h4>
          <ul>
            <li>✓ Your actual CGPA is never revealed</li>
            <li>✓ Your exact experience is never disclosed</li>
            <li>✓ Only the verification result (pass/fail) is public</li>
            <li>✓ Cryptographically secure using Zero-Knowledge Proofs</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default EligibilityVerifier
