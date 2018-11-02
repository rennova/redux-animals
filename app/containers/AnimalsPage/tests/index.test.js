/**
 * Test the AnimalsPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';

import AnimalsPage from '../AnimalsPage';
import { mapDispatchToProps } from '../index';
import { getSingleAnimal } from '../actions';

describe('<AnimalsPage />', () => {
  it('should render list of animals when component will mount', () => {
    const submitSpy = jest.fn();
    mount(<AnimalsPage tryGetList={submitSpy} />);
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should render the copyright notice', () => {
    const wrapper = shallow(
      <div>
        <div className="animal">Cat</div>
        <div className="animal">Dog</div>
        <div className="animal">Chicken</div>
        <div className="animal">Cow</div>
      </div>
    );
    const texts = wrapper.find('.animal').map((node) => node.text());
    expect(texts).toEqual(['Cat', 'Dog', 'Chicken', 'Cow']);
  });

  describe('mapDispatchToProps', () => {
    describe('getSingleAnimal', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.getSingleAnimal).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const name = '';
        result.getSingleAnimal({ target: { value: name } });
        expect(dispatch).toHaveBeenCalledWith(getSingleAnimal(name));
      });
    });

    describe('tryGetList', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.tryGetList).toBeDefined();
      });
    });
  });
});
