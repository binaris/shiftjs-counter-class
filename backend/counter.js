import { get, update } from '@binaris/shift-db';

/**
 * Get the current value for the counter.
 *
 * @return { number } - counter value
 */
/* @expose */
export async function counterGet() {
  return get('counter');
}

/**
 * Increment the current counter value by one.
 *
 * @return { number } - counter value
 */
/* @expose */
export async function counterIncrement() {
  return update('counter', c => c + 1, 0);
}
