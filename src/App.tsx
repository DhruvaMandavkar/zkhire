import Layout from './components/Layout'
import WalletConnect from './components/WalletConnect'
import EligibilityVerifier from './components/EligibilityVerifier'
import { useMidnight } from './hooks/useMidnight'
import './App.css'

function App() {
  const { isConnected, walletAddress, connectWallet, disconnectWallet, isLoading } = useMidnight()

  return (
    <Layout>
      <div className="app-container">
        <header className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              🔒 ZKHire
            </h1>
            <p className="hero-subtitle">
              Privacy-Preserving Job Eligibility Verification
            </p>
            <p className="hero-description">
              Prove you meet job requirements without revealing your complete credentials.
              Your data stays private. Your eligibility gets verified.
            </p>
          </div>
        </header>

        <div className="main-content">
          <WalletConnect
            isConnected={isConnected}
            walletAddress={walletAddress}
            onConnect={connectWallet}
            onDisconnect={disconnectWallet}
            isLoading={isLoading}
          />

          {isConnected && (
            <EligibilityVerifier walletAddress={walletAddress} />
          )}

          {!isConnected && (
            <div className="info-section">
              <h2>How ZKHire Works</h2>
              <div className="info-grid">
                <div className="info-card">
                  <div className="info-icon">🎓</div>
                  <h3>Submit Private Credentials</h3>
                  <p>Enter your actual CGPA, degree, and experience. This data never leaves your device.</p>
                </div>
                <div className="info-card">
                  <div className="info-icon">🔐</div>
                  <h3>Generate Zero-Knowledge Proof</h3>
                  <p>Create a cryptographic proof that you meet requirements without revealing exact values.</p>
                </div>
                <div className="info-card">
                  <div className="info-icon">✅</div>
                  <h3>Get Verified</h3>
                  <p>Employers see you're eligible, but your actual credentials remain completely private.</p>
                </div>
              </div>
            </div>
          )}
        </div>

        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Privacy First</h4>
              <p>Built on Midnight Network</p>
            </div>
            <div className="footer-section">
              <h4>Zero-Knowledge Proofs</h4>
              <p>Prove eligibility without revealing data</p>
            </div>
            <div className="footer-section">
              <h4>Open Source</h4>
              <p>Transparent and auditable</p>
            </div>
          </div>
        </footer>
      </div>
    </Layout>
  )
}

export default App
