define(['exports', 'aurelia-framework', '../common/attributes', 'materialize/js/waves'], function (exports, _aureliaFramework, _commonAttributes, _materializeJsWaves) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var Waves = (function () {
    function Waves(element) {
      _classCallCheck(this, _Waves);

      this.element = element;
    }

    _createClass(Waves, [{
      key: 'attached',
      value: function attached() {
        var _this = this;

        var classes = ['waves-effect'];
        if ((0, _commonAttributes.getBooleanFromAttribute)(this.light)) {
          classes.push('waves-light');
        }
        classes.forEach(function (c) {
          return _this.element.classList.add(c);
        });
        _materializeJsWaves.attach(this.element);
      }
    }]);

    var _Waves = Waves;
    Waves = (0, _aureliaFramework.inject)(Element)(Waves) || Waves;
    Waves = (0, _aureliaFramework.bindable)({ name: 'light', defaultValue: false })(Waves) || Waves;
    Waves = (0, _aureliaFramework.customAttribute)('waves')(Waves) || Waves;
    return Waves;
  })();

  exports.Waves = Waves;
});