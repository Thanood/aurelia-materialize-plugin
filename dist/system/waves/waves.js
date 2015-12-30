System.register(['aurelia-framework', '../common/attributes', 'materialize/js/waves'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, getBooleanFromAttribute, ripple, Waves;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttribute = _commonAttributes.getBooleanFromAttribute;
    }, function (_materializeJsWaves) {
      ripple = _materializeJsWaves;
    }],
    execute: function () {
      Waves = (function () {
        function Waves(element) {
          _classCallCheck(this, _Waves);

          this.element = element;
        }

        _createClass(Waves, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            var classes = ['waves-effect'];
            if (getBooleanFromAttribute(this.light)) {
              classes.push('waves-light');
            }
            classes.forEach(function (c) {
              return _this.element.classList.add(c);
            });
            ripple.attach(this.element);
          }
        }]);

        var _Waves = Waves;
        Waves = inject(Element)(Waves) || Waves;
        Waves = bindable({ name: 'light', defaultValue: false })(Waves) || Waves;
        Waves = customAttribute('waves')(Waves) || Waves;
        return Waves;
      })();

      _export('Waves', Waves);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhdmVzL3dhdmVzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OzswRUFPYSxLQUFLOzs7Ozs7OzttQ0FQVCxRQUFROzBDQUFFLGVBQWU7aUNBQUUsTUFBTTs7a0RBQ2pDLHVCQUF1Qjs7Ozs7QUFNbkIsV0FBSztBQUNMLGlCQURBLEtBQUssQ0FDSixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSFUsS0FBSzs7aUJBS1Isb0JBQUc7OztBQUNULGdCQUFJLE9BQU8sR0FBRyxDQUFFLGNBQWMsQ0FBRSxDQUFDO0FBQ2pDLGdCQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN2QyxxQkFBTyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM3QjtBQUNELG1CQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztxQkFBSSxNQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztBQUNwRCxrQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7V0FDN0I7OztxQkFaVSxLQUFLO0FBQUwsYUFBSyxHQURqQixNQUFNLENBQUMsT0FBTyxDQUFDLENBQ0gsS0FBSyxLQUFMLEtBQUs7QUFBTCxhQUFLLEdBRmpCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBRXBDLEtBQUssS0FBTCxLQUFLO0FBQUwsYUFBSyxHQUhqQixlQUFlLENBQUMsT0FBTyxDQUFDLENBR1osS0FBSyxLQUFMLEtBQUs7ZUFBTCxLQUFLIiwiZmlsZSI6IndhdmVzL3dhdmVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYmluZGFibGUsIGN1c3RvbUF0dHJpYnV0ZSwgaW5qZWN0IH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSB9IGZyb20gJy4uL2NvbW1vbi9hdHRyaWJ1dGVzJztcclxuaW1wb3J0ICogYXMgcmlwcGxlIGZyb20gJ21hdGVyaWFsaXplL2pzL3dhdmVzJztcclxuXHJcbkBjdXN0b21BdHRyaWJ1dGUoJ3dhdmVzJylcclxuQGJpbmRhYmxlKHsgbmFtZTogJ2xpZ2h0JywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBXYXZlcyB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcbiAgXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFsgJ3dhdmVzLWVmZmVjdCcgXTtcclxuICAgIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLmxpZ2h0KSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ3dhdmVzLWxpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XHJcbiAgICByaXBwbGUuYXR0YWNoKHRoaXMuZWxlbWVudCk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
