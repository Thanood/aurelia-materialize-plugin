define(['exports', 'jquery', 'materialize/sass/materialize.css!'], function (exports, _jquery, _materializeSassMaterializeCss) {
			'use strict';

			Object.defineProperty(exports, '__esModule', {
						value: true
			});
			exports.configure = configure;

			function configure(aurelia) {

						var resources = ['collapsible/collapsible', 'button/button', 'collection/collection', 'dialogs/tooltip', 'waves/waves'];

						aurelia.globalResources(resources);
			}
});