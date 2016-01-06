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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi9idXR0b24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OytFQVFhLGNBQWM7Ozs7Ozs7OzBDQVJuQixlQUFlO21DQUFFLFFBQVE7c0NBQUUsV0FBVztpQ0FBRSxNQUFNOztrREFDOUMsdUJBQXVCOzs7QUFPbEIsb0JBQWM7QUFDZCxpQkFEQSxjQUFjLENBQ2IsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLGNBQWM7O2lCQUtqQixvQkFBRzs7O0FBQ1QsZ0JBQUksT0FBTyxHQUFHLEVBQUcsQ0FBQztBQUNsQixnQkFBSSx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7QUFDdkMscUJBQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0IsTUFBTTtBQUNMLHFCQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3JCO0FBQ0QsZ0JBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDekMscUJBQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDMUI7O0FBRUQsbUJBQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxDQUFDO3FCQUFJLENBQUMsQ0FBQyxNQUFLLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7V0FDbkQ7Ozs4QkFqQlUsY0FBYztBQUFkLHNCQUFjLEdBRjFCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FFSCxjQUFjLEtBQWQsY0FBYztBQUFkLHNCQUFjLEdBSDFCLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxDQUFDLENBR3BDLGNBQWMsS0FBZCxjQUFjO0FBQWQsc0JBQWMsR0FKMUIsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FJcEMsY0FBYyxLQUFkLGNBQWM7QUFBZCxzQkFBYyxHQUwxQixlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FLdEIsY0FBYyxLQUFkLGNBQWM7ZUFBZCxjQUFjIiwiZmlsZSI6ImJ1dHRvbi9idXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2N1c3RvbUF0dHJpYnV0ZSwgYmluZGFibGUsIGJpbmRpbmdNb2RlLCBpbmplY3R9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZX0gZnJvbSAnLi4vY29tbW9uL2F0dHJpYnV0ZXMnO1xyXG5cclxuQGN1c3RvbUF0dHJpYnV0ZSgnbWF0ZXJpYWwtYnV0dG9uJylcclxuQGJpbmRhYmxlKHsgbmFtZTogJ2xhcmdlJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG5AYmluZGFibGUoeyBuYW1lOiAncmFpc2VkJywgZGVmYXVsdFZhbHVlOiB0cnVlIH0pXHJcbkBpbmplY3QoRWxlbWVudClcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbEJ1dHRvbiB7XHJcbiAgY29uc3RydWN0b3IoZWxlbWVudCkge1xyXG4gICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcclxuICB9XHJcblxyXG4gIGF0dGFjaGVkKCkge1xyXG4gICAgbGV0IGNsYXNzZXMgPSBbIF07XHJcbiAgICBpZiAoZ2V0Qm9vbGVhbkZyb21BdHRyaWJ1dGUodGhpcy5sYXJnZSkpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdidG4tbGFyZ2UnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNsYXNzZXMucHVzaCgnYnRuJyk7XHJcbiAgICB9XHJcbiAgICBpZiAoIWdldEJvb2xlYW5Gcm9tQXR0cmlidXRlKHRoaXMucmFpc2VkKSkge1xyXG4gICAgICBjbGFzc2VzLnB1c2goJ2J0bi1mbGF0Jyk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+ICQodGhpcy5lbGVtZW50KS5hZGRDbGFzcyhjKSk7XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
