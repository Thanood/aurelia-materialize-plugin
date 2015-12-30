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

var MaterialButton = (function () {
  function MaterialButton(element) {
    _classCallCheck(this, _MaterialButton);

    this.element = element;
  }

  _createClass(MaterialButton, [{
    key: 'attached',
    value: function attached() {
      var _this = this;

      var classes = [];
      if ((0, _commonAttributes.getBooleanFromAttribute)(this.large)) {
        classes.push('btn-large');
      } else {
        classes.push('btn');
      }
      if (!(0, _commonAttributes.getBooleanFromAttribute)(this.raised)) {
        classes.push('btn-flat');
      }

      if ((0, _commonAttributes.getBooleanFromAttribute)(this.ripple)) {
        classes.push('waves-effect');
        classes.push('waves-light');
      }

      classes.forEach(function (c) {
        return $(_this.element).addClass(c);
      });

      if ((0, _commonAttributes.getBooleanFromAttribute)(this.ripple)) {
        ripple.attach(this.element);
      }
    }
  }]);

  var _MaterialButton = MaterialButton;
  MaterialButton = (0, _aureliaFramework.inject)(Element)(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.bindable)({ name: 'ripple', defaultValue: true })(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.bindable)({ name: 'raised', defaultValue: true })(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.bindable)({ name: 'large', defaultValue: false })(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.customAttribute)('material-button')(MaterialButton) || MaterialButton;
  return MaterialButton;
})();

exports.MaterialButton = MaterialButton;