import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import * as ripple from 'materialize/js/waves';

@customAttribute('material-button')
@bindable({ name: 'large', defaultValue: false })
@bindable({ name: 'raised', defaultValue: true })
@bindable({ name: 'ripple', defaultValue: true })
@inject(Element)

export class MaterialButton {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let classes = [ ];
    if (this.large === true || this.large === 'true') {
      classes.push('btn-large');
    } else {
      classes.push('btn');
    }
    if (this.raised === false || this.raised === 'false') {
      classes.push('btn-flat');
    }
    
    if (this.ripple === true || this.ripple === 'true') {
      classes.push('waves-effect');
      classes.push('waves-light');
    }
    
    classes.forEach(c => $(this.element).addClass(c));
    
    if (this.ripple === true || this.ripple === 'true') {
      ripple.attach(this.element);
    }
  }
}