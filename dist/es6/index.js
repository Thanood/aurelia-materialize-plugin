import 'jquery';
import 'materialize/sass/materialize.css!';
// FIXME: fails with "TypeError: Multiple defines for anonymous module"
// import 'materialize/js/bin/materialize.min';
// TODO: Do we import the common styles here or let the user do it in their app?

export function configure(aurelia){

	var resources = [
	  'collapsible/collapsible',
    'button/button',
    'collection/collection',
    'dialogs/tooltip',
    'waves/waves'
	];
	
	aurelia.globalResources(resources);
}