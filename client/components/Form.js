import React, { PureComponent } from 'react';
import template from './Form.rt';

export default class Form extends PureComponent {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    bgEmoji: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    textEmoji: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    textLength: React.PropTypes.number.isRequired,
    fontSize: React.PropTypes.number.isRequired,
    onChangeParams: React.PropTypes.func.isRequired,
  };

  handleChangeBg(emoji) {
    this.props.onChangeParams({ bgEmoji: emoji });
  }

  handleChangeTextSmile(emoji) {
    this.props.onChangeParams({ textEmoji: emoji });
  }

  handleChangeText(event) {
    this.props.onChangeParams({ text: event.target.value });
  }

  handleChangeTextLength(value) {
    this.props.onChangeParams({ textLength: value });
  }

  handleChangeFontSize(value) {
    this.props.onChangeParams({ fontSize: value });
  }

  render() {
    return template.call(this);
  }
}
