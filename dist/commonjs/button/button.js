'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var _aureliaFramework = require('aurelia-framework');

var MaterialButton = (function () {
  function MaterialButton(element) {
    _classCallCheck(this, _MaterialButton);

    this.element = element;
  }

  _createClass(MaterialButton, [{
    key: 'attached',
    value: function attached() {
      var _this = this;

      var classes = ['btn', 'waves-effect', 'waves-effect-light'];
      if (!this.raised) {
        classes.push('btn-flat');
      }

      classes.forEach(function (c) {
        return $(_this.element).addClass(c);
      });
    }
  }]);

  var _MaterialButton = MaterialButton;
  MaterialButton = (0, _aureliaFramework.inject)(Element)(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.bindable)({ name: 'raised', defaultValue: true })(MaterialButton) || MaterialButton;
  MaterialButton = (0, _aureliaFramework.customAttribute)('material-button')(MaterialButton) || MaterialButton;
  return MaterialButton;
})();

exports.MaterialButton = MaterialButton;