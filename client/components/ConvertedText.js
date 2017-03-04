import React, { PureComponent } from 'react';
import template from './ConvertedText.rt';
import './ConvertedText.css';

export default class ConvertedText extends PureComponent {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
  }

  render() {
    return template.call(this);
  }
}
