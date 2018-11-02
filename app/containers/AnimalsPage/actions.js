/*
 * Animals Actions
 */

import { DUMMY, ACTIONS_LIST } from './constants';

/**
 * Select clicked animal from the list
 *
 * @param {*} event
 *
 * @return {object} An animal object selected by title
 */
export function getSingleAnimal(name) {
  const animal = DUMMY.list.find((obj) => obj.title === name);
  return {
    type: ACTIONS_LIST.ANIMALS_GET_SINGLE,
    current: animal
  };
}

/**
 * Get list of animals from the Dummy object
 *
 * @return {list} Animals list
 */
export function tryGetList() {
  return {
    type: ACTIONS_LIST.ANIMALS_GET_LIST,
    list: DUMMY.list
  };
}
