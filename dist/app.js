'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var AppViewModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export('AppViewModel', AppViewModel = function () {
        function AppViewModel() {
          _classCallCheck(this, AppViewModel);
        }

        AppViewModel.prototype.configureRouter = function configureRouter(config, router) {
          config.map([{ route: 'cryptos', name: 'crypto-list', viewPorts: { main: { moduleId: 'master' }, side: { moduleId: null } } }, { route: 'cryptos/:code', name: 'crypto-detail', viewPorts: { main: { moduleId: 'master' }, side: { moduleId: 'detail' }, thumb: { moduleId: 'detail' } } }, { route: '', redirect: 'cryptos' }]);
          this.router = router;
        };

        return AppViewModel;
      }());

      _export('AppViewModel', AppViewModel);
    }
  };
});
//# sourceMappingURL=app.js.map
