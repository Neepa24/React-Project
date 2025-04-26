import React, { useState } from 'react';

function CryptoRow({ asset, index }) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleRowClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <tr onClick={handleRowClick}>
        <td>{index + 1}</td>
        <td><img src={asset.logo} alt={asset.name} width="24" /></td>
        <td>{asset.name}</td>
        <td>{asset.symbol}</td>
        <td>${asset.price.toFixed(2)}</td>
        <td className={asset.percent1h >= 0 ? 'positive' : 'negative'}>{asset.percent1h}%</td>
        <td className={asset.percent24h >= 0 ? 'positive' : 'negative'}>{asset.percent24h}%</td>
        <td className={asset.percent7d >= 0 ? 'positive' : 'negative'}>{asset.percent7d}%</td>
        <td>${asset.marketCap.toLocaleString()}</td>
        <td>${asset.volume24h.toLocaleString()}</td>
        <td>{asset.circulatingSupply.toLocaleString()}</td>
        <td>{asset.maxSupply ? asset.maxSupply.toLocaleString() : '∞'}</td>
        <td><img src={asset.chart} alt="7D Chart" width="60" /></td>
      </tr>

      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button onClick={handleClosePopup}>×</button> 
            <img src={asset.logo} alt={asset.name} className="popup-logo" /> 
            <h3>{asset.name}</h3>
            <p>Price: ${asset.price.toFixed(2)}</p>
            <p>Market Cap: ${asset.marketCap.toLocaleString()}</p>
            <p>Volume: ${asset.volume24h.toLocaleString()}</p>
            <p>7D Change: {asset.percent7d}%</p>
          </div>
        </div>
      )}
    </>
  );
}

export default React.memo(CryptoRow);
