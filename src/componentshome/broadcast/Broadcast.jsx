import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './broadcast.css';

const Broadcast = () => {
  const [cryptoData, setCryptoData] = useState([]);

  // Symbol-to-icon mapping
  const cryptoIcons = {
    BTC: 'bitcoin.png',
    ETH: 'ethereum.png',
    BNB: 'binance.png',
    USDT: 'tether.png',
    USDC: 'dollar.png',
    XRP: 'xrp.png',
    DOGE: 'dogecoin.png',
    ADA: 'cardano.png',
    TRX: 'tron.png',
    SOL: 'solana.png',
    AVAX: 'avalanche.png',
    SHIB: 'shiba.png',
    STETH: "LidoStakedEth.png",
  };

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await axios.get(
          'https://api.coingecko.com/api/v3/coins/markets',
          {
            params: {
              vs_currency: 'usd',
              order: 'market_cap_desc',
              per_page: 10,
              page: 1,
              sparkline: false,
            },
          }
        );
        setCryptoData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCryptoData();
    const interval = setInterval(fetchCryptoData, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="crypto-list-container">
        <div className="crypto-list">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="crypto-item">
              <img
                src={`/icons/${cryptoIcons[crypto.symbol.toUpperCase()]}`}
                alt={crypto.symbol}
                className="crypto-icon"
              />
              <div className="crypto-right">
                <div className="crypto-name">{crypto.name}</div>
                <div className="crypto-symbol">{crypto.symbol.toUpperCase()}</div>
              </div>
              <div className="crypto-left">
                <div className="crypto-price">${crypto.current_price.toFixed(2)} USD</div>
                <div
                  className={`crypto-24hr-change ${
                    crypto.price_change_percentage_24h < 0 ? 'negative' : 'positive'
                  }`}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="crypto-list">
          {cryptoData.map((crypto, index) => (
            <div key={index} className="crypto-item">
              <img
                src={`/icons/${cryptoIcons[crypto.symbol.toUpperCase()]}`}
                alt={crypto.symbol}
                className="crypto-icon"
              />
              <div className="crypto-right">
                <div className="crypto-name">{crypto.name}</div>
                <div className="crypto-symbol">{crypto.symbol.toUpperCase()}</div>
              </div>
              <div className="crypto-left">
                <div className="crypto-price">${crypto.current_price.toFixed(2)} USD</div>
                <div
                  className={`crypto-24hr-change ${
                    crypto.price_change_percentage_24h < 0 ? 'negative' : 'positive'
                  }`}
                >
                  {crypto.price_change_percentage_24h.toFixed(2)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Broadcast;
