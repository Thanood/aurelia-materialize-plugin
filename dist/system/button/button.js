System.register(['aurelia-framework', '../common/attributes'], function (_export) {
  'use strict';

  var customAttribute, bindable, bindingMode, inject, getBooleanFromAttribute, MaterialButton;

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

            classes.forEach(function (c) {
              return $(_this.element).addClass(c);
            });
          }
        }]);

        var _MaterialButton = MaterialButton;
        MaterialButton = inject(Element)(MaterialButton) || MaterialButton;
        MaterialButton = bindable({ name: 'raised', defaultValue: true })(MaterialButton) || MaterialButton;
        MaterialButton = bindable({ name: 'large', defaultValue: false })(MaterialButton) || MaterialButton;
        MaterialButton = customAttribute('material-button')(MaterialButton) || MaterialButton;
        return MaterialButton;
      })();

      _export('MaterialButton', MaterialButton);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytFQVVhLGNBQWM7Ozs7Ozs7OzBDQVZuQixlQUFlO21DQUFFLFFBQVE7c0NBQUUsV0FBVztpQ0FBRSxNQUFNOztrREFDOUMsdUJBQXVCOzs7QUFTbEIsb0JBQWM7QUFDZCxpQkFEQSxjQUFjLENBQ2IsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLGNBQWM7O2lCQUtqQixvQkFBRzs7O0FBQ1QsZ0JBQUksT0FBTyxHQUFHLEVBQUcsQ0FBQztBQUNsQixnQkFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkMscUJBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0IsTUFBTTtBQUNMLHFCQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO0FBQ0QsZ0JBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDekMscUJBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUI7O0FBT0QsbUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7V0FLbkQ7Ozs4QkExQlUsY0FBYztBQUFkLHNCQUFjLEdBRjFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FFSCxjQUFjLEtBQWQsY0FBYztBQUFkLHNCQUFjLEdBSjFCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBSXBDLGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FMMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FLcEMsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQU4xQixlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FNdEIsY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjIiwiZmlsZSI6ImJ1dHRvbi9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZX0gZnJvbSAnLi4vY29tbW9uL2F0dHJpYnV0ZXMnO1xyXG4vLyBpbXBvcnQgKiBhcyByaXBwbGUgZnJvbSAnbWF0ZXJpYWxpemUvanMvd2F2ZXMnO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnbWF0ZXJpYWwtYnV0dG9uJylcclxuQGJpbmRhYmxlKHsgbmFtZTogJ2xhcmdlJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG5AYmluZGFibGUoeyBuYW1lOiAncmFpc2VkJywgZGVmYXVsdFZhbHVlOiB0cnVlIH0pXHJcbi8vIEBiaW5kYWJsZSh7IG5hbWU6ICdyaXBwbGUnLCBkZWZhdWx0VmFsdWU6IHRydWUgfSlcclxuQGluamVjdChFbGVtZW50KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsQnV0dG9uIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFsgXTtcclxuICAgIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLmxhcmdlKSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2J0bi1sYXJnZScpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdidG4nKTtcclxuICAgIH1cclxuICAgIGlmICghZ2V0Qm9vbGVhbkZyb21BdHRyaWJ1dGUodGhpcy5yYWlzZWQpKSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnYnRuLWZsYXQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gaWYgKGdldEJvb2xlYW5Gcm9tQXR0cmlidXRlKHRoaXMucmlwcGxlKSkge1xyXG4gICAgLy8gICBjbGFzc2VzLnB1c2goJ3dhdmVzLWVmZmVjdCcpO1xyXG4gICAgLy8gICBjbGFzc2VzLnB1c2goJ3dhdmVzLWxpZ2h0Jyk7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+ICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjKSk7XHJcbiAgICBcclxuICAgIC8vIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLnJpcHBsZSkpIHtcclxuICAgIC8vICAgcmlwcGxlLmF0dGFjaCh0aGlzLmVsZW1lbnQpO1xyXG4gICAgLy8gfVxyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
