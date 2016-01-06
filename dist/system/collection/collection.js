System.register(['aurelia-framework', '../common/attributes'], function (_export) {
  'use strict';

  var bindable, customAttribute, inject, getBooleanFromAttribute, MaterialCollection, MaterialCollectionItem;

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      bindable = _aureliaFramework.bindable;
      customAttribute = _aureliaFramework.customAttribute;
      inject = _aureliaFramework.inject;
    }, function (_commonAttributes) {
      getBooleanFromAttribute = _commonAttributes.getBooleanFromAttribute;
    }],
    execute: function () {
      MaterialCollection = (function () {
        function MaterialCollection(element) {
          _classCallCheck(this, _MaterialCollection);

          this.element = element;
        }

        _createClass(MaterialCollection, [{
          key: 'attached',
          value: function attached() {
            var _this = this;

            var classes = ['collection'];
            classes.forEach(function (c) {
              return _this.element.classList.add(c);
            });
          }
        }]);

        var _MaterialCollection = MaterialCollection;
        MaterialCollection = inject(Element)(MaterialCollection) || MaterialCollection;
        MaterialCollection = customAttribute('material-collection')(MaterialCollection) || MaterialCollection;
        return MaterialCollection;
      })();

      _export('MaterialCollection', MaterialCollection);

      MaterialCollectionItem = (function () {
        function MaterialCollectionItem(element) {
          _classCallCheck(this, _MaterialCollectionItem);

          this.element = element;
        }

        _createClass(MaterialCollectionItem, [{
          key: 'attached',
          value: function attached() {
            var _this2 = this;

            var classes = ['collection-item'];
            if (getBooleanFromAttribute(this.active)) {
              classes.push('active');
            }
            classes.forEach(function (c) {
              return _this2.element.classList.add(c);
            });
          }
        }]);

        var _MaterialCollectionItem = MaterialCollectionItem;
        MaterialCollectionItem = inject(Element)(MaterialCollectionItem) || MaterialCollectionItem;
        MaterialCollectionItem = bindable({ name: 'active', defaultValue: false })(MaterialCollectionItem) || MaterialCollectionItem;
        MaterialCollectionItem = customAttribute('material-collection-item')(MaterialCollectionItem) || MaterialCollectionItem;
        return MaterialCollectionItem;
      })();

      _export('MaterialCollectionItem', MaterialCollectionItem);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGxlY3Rpb24vY29sbGVjdGlvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7a0VBS2Esa0JBQWtCLEVBY2xCLHNCQUFzQjs7Ozs7Ozs7bUNBbkIzQixRQUFROzBDQUFFLGVBQWU7aUNBQUUsTUFBTTs7a0RBQ2pDLHVCQUF1Qjs7O0FBSWxCLHdCQUFrQjtBQUNsQixpQkFEQSxrQkFBa0IsQ0FDakIsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLGtCQUFrQjs7aUJBS3JCLG9CQUFHOzs7QUFDVCxnQkFBSSxPQUFPLEdBQUcsQ0FBRSxZQUFZLENBQUUsQ0FBQztBQUMvQixtQkFBTyxDQUFDLE9BQU8sQ0FBQyxVQUFBLENBQUM7cUJBQUksTUFBSyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFBQSxDQUFDLENBQUM7V0FDckQ7OztrQ0FSVSxrQkFBa0I7QUFBbEIsMEJBQWtCLEdBRDlCLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FDSCxrQkFBa0IsS0FBbEIsa0JBQWtCO0FBQWxCLDBCQUFrQixHQUY5QixlQUFlLENBQUMscUJBQXFCLENBQUMsQ0FFMUIsa0JBQWtCLEtBQWxCLGtCQUFrQjtlQUFsQixrQkFBa0I7Ozs7O0FBY2xCLDRCQUFzQjtBQUN0QixpQkFEQSxzQkFBc0IsQ0FDckIsT0FBTyxFQUFFOzs7QUFDbkIsY0FBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7U0FDeEI7O3FCQUhVLHNCQUFzQjs7aUJBS3pCLG9CQUFHOzs7QUFDVCxnQkFBSSxPQUFPLEdBQUcsQ0FBRSxpQkFBaUIsQ0FBRSxDQUFDO0FBQ3BDLGdCQUFJLHVCQUF1QixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUN4QyxxQkFBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN4QjtBQUNELG1CQUFPLENBQUMsT0FBTyxDQUFDLFVBQUEsQ0FBQztxQkFBSSxPQUFLLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUFBLENBQUMsQ0FBQztXQUNyRDs7O3NDQVhVLHNCQUFzQjtBQUF0Qiw4QkFBc0IsR0FEbEMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILHNCQUFzQixLQUF0QixzQkFBc0I7QUFBdEIsOEJBQXNCLEdBRmxDLFFBQVEsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxDQUFDLENBRXJDLHNCQUFzQixLQUF0QixzQkFBc0I7QUFBdEIsOEJBQXNCLEdBSGxDLGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxDQUcvQixzQkFBc0IsS0FBdEIsc0JBQXNCO2VBQXRCLHNCQUFzQiIsImZpbGUiOiJjb2xsZWN0aW9uL2NvbGxlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2JpbmRhYmxlLCBjdXN0b21BdHRyaWJ1dGUsIGluamVjdH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQge2dldEJvb2xlYW5Gcm9tQXR0cmlidXRlfSBmcm9tICcuLi9jb21tb24vYXR0cmlidXRlcyc7XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdtYXRlcmlhbC1jb2xsZWN0aW9uJylcclxuQGluamVjdChFbGVtZW50KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxDb2xsZWN0aW9uIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFsgJ2NvbGxlY3Rpb24nIF07XHJcbiAgICBjbGFzc2VzLmZvckVhY2goYyA9PiB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZChjKSk7XHJcbiAgfVxyXG59XHJcblxyXG5AY3VzdG9tQXR0cmlidXRlKCdtYXRlcmlhbC1jb2xsZWN0aW9uLWl0ZW0nKVxyXG5AYmluZGFibGUoeyBuYW1lOiAnYWN0aXZlJywgZGVmYXVsdFZhbHVlOiBmYWxzZSB9KVxyXG5AaW5qZWN0KEVsZW1lbnQpXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbENvbGxlY3Rpb25JdGVtIHtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gIH1cclxuXHJcbiAgYXR0YWNoZWQoKSB7XHJcbiAgICBsZXQgY2xhc3NlcyA9IFsgJ2NvbGxlY3Rpb24taXRlbScgXTtcclxuICAgIGlmIChnZXRCb29sZWFuRnJvbUF0dHJpYnV0ZSh0aGlzLmFjdGl2ZSkpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKCdhY3RpdmUnKTtcclxuICAgIH1cclxuICAgIGNsYXNzZXMuZm9yRWFjaChjID0+IHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKGMpKTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
