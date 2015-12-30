'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getBooleanFromAttribute = getBooleanFromAttribute;

function getBooleanFromAttribute(attributeValue) {
  return attributeValue === true || attributeValue === 'true';
}