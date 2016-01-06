import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';
import {getBooleanFromAttribute} from '../common/attributes';

@customAttribute('material-button')
@bindable({ name: 'large', defaultValue: false })
@bindable({ name: 'raised', defaultValue: true })
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
    
    classes.forEach(c => $(this.element).addClass(c));
  }
}