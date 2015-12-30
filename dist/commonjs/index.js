'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.configure = configure;

require('jquery');

require('materialize/sass/materialize.css!');

require('materialize/js/bin/materialize.min');

function configure(aurelia) {

	var resources = ['collapsible/collapsible', 'button/button'];

	aurelia.globalResources(resources);
}