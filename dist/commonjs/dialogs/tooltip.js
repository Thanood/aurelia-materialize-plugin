'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

var _aureliaFramework = require('aurelia-framework');

require('materialize/js/tooltip');

var Tooltip = (function () {
  var _instanceInitializers = {};
  var _instanceInitializers = {};

  _createDecoratedClass(Tooltip, [{
    key: 'text',
    decorators: [(0, _aureliaFramework.bindable)()],
    initializer: function initializer() {
      return '';
    },
    enumerable: true
  }], null, _instanceInitializers);

  function Tooltip(element) {
    _classCallCheck(this, _Tooltip);

    _defineDecoratedPropertyDescriptor(this, 'text', _instanceInitializers);

    this.element = element;
  }

  _createDecoratedClass(Tooltip, [{
    key: 'attached',
    value: function attached() {
      this.element.setAttribute('data-tooltip', this.text);
      $(this.element).tooltip({ position: 'bottom', delay: 50 });
    }
  }], null, _instanceInitializers);

  var _Tooltip = Tooltip;
  Tooltip = (0, _aureliaFramework.inject)(Element)(Tooltip) || Tooltip;
  Tooltip = (0, _aureliaFramework.customAttribute)('material-tooltip')(Tooltip) || Tooltip;
  return Tooltip;
})();

exports.Tooltip = Tooltip;