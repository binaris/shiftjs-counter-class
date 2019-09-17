import { get, update } from '@reshuffle/db';

/**
 * Get the current value for the counter.
 *
 * @return { Promise<number> } - counter value
 */
/* @expose */
export async function counterGet() {
  return get('counter');
}

/**
 * Increment the current counter value by one.
 *
 * @return { Promise<number> } - counter value
 */
/* @expose */
export async function counterIncrement() {
  return update('counter', (c = 0) => c + 1);
}
