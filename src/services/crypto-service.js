export class CryptoService {
  
  cryptos = [
    { rank: 1, name: 'Bitcoin', code: 'BTC', algorithm: 'Sha-256', price: 16820.04, mktCap: 281575812518.95, liquidity: 4991378791.12, popularity: 0.71 },
    { rank: 2, name: 'Etherium', code: 'ETH', algorithm: 'ethash', price: 727.48, mktCap: 70079868590.88, liquidity: 3313390952.09, popularity: 0.52 },
    { rank: 3, name: 'Ripple', code: 'XRP', algorithm: null, price: 0.55, mktCap: 21619167409.13, liquidity: 2582957174.14, popularity: 0.42 },
    { rank: 4, name: 'Litecoin', code: 'LTC', algorithm: 'Scrypt', price: 303.66, mktCap: 16488432002.59, liquidity: 1909518775.38, popularity: 0.43 },
    { rank: 5, name: 'Monero', code: 'XMR', algorithm: 'cryptonight', price: 322.79, mktCap: 4995678002.98, liquidity: 281091219.61, popularity: 0.44 },
    { rank: 6, name: 'Dashcoin', code: 'DASH', algorithm: 'x11', price: 941.47, mktCap: 7298669621.91, liquidity: 275766544.04, popularity: 0.45 }
  ];

  getAll() {
    return Promise.resolve(this.cryptos);
  }

  get(code) {
    return Promise.resolve(this.cryptos.find((currency) => currency.code === code));
  }
}

