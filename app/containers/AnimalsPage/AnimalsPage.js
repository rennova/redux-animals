/*
 * Animals Page
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

export default class AnimalsPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentWillMount() {
    this.props.tryGetList();
  }

  render() {
    return (
      <div>
        <h3>What do animals say?</h3>
        {this.props.list &&
          <ul>
          {this.props.list.map((item, i) =>
            <li onClick={this.props.getSingleAnimal} key={i}>{item.title}</li>
          )}
          </ul>}
        {this.props.current && this.props.current.title &&
          <span>{this.props.current.title} usually says: {this.props.current.say}</span>
        }
      </div>
    );
  }
}
