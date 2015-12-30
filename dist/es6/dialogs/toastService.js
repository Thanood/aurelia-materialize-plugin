// FIXME: all of this fails.. toasts seem to need the whole package (Materialize globla, hammerjs, velocity)
import * as Materialize from 'materialize/js/global';
import * as toast from 'materialize/js/toasts';
import * as hammer from 'materialize/js/jquery.hammer';
import * as Vel from 'velocity';

export class ToastService {
  show(message, duration) {
    // duration = duration || 2000;
    // toast(message, duration);
    console.warn('toasts not working');
  }
}
