import React, { PureComponent } from 'react';
import convertText2Smiles from 'text2smiles';
import unicodeToStringEmoji from '../utils/common';
import template from './Jumbotron.rt';
import './Jumbotron.css';

export default class Jumbotron extends PureComponent {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
    bgEmoji: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    textEmoji: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
    textLength: React.PropTypes.number.isRequired,
    onChangeParams: React.PropTypes.func.isRequired,
    fontSize: React.PropTypes.number.isRequired,
  };

  convertText() {
    const BG_EMOJI = unicodeToStringEmoji(this.props.bgEmoji);
    const TEXT_EMOJI = unicodeToStringEmoji(this.props.textEmoji);
    const CONVERTED_TEXT = convertText2Smiles(this.props.text, BG_EMOJI, TEXT_EMOJI, this.props.textLength);

    return CONVERTED_TEXT;
  }

  render() {
    return template.call(this);
  }
}
