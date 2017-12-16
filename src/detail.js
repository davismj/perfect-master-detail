// import { inject } from 'aurelia-framework';
// import { CryptoService } from 'services/crypto-service';

// @inject(CryptoService)
export class DetailViewModel {

  // constructor(cryptoService) {
  //   this.cryptoService = cryptoService;
  // }

  // canActivate({ code }) {
  //   return this.cryptoService.get(code)
  //     .then((crypto) => {
  //       if (crypto) {
  //         this.crypto = crypto;
  //       }
  //       return !!this.crypto;
  //     });
  // }

  activate({ code }) {
    if (code) {
      this.crypto = { code };  
    }
  }
}
