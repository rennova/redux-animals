import { fromJS } from 'immutable';

import { selectAnimals, makeSelectList, makeSelectCurrent } from '../selectors';

describe('selectAnimals', () => {
  it('should select the animals state', () => {
    const animalsState = fromJS({
      animalsData: {}
    });
    const mockedState = fromJS({
      animals: animalsState
    });
    expect(selectAnimals(mockedState)).toEqual(animalsState);
  });
});

describe('makeSelectList', () => {
  const listSelector = makeSelectList();
  it('should select the list', () => {
    const list = fromJS(['test1', 'test2', 'test3']);
    const mockedState = fromJS({
      animals: {
        list
      }
    });
    expect(listSelector(mockedState)).toEqual(list);
  });
});

describe('makeSelectCurrent', () => {
  const currentSelector = makeSelectCurrent();
  it('should select the current object', () => {
    const current = fromJS({
      title: 'Cat',
      say: 'Hola!'
    });
    const mockedState = fromJS({
      animals: {
        current
      }
    });
    expect(currentSelector(mockedState)).toEqual(current);
  });
});
