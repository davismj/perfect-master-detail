'use strict';

System.register(['aurelia-framework', 'services/crypto-service'], function (_export, _context) {
  "use strict";

  var inject, CryptoService, _dec, _class, MasterViewModel, CurrencyValueConverter, PercentageValueConverter;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
    }, function (_servicesCryptoService) {
      CryptoService = _servicesCryptoService.CryptoService;
    }],
    execute: function () {
      _export('MasterViewModel', MasterViewModel = (_dec = inject(CryptoService), _dec(_class = function () {
        function MasterViewModel(cryptoService) {
          _classCallCheck(this, MasterViewModel);

          this.cryptoService = cryptoService;
        }

        MasterViewModel.prototype.activate = function activate() {
          var _this = this;

          return this.cryptoService.getAll().then(function (cryptos) {
            return _this.cryptos = cryptos;
          });
        };

        return MasterViewModel;
      }()) || _class));

      _export('MasterViewModel', MasterViewModel);

      _export('CurrencyValueConverter', CurrencyValueConverter = function () {
        function CurrencyValueConverter() {
          _classCallCheck(this, CurrencyValueConverter);
        }

        CurrencyValueConverter.prototype.toView = function toView(value) {
          return '$' + value.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
        };

        return CurrencyValueConverter;
      }());

      _export('CurrencyValueConverter', CurrencyValueConverter);

      _export('PercentageValueConverter', PercentageValueConverter = function () {
        function PercentageValueConverter() {
          _classCallCheck(this, PercentageValueConverter);
        }

        PercentageValueConverter.prototype.toView = function toView(value) {
          return (value * 100).toFixed(0) + '%';
        };

        return PercentageValueConverter;
      }());

      _export('PercentageValueConverter', PercentageValueConverter);
    }
  };
});
//# sourceMappingURL=master.js.map
