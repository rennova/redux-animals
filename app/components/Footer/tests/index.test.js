import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(<section>Never give up!</section>)).toBe(
      true
    );
  });
});
