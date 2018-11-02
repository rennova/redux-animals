/*
 * AnimalsReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';
import { ACTIONS_LIST } from './constants';


const initState = fromJS({
  list : [],
  current : {}
});

export default function animalsReducer(state = initState, action) {
  switch(action.type) {
    case ACTIONS_LIST.ANIMALS_GET_SINGLE:
      return state.set('current', action.current);
    case ACTIONS_LIST.ANIMALS_GET_LIST:
      return state.set('list', action.list);
    default:
      return state;
  }
}
