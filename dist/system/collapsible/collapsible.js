System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var customAttribute, bindable, bindingMode, inject, MaterialCollapsible;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      customAttribute = _aureliaFramework.customAttribute;
      bindable = _aureliaFramework.bindable;
      bindingMode = _aureliaFramework.bindingMode;
      inject = _aureliaFramework.inject;
    }],
    execute: function () {
      MaterialCollapsible = (function () {
        function MaterialCollapsible(element) {
          _classCallCheck(this, _MaterialCollapsible);

          this.element = element;
        }

        _createClass(MaterialCollapsible, [{
          key: 'attached',
          value: function attached() {
            $(this.element).collapsible({
              accordion: this.accordion
            });
          }
        }]);

        var _MaterialCollapsible = MaterialCollapsible;
        MaterialCollapsible = inject(Element)(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = bindable({ name: 'accordion', defaultValue: false })(MaterialCollapsible) || MaterialCollapsible;
        MaterialCollapsible = customAttribute('material-collapsible')(MaterialCollapsible) || MaterialCollapsible;
        return MaterialCollapsible;
      })();

      _export('MaterialCollapsible', MaterialCollapsible);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxhcHNpYmxlL2NvbGxhcHNpYmxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztzREFNYSxtQkFBbUI7Ozs7Ozs7OzBDQU54QixlQUFlO21DQUFFLFFBQVE7c0NBQUUsV0FBVztpQ0FBRSxNQUFNOzs7QUFNekMseUJBQW1CO0FBQ25CLGlCQURBLG1CQUFtQixDQUNsQixPQUFPLEVBQUU7OztBQUNuQixjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztTQUN4Qjs7cUJBSFUsbUJBQW1COztpQkFLdEIsb0JBQUc7QUFDVCxhQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsQ0FBQztBQUMxQix1QkFBUyxFQUFHLElBQUksQ0FBQyxTQUFTO2FBQzNCLENBQUMsQ0FBQztXQUNKOzs7bUNBVFUsbUJBQW1CO0FBQW5CLDJCQUFtQixHQUYvQixNQUFNLENBQUMsT0FBTyxDQUFDLENBRUgsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQiwyQkFBbUIsR0FIL0IsUUFBUSxDQUFDLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FHeEMsbUJBQW1CLEtBQW5CLG1CQUFtQjtBQUFuQiwyQkFBbUIsR0FKL0IsZUFBZSxDQUFDLHNCQUFzQixDQUFDLENBSTNCLG1CQUFtQixLQUFuQixtQkFBbUI7ZUFBbkIsbUJBQW1CIiwiZmlsZSI6ImNvbGxhcHNpYmxlL2NvbGxhcHNpYmxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtjdXN0b21BdHRyaWJ1dGUsIGJpbmRhYmxlLCBiaW5kaW5nTW9kZSwgaW5qZWN0fSBmcm9tICdhdXJlbGlhLWZyYW1ld29yayc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdtYXRlcmlhbC1jb2xsYXBzaWJsZScpXHJcbkBiaW5kYWJsZSh7IG5hbWU6ICdhY2NvcmRpb24nLCBkZWZhdWx0VmFsdWU6IGZhbHNlIH0pXHJcbkBpbmplY3QoRWxlbWVudClcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbGxhcHNpYmxlIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICAkKHRoaXMuZWxlbWVudCkuY29sbGFwc2libGUoe1xyXG4gICAgICBhY2NvcmRpb24gOiB0aGlzLmFjY29yZGlvbiBcclxuICAgIH0pO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
