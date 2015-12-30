import 'jquery';
import 'materialize/sass/materialize.css!';
import 'materialize/js/bin/materialize.min';
// TODO: Do we import the common styles here or let the user do it in their app?

export function configure(aurelia){

	var resources = [
	  'collapsible/collapsible',
    'button/button'
	];
	
	aurelia.globalResources(resources);
}