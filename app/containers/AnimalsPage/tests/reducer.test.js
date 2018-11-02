import { fromJS } from 'immutable';

import animalsReducer from '../reducer';
import { getSingleAnimal, tryGetList } from '../actions';

describe('animalsReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      list: [],
      current: {}
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(animalsReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the tryGetList action correctly', () => {
    const list = [
      { title: 'Cat', say: 'Meow' },
      { title: 'Dog', say: 'Wow' },
      { title: 'Chicken', say: 'Co-co-co' },
      { title: 'Cow', say: 'Moo-moo' }
    ];
    const expectedResult = state.set('list', list);

    expect(animalsReducer(state, tryGetList())).toEqual(expectedResult);
  });

  it('should handle the getSingleAnimal action correctly', () => {
    const name = 'Cat';
    const current = { title: 'Cat', say: 'Meow' };
    const expectedResult = state.set('current', current);

    expect(animalsReducer(state, getSingleAnimal(name))).toEqual(
      expectedResult
    );
  });
});
