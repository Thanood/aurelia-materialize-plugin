import {bindable, customAttribute, inject} from 'aurelia-framework';
import {getBooleanFromAttribute} from '../common/attributes';

@customAttribute('material-collection')
@inject(Element)
export class MaterialCollection {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let classes = [ 'collection' ];
    classes.forEach(c => this.element.classList.add(c));
  }
}

@customAttribute('material-collection-item')
@bindable({ name: 'active', defaultValue: false })
@inject(Element)
export class MaterialCollectionItem {
  constructor(element) {
    this.element = element;
  }

  attached() {
    let classes = [ 'collection-item' ];
    if (getBooleanFromAttribute(this.active)) {
      classes.push('active');
    }
    classes.forEach(c => this.element.classList.add(c));
  }
}
