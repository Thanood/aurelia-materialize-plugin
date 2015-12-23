System.register(['aurelia-framework', '../common/attributes', 'materialize/js/waves'], function (_export) {
  'use strict';

  var customAttribute, bindable, bindingMode, inject, getBooleanFromAttribute, ripple, MaterialButton;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inject = _aureliaFramework.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttribute = _commonAttributes.getBooleanFromAttribute;
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
            if (getBooleanFromAttribute(this.large)) {
              classes.push('btn-large');
            } else {
              classes.push('btn');
            }
            if (!getBooleanFromAttribute(this.raised)) {
              classes.push('btn-flat');
            }

            if (getBooleanFromAttribute(this.ripple)) {
              classes.push('waves-effect');
              classes.push('waves-light');
            }

            classes.forEach(function (c) {
              return $(_this.element).addClass(c);
            });

            if (getBooleanFromAttribute(this.ripple)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O3VGQVVhLGNBQWM7Ozs7Ozs7OzBDQVZuQixlQUFlO21DQUFFLFFBQVE7c0NBQUUsV0FBVztpQ0FBRSxNQUFNOztrREFDOUMsdUJBQXVCOzs7OztBQVNsQixvQkFBYztBQUNkLGlCQURBLGNBQWMsQ0FDYixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSFUsY0FBYzs7aUJBS2pCLG9CQUFHOzs7QUFDVCxnQkFBSSxPQUFPLEdBQUcsRUFBRyxDQUFDO0FBQ2xCLGdCQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtBQUN2QyxxQkFBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMzQixNQUFNO0FBQ0wscUJBQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7QUFDRCxnQkFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN6QyxxQkFBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxQjs7QUFFRCxnQkFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDeEMscUJBQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDN0IscUJBQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDN0I7O0FBRUQsbUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7O0FBRWxELGdCQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QyxvQkFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0I7V0FDRjs7OzhCQTFCVSxjQUFjO0FBQWQsc0JBQWMsR0FGMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUVILGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FIMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FHcEMsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQUoxQixRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUlwQyxjQUFjLEtBQWQsY0FBYztBQUFkLHNCQUFjLEdBTDFCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBS3BDLGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FOMUIsZUFBZSxDQUFDLGlCQUFpQixDQUFDLENBTXRCLGNBQWMsS0FBZCxjQUFjO2VBQWQsY0FBYyIsImZpbGUiOiJidXR0b24vYnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcbmltcG9ydCB7Z2V0Qm9vbGVhbkZyb21BdHRyaWJ1dGV9IGZyb20gJy4uL2NvbW1vbi9hdHRyaWJ1dGVzJ1xyXG5pbXBvcnQgKiBhcyByaXBwbGUgZnJvbSAnbWF0ZXJpYWxpemUvanMvd2F2ZXMnO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnbWF0ZXJpYWwtYnV0dG9uJylcclxuQGJpbmRhYmxlKHsgbmFtZTogJ2xhcmdlJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG5AYmluZGFibGUoeyBuYW1lOiAncmFpc2VkJywgZGVmYXVsdFZhbHVlOiB0cnVlIH0pXHJcbkBiaW5kYWJsZSh7IG5hbWU6ICdyaXBwbGUnLCBkZWZhdWx0VmFsdWU6IHRydWUgfSlcclxuQGluamVjdChFbGVtZW50KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQnV0dG9uIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFsgXTtcclxuICAgIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLmxhcmdlKSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2J0bi1sYXJnZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdidG4nKTtcclxuICAgIH1cclxuICAgIGlmICghZ2V0Qm9vbGVhbkZyb21BdHRyaWJ1dGUodGhpcy5yYWlzZWQpKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnYnRuLWZsYXQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKGdldEJvb2xlYW5Gcm9tQXR0cmlidXRlKHRoaXMucmlwcGxlKSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ3dhdmVzLWVmZmVjdCcpO1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ3dhdmVzLWxpZ2h0Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+ICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjKSk7XHJcbiAgICBcclxuICAgIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLnJpcHBsZSkpIHtcclxuICAgICAgcmlwcGxlLmF0dGFjaCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
