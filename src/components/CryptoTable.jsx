import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CryptoRow from './CryptoRow';
import './CryptoTable.css';

function CryptoTable() {
  const assets = useSelector(state => state.crypto.assets);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (key) => {
    if (sortKey === key) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const sortedAssets = [...assets].sort((a, b) => {
    if (sortKey === 'price') {
      return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
    } else if (sortKey === 'marketCap') {
      return sortOrder === 'asc' ? a.marketCap - b.marketCap : b.marketCap - a.marketCap;
    }
    return 0;
  });

  return (
    <div className="table-container">
      <div className="sort-buttons">
        <button onClick={() => handleSort('price')}>
          Sort by Price {sortKey === 'price' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
        </button>
        <button onClick={() => handleSort('marketCap')}>
          Sort by Market Cap {sortKey === 'marketCap' ? (sortOrder === 'asc' ? '↑' : '↓') : ''}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Logo</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>Market Cap</th>
            <th>24h Volume</th>
            <th>Circulating Supply</th>
            <th>Max Supply</th>
            <th>7D Chart</th>
          </tr>
        </thead>

        <tbody>
          {sortedAssets.map((asset, index) => (
            <CryptoRow key={asset.id} asset={asset} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CryptoTable;
