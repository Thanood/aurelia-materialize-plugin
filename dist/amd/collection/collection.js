define(['exports', 'aurelia-framework', '../common/attributes'], function (exports, _aureliaFramework, _commonAttributes) {
  'use strict';

  Object.defineProperty(exports, '__esModule', {
    value: true
  });

  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  var MaterialCollection = (function () {
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
    MaterialCollection = (0, _aureliaFramework.inject)(Element)(MaterialCollection) || MaterialCollection;
    MaterialCollection = (0, _aureliaFramework.customAttribute)('material-collection')(MaterialCollection) || MaterialCollection;
    return MaterialCollection;
  })();

  exports.MaterialCollection = MaterialCollection;

  var MaterialCollectionItem = (function () {
    function MaterialCollectionItem(element) {
      _classCallCheck(this, _MaterialCollectionItem);

      this.element = element;
    }

    _createClass(MaterialCollectionItem, [{
      key: 'attached',
      value: function attached() {
        var _this2 = this;

        var classes = ['collection-item'];
        if ((0, _commonAttributes.getBooleanFromAttribute)(this.active)) {
          classes.push('active');
        }
        classes.forEach(function (c) {
          return _this2.element.classList.add(c);
        });
      }
    }]);

    var _MaterialCollectionItem = MaterialCollectionItem;
    MaterialCollectionItem = (0, _aureliaFramework.inject)(Element)(MaterialCollectionItem) || MaterialCollectionItem;
    MaterialCollectionItem = (0, _aureliaFramework.bindable)({ name: 'active', defaultValue: false })(MaterialCollectionItem) || MaterialCollectionItem;
    MaterialCollectionItem = (0, _aureliaFramework.customAttribute)('material-collection-item')(MaterialCollectionItem) || MaterialCollectionItem;
    return MaterialCollectionItem;
  })();

  exports.MaterialCollectionItem = MaterialCollectionItem;
});