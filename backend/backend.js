import { get, update } from '@binaris/shift-db';

/* @expose */
export async function backendGet() {
  return get('counter');
}

/* @expose */
export async function backendIncrement() {
  return update('counter', c => c + 1, 0);
}
