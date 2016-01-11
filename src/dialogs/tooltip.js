import {bindable, customAttribute, inject} from 'aurelia-framework';
import 'materialize/js/tooltip';

@customAttribute('material-tooltip')
@inject(Element)
export class Tooltip {
  @bindable() text = '';
  
   constructor(element) {
     this.element = element;
   }
   attached() {
     this.element.setAttribute('data-tooltip', this.text);
     $(this.element).tooltip({ position: 'bottom', delay: 50 });
   }
}
