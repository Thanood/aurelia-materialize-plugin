System.register(['jquery', 'materialize/sass/materialize.css!'], function (_export) {
			'use strict';

			_export('configure', configure);

			function configure(aurelia) {

						var resources = ['collapsible/collapsible', 'button/button', 'collection/collection', 'dialogs/tooltip', 'waves/waves'];

						aurelia.globalResources(resources);
			}

			return {
						setters: [function (_jquery) {}, function (_materializeSassMaterializeCss) {}],
						execute: function () {}
			};
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBTU8sWUFBUyxTQUFTLENBQUMsT0FBTyxFQUFDOztBQUVqQyxVQUFJLFNBQVMsR0FBRyxDQUNkLHlCQUF5QixFQUN4QixlQUFlLEVBQ2YsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixhQUFhLENBQ2YsQ0FBQzs7QUFFRixhQUFPLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ25DIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqcXVlcnknO1xyXG5pbXBvcnQgJ21hdGVyaWFsaXplL3Nhc3MvbWF0ZXJpYWxpemUuY3NzISc7XHJcbi8vIEZJWE1FOiBmYWlscyB3aXRoIFwiVHlwZUVycm9yOiBNdWx0aXBsZSBkZWZpbmVzIGZvciBhbm9ueW1vdXMgbW9kdWxlXCJcclxuLy8gaW1wb3J0ICdtYXRlcmlhbGl6ZS9qcy9iaW4vbWF0ZXJpYWxpemUubWluJztcclxuLy8gVE9ETzogRG8gd2UgaW1wb3J0IHRoZSBjb21tb24gc3R5bGVzIGhlcmUgb3IgbGV0IHRoZSB1c2VyIGRvIGl0IGluIHRoZWlyIGFwcD9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoYXVyZWxpYSl7XHJcblxyXG5cdHZhciByZXNvdXJjZXMgPSBbXHJcblx0ICAnY29sbGFwc2libGUvY29sbGFwc2libGUnLFxyXG4gICAgJ2J1dHRvbi9idXR0b24nLFxyXG4gICAgJ2NvbGxlY3Rpb24vY29sbGVjdGlvbicsXHJcbiAgICAnZGlhbG9ncy90b29sdGlwJyxcclxuICAgICd3YXZlcy93YXZlcydcclxuXHRdO1xyXG5cdFxyXG5cdGF1cmVsaWEuZ2xvYmFsUmVzb3VyY2VzKHJlc291cmNlcyk7XHJcbn0iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
