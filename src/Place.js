import React, {Component} from 'react';
import PropTypes from 'prop-types';
import shouldPureComponentUpdate from 'react-pure-render/function';

import {placeStyle} from './placeStyle';

export default class Place extends Component {
  static propTypes = {
    text: PropTypes.string,
    link: PropTypes.string
  };

  static defaultProps = {};

  shouldComponentUpdate = shouldPureComponentUpdate;

  render() {
    return (
      <div
        style={placeStyle}
      >
      <a href="{this.props.link}"></a>
        {this.props.text}
      </div>
    );
  }
}
