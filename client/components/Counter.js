import React, { PureComponent } from 'react';
import template from './Counter.rt';
import './Counter.css';

export default class Counter extends PureComponent {
  static propTypes = {
    value: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
    minValue: React.PropTypes.number,
  }

  static defaultProps = {
    minValue: 1,
  };

  handleChangeTextLength(count) {
    const NEW_VALUE = this.props.value + count;

    if (NEW_VALUE >= this.props.minValue) {
      this.props.onChange(this.props.value + count);
    }
  }

  render() {
    return template.call(this);
  }
}
