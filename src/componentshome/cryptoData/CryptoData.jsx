import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CryptoData.css';

const formatNumber = (number) => {
  if (number >= 1e9) {
    return (number / 1e9).toFixed(2) + 'B';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(2) + 'M';
  }
  return number.toFixed(2);
};

const cryptoIcons = {
  BTC: 'bitcoin.png',
  ETH: 'ethereum.png',
  USDT: 'tether.png',
  BNB: 'bnb.png',
  USDC: 'dollar-symbol.png',
  XRP: 'xrp.png',
  SOL: 'solana.png',
  ADA: 'cardano.png',
  DOGE: 'dogecoin.png',
  TRX: 'trx@2x.png',
  AVAX: 'avalanche.png',
  SHIB: 'shiba.png',
  STETH: 'LidoStakedEth.png',
};


const RealTimeData = () => {
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
          params: {
            vs_currency: 'usd',
            order: 'market_cap_desc',
            per_page: 10,
            page: 1,
            sparkline: false,
          },
        });

        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="crypto-container">
      <table className="crypto-table">
        <thead>
          <tr>
            <th className="rank-cell">Rank</th>
            <th className="name-cell">Name</th>
            <th>Price (USD)</th>
            <th>Market Cap (USD)</th>
            <th>24Hr Change (%)</th>
            <th>24Hr Volume (USD)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map((crypto, index) => (
            <tr key={index}>
              <td className="rank-cell">{crypto.market_cap_rank}</td>
              <td className="name-cell">
                <div className="crypto-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/icons/${cryptoIcons[crypto.symbol.toUpperCase()] || 'default.png'}`}
                    alt={crypto.name}
                    width="30"
                  />

                  <div className="crypto-details">
                    <span className="crypto-name">{crypto.name}</span>
                    <br />
                    <span className="crypto-symbol">{crypto.symbol.toUpperCase()}</span>
                  </div>
                </div>
              </td>
              <td>${formatNumber(crypto.current_price)}</td>
              <td>${formatNumber(crypto.market_cap)}</td>
              <td
                className={`percent-change ${crypto.price_change_percentage_24h >= 0 ? 'positive' : 'negative'
                  }`}
              >
                {crypto.price_change_percentage_24h.toFixed(2)}%
              </td>
              <td>${formatNumber(crypto.total_volume)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RealTimeData;
