import React from 'react'
import './WalletConnect.css'

interface WalletConnectProps {
  isConnected: boolean
  walletAddress: string | null
  onConnect: () => void
  onDisconnect: () => void
  isLoading: boolean
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  isConnected,
  walletAddress,
  onConnect,
  onDisconnect,
  isLoading,
}) => {
  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  return (
    <div className="wallet-connect">
      <div className="wallet-card">
        {!isConnected ? (
          <div className="wallet-connect-content">
            <div className="wallet-icon">🦊</div>
            <h2>Connect Your Wallet</h2>
            <p className="wallet-description">
              Connect your Lace wallet to start verifying your job eligibility privately
            </p>
            <button
              className="btn btn-primary btn-lg"
              onClick={onConnect}
              disabled={isLoading}
            >
              {isLoading ? 'Connecting...' : 'Connect Lace Wallet'}
            </button>
            <p className="wallet-note">
              Make sure you have Lace wallet installed and configured for Midnight Network
            </p>
          </div>
        ) : (
          <div className="wallet-connected-content">
            <div className="wallet-status">
              <span className="status-indicator"></span>
              <span className="status-text">Connected</span>
            </div>
            <div className="wallet-address">
              <span className="address-label">Wallet Address:</span>
              <code className="address-value">{formatAddress(walletAddress || '')}</code>
            </div>
            <button
              className="btn btn-secondary"
              onClick={onDisconnect}
            >
              Disconnect
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default WalletConnect
