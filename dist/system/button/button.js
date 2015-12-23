System.register(['aurelia-framework', 'materialize/js/waves'], function (_export) {
  'use strict';

  var customAttribute, bindable, bindingMode, inject, ripple, MaterialButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inject = _aureliaFramework.inject;
    }, function (_materializeJsWaves) {
      ripple = _materializeJsWaves;
    }],
    execute: function () {
      MaterialButton = (function () {
        function MaterialButton(element) {
          _classCallCheck(this, _MaterialButton);

          this.element = element;
        }

        _createClass(MaterialButton, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            var classes = [];
            if (this.large === true || this.large === 'true') {
              classes.push('btn-large');
            } else {
              classes.push('btn');
            }
            if (this.raised === false || this.raised === 'false') {
              classes.push('btn-flat');
            }

            if (this.ripple === true || this.ripple === 'true') {
              classes.push('waves-effect');
              classes.push('waves-light');
            }

            classes.forEach(function (c) {
              return $(_this.element).addClass(c);
            });

            if (this.ripple === true || this.ripple === 'true') {
              ripple.attach(this.element);
            }
          }
        }]);

        var _MaterialButton = MaterialButton;
        MaterialButton = inject(Element)(MaterialButton) || MaterialButton;
        MaterialButton = bindable({ name: 'ripple', defaultValue: true })(MaterialButton) || MaterialButton;
        MaterialButton = bindable({ name: 'raised', defaultValue: true })(MaterialButton) || MaterialButton;
        MaterialButton = bindable({ name: 'large', defaultValue: false })(MaterialButton) || MaterialButton;
        MaterialButton = customAttribute('material-button')(MaterialButton) || MaterialButton;
        return MaterialButton;
      })();

      _export('MaterialButton', MaterialButton);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OzhEQVNhLGNBQWM7Ozs7Ozs7OzBDQVRuQixlQUFlO21DQUFFLFFBQVE7c0NBQUUsV0FBVztpQ0FBRSxNQUFNOzs7OztBQVN6QyxvQkFBYztBQUNkLGlCQURBLGNBQWMsQ0FDYixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSFUsY0FBYzs7aUJBS2pCLG9CQUFHOzs7QUFDVCxnQkFBSSxPQUFPLEdBQUcsRUFBRyxDQUFDO0FBQ2xCLGdCQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO0FBQ2hELHFCQUFPLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzNCLE1BQU07QUFDTCxxQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtBQUNELGdCQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssT0FBTyxFQUFFO0FBQ3BELHFCQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFCOztBQUVELGdCQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFO0FBQ2xELHFCQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQzdCLHFCQUFPLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzdCOztBQUVELG1CQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztxQkFBSSxDQUFDLENBQUMsTUFBSyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQUEsQ0FBQyxDQUFDOztBQUVsRCxnQkFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLE1BQU0sRUFBRTtBQUNsRCxvQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7V0FDRjs7OzhCQTFCVSxjQUFjO0FBQWQsc0JBQWMsR0FGMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUVILGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FIMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FHcEMsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQUoxQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUlwQyxjQUFjLEtBQWQsY0FBYztBQUFkLHNCQUFjLEdBTDFCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBS3BDLGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FOMUIsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBTXRCLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYyIsImZpbGUiOiJidXR0b24vYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCAqIGFzIHJpcHBsZSBmcm9tICdtYXRlcmlhbGl6ZS9qcy93YXZlcyc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdtYXRlcmlhbC1idXR0b24nKVxyXG5AYmluZGFibGUoeyBuYW1lOiAnbGFyZ2UnLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbkBiaW5kYWJsZSh7IG5hbWU6ICdyYWlzZWQnLCBkZWZhdWx0VmFsdWU6IHRydWUgfSlcclxuQGJpbmRhYmxlKHsgbmFtZTogJ3JpcHBsZScsIGRlZmF1bHRWYWx1ZTogdHJ1ZSB9KVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxCdXR0b24ge1xyXG4gIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgfVxyXG5cclxuICBhdHRhY2hlZCgpIHtcclxuICAgIGxldCBjbGFzc2VzID0gWyBdO1xyXG4gICAgaWYgKHRoaXMubGFyZ2UgPT09IHRydWUgfHwgdGhpcy5sYXJnZSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnYnRuLWxhcmdlJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2J0bicpO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMucmFpc2VkID09PSBmYWxzZSB8fCB0aGlzLnJhaXNlZCA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2J0bi1mbGF0Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnJpcHBsZSA9PT0gdHJ1ZSB8fCB0aGlzLnJpcHBsZSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnd2F2ZXMtZWZmZWN0Jyk7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnd2F2ZXMtbGlnaHQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY2xhc3Nlcy5mb3JFYWNoKGMgPT4gJCh0aGlzLmVsZW1lbnQpLmFkZENsYXNzKGMpKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMucmlwcGxlID09PSB0cnVlIHx8IHRoaXMucmlwcGxlID09PSAndHJ1ZScpIHtcclxuICAgICAgcmlwcGxlLmF0dGFjaCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
