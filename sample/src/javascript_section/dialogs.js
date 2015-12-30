import {inject} from 'aurelia-framework';
import {ToastService} from 'aurelia-materialize-plugin/dialogs/toastService';

@inject(ToastService)
export class Dialogs {
  constructor(toastService) {
    this.toastService = toastService;
  }
	showToast() {
    this.toastService.show('I am a toast!');
  }
}