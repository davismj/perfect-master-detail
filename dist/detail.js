"use strict";

System.register([], function (_export, _context) {
  "use strict";

  var DetailViewModel;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  return {
    setters: [],
    execute: function () {
      _export("DetailViewModel", DetailViewModel = function () {
        function DetailViewModel() {
          _classCallCheck(this, DetailViewModel);
        }

        DetailViewModel.prototype.activate = function activate(_ref) {
          var code = _ref.code;

          if (code) {
            this.crypto = { code: code };
          }
        };

        return DetailViewModel;
      }());

      _export("DetailViewModel", DetailViewModel);
    }
  };
});
//# sourceMappingURL=detail.js.map
