import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import {getBooleanFromAttribute} from '../common/attributes';
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
    if (getBooleanFromAttribute(this.large)) {
      classes.push('btn-large');
    } else {
      classes.push('btn');
    }
    if (!getBooleanFromAttribute(this.raised)) {
      classes.push('btn-flat');
    }
    
    if (getBooleanFromAttribute(this.ripple)) {
      classes.push('waves-effect');
      classes.push('waves-light');
    }
    
    classes.forEach(c => $(this.element).addClass(c));
    
    if (getBooleanFromAttribute(this.ripple)) {
      ripple.attach(this.element);
    }
  }
}