/*
 * Animals Page
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class AnimalsPage extends React.PureComponent {
  // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    this.props.tryGetList();
  }

  render() {
    const { list, current } = this.props;
    return (
      <div className="animals-page">
        <h3>What do animals say?</h3>
        {list && (
          <div className="animals-list">
            {this.props.list.map((item) => (
              <div
                onClick={this.props.getSingleAnimal}
                onKeyPress={this.props.getSingleAnimal}
                key={item.title}
                className="animal"
                role="presentation"
              >
                {item.title}
              </div>
            ))}
          </div>
        )}
        {current && current.title && (
          <div className="animal-say">
            {current.title} usually says: {current.say}
          </div>
        )}
      </div>
    );
  }
}

AnimalsPage.propTypes = {
  list: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  current: PropTypes.object,
  getSingleAnimal: PropTypes.func,
  tryGetList: PropTypes.func
};
