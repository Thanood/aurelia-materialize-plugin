import { bindable, customAttribute, inject } from 'aurelia-framework';
import { getBooleanFromAttribute } from '../common/attributes';
import * as ripple from 'materialize/js/waves';

@customAttribute('waves')
@bindable({ name: 'light', defaultValue: true })
@inject(Element)
export class Waves {
  constructor(element) {
    this.element = element;
  }
  
  attached() {
    let classes = [ 'waves-effect' ];
    if (getBooleanFromAttribute(this.light)) {
      classes.push('waves-light');
    }
    ripple.attach(this.element);
  }
}