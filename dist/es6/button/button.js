import {customAttribute, bindable, bindingMode, inject} from 'aurelia-framework';

@customAttribute('material-button')
@bindable({ name: 'raised', defaultValue: true })
@inject(Element)

export class MaterialButton {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let classes = [
      'btn',
      'waves-effect',
      'waves-effect-light'
    ];
    if (!this.raised) {
      classes.push('btn-flat');
    }
    
    classes.forEach(c => $(this.element).addClass(c));
  }
}