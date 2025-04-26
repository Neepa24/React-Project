import React from 'react';
import './CryptoModal.css';

function CryptoModal({ asset, closeModal }) {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={closeModal}>X</button>
        <h2>{asset.name} ({asset.symbol})</h2>
        <img src={asset.logo} alt={asset.name} width="50" style={{ margin: '10px 0' }} />
        <p><strong>Price:</strong> ${asset.price.toFixed(2)}</p>
        <p><strong>Market Cap:</strong> ${asset.marketCap.toLocaleString()}</p>
        <p><strong>24h Volume:</strong> ${asset.volume24h.toLocaleString()}</p>
        <p><strong>Circulating Supply:</strong> {asset.circulatingSupply.toLocaleString()}</p>
        <p><strong>Max Supply:</strong> {asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</p>
      </div>
    </div>
  );
}

export default CryptoModal;
