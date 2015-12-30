'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var _commonAttributes = require('../common/attributes');

var _materializeJsWaves = require('materialize/js/waves');

var ripple = _interopRequireWildcard(_materializeJsWaves);

var Waves = (function () {
  function Waves(element) {
    _classCallCheck(this, _Waves);

    this.element = element;
  }

  _createClass(Waves, [{
    key: 'attached',
    value: function attached() {
      var classes = ['waves-effect'];
      if ((0, _commonAttributes.getBooleanFromAttribute)(this.light)) {
        classes.push('waves-light');
      }
      ripple.attach(this.element);
    }
  }]);

  var _Waves = Waves;
  Waves = (0, _aureliaFramework.inject)(Element)(Waves) || Waves;
  Waves = (0, _aureliaFramework.bindable)({ name: 'light', defaultValue: true })(Waves) || Waves;
  Waves = (0, _aureliaFramework.customAttribute)('waves')(Waves) || Waves;
  return Waves;
})();

exports.Waves = Waves;