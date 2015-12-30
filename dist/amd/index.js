define(['exports', 'jquery', 'materialize/sass/materialize.css!', 'materialize/js/bin/materialize.min'], function (exports, _jquery, _materializeSassMaterializeCss, _materializeJsBinMaterializeMin) {
	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports.configure = configure;

	function configure(aurelia) {

		var resources = ['collapsible/collapsible', 'button/button'];

		aurelia.globalResources(resources);
	}
});