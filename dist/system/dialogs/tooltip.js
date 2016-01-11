System.register(['aurelia-framework', 'materialize/js/tooltip'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, Tooltip;

  var _createDecoratedClass = (function () { function defineProperties(target, descriptors, initializers) { for (var i = 0; i < descriptors.length; i++) { var descriptor = descriptors[i]; var decorators = descriptor.decorators; var key = descriptor.key; delete descriptor.key; delete descriptor.decorators; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor || descriptor.initializer) descriptor.writable = true; if (decorators) { for (var f = 0; f < decorators.length; f++) { var decorator = decorators[f]; if (typeof decorator === 'function') { descriptor = decorator(target, key, descriptor) || descriptor; } else { throw new TypeError('The decorator for method ' + descriptor.key + ' is of the invalid type ' + typeof decorator); } } if (descriptor.initializer !== undefined) { initializers[key] = descriptor; continue; } } Object.defineProperty(target, key, descriptor); } } return function (Constructor, protoProps, staticProps, protoInitializers, staticInitializers) { if (protoProps) defineProperties(Constructor.prototype, protoProps, protoInitializers); if (staticProps) defineProperties(Constructor, staticProps, staticInitializers); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  function _defineDecoratedPropertyDescriptor(target, key, descriptors) { var _descriptor = descriptors[key]; if (!_descriptor) return; var descriptor = {}; for (var _key in _descriptor) descriptor[_key] = _descriptor[_key]; descriptor.value = descriptor.initializer ? descriptor.initializer.call(target) : undefined; Object.defineProperty(target, key, descriptor); }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_materializeJsTooltip) {}],
    execute: function () {
      Tooltip = (function () {
        var _instanceInitializers = {};
        var _instanceInitializers = {};

        _createDecoratedClass(Tooltip, [{
          key: 'text',
          decorators: [bindable()],
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
        Tooltip = inject(Element)(Tooltip) || Tooltip;
        Tooltip = customAttribute('material-tooltip')(Tooltip) || Tooltip;
        return Tooltip;
      })();

      _export('Tooltip', Tooltip);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpYWxvZ3MvdG9vbHRpcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7eUNBS2EsT0FBTzs7Ozs7Ozs7OzttQ0FMWixRQUFROzBDQUFFLGVBQWU7aUNBQUUsTUFBTTs7O0FBSzVCLGFBQU87Ozs7OEJBQVAsT0FBTzs7dUJBQ2pCLFFBQVEsRUFBRTs7bUJBQVEsRUFBRTs7Ozs7QUFFVCxpQkFIRCxPQUFPLENBR0wsT0FBTyxFQUFFOzs7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7OEJBTFMsT0FBTzs7aUJBTVQsb0JBQUc7QUFDVCxnQkFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNyRCxhQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7V0FDNUQ7Ozt1QkFUUyxPQUFPO0FBQVAsZUFBTyxHQURuQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsT0FBTyxLQUFQLE9BQU87QUFBUCxlQUFPLEdBRm5CLGVBQWUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUV2QixPQUFPLEtBQVAsT0FBTztlQUFQLE9BQU8iLCJmaWxlIjoiZGlhbG9ncy90b29sdGlwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtiaW5kYWJsZSwgY3VzdG9tQXR0cmlidXRlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0ICdtYXRlcmlhbGl6ZS9qcy90b29sdGlwJztcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ21hdGVyaWFsLXRvb2x0aXAnKVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBUb29sdGlwIHtcclxuICBAYmluZGFibGUoKSB0ZXh0ID0gJyc7XHJcbiAgXHJcbiAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICB9XHJcbiAgIGF0dGFjaGVkKCkge1xyXG4gICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2RhdGEtdG9vbHRpcCcsIHRoaXMudGV4dCk7XHJcbiAgICAgJCh0aGlzLmVsZW1lbnQpLnRvb2x0aXAoeyBwb3NpdGlvbjogJ2JvdHRvbScsIGRlbGF5OiA1MCB9KTtcclxuICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
