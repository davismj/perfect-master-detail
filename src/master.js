import { inject } from 'aurelia-framework';
import { CryptoService } from 'services/crypto-service';

@inject(CryptoService)
export class MasterViewModel {
  constructor(cryptoService) {
    this.cryptoService = cryptoService;
  }
  activate() {
    return this.cryptoService.getAll()
      .then((cryptos) => this.cryptos = cryptos);
  }
}

export class CurrencyValueConverter {
  toView(value) {
    return `$${value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')}`;
  }
}

export class PercentageValueConverter {
  toView(value) {
    return `${(value*100).toFixed(0)}%`;
  }
}
