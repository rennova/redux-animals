/**
 * Animals selectors
 */

import { createSelector } from 'reselect';

const selectAnimals = (state) =>  state.get('animals');

const makeSelectList = () => createSelector(
  selectAnimals,
  (animalsState) => animalsState.get('list')
);

const makeSelectCurrent = () => createSelector(
  selectAnimals,
  (animalsState) => animalsState.get('current')
)

export {
  selectAnimals,
  makeSelectList,
  makeSelectCurrent
};
