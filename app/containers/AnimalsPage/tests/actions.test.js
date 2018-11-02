import { DUMMY, ACTIONS_LIST } from '../constants';
import { getSingleAnimal, tryGetList } from '../actions';

describe('Animals Actions', () => {
  describe('tryGetList', () => {
    it('should return the correct type and list', () => {
      const expectedResult = {
        type: ACTIONS_LIST.ANIMALS_GET_LIST,
        list: DUMMY.list
      };

      expect(tryGetList()).toEqual(expectedResult);
    });
  });

  describe('getSingleAnimal', () => {
    it('should return the correct type and the selected animal', () => {
      const animal = 'Cat';
      const expectedResult = {
        type: ACTIONS_LIST.ANIMALS_GET_SINGLE,
        current: DUMMY.list.find((obj) => obj.title === animal)
      };

      expect(getSingleAnimal(animal)).toEqual(expectedResult);
    });
  });
});
