import React from 'react';
import template from './EmojiForm.rt';

const DEAULT_BG_EMOJI = {
  name: 'SHAVED ICE',
  unified: '1F367',
  variations: [],
  docomo: null,
  au: 'EAEA',
  softbank: 'E43F',
  google: 'FE971',
  image: '1f367.png',
  sheet_x: 7,
  sheet_y: 40,
  short_name: 'shaved_ice',
  short_names: [
    'shaved_ice',
  ],
  text: null,
  texts: null,
  category: 'Foods',
  sort_order: 44,
  has_img_apple: true,
  has_img_google: true,
  has_img_twitter: true,
  has_img_emojione: true,
};

const DEFAULT_TEXT_EMOJI = {
  name: 'KAABA',
  unified: '1F54B',
  variations: [],
  docomo: null,
  au: null,
  softbank: null,
  google: null,
  image: '1f54b.png',
  sheet_x: 24,
  sheet_y: 7,
  short_name: 'kaaba',
  short_names: [
    'kaaba',
  ],
  text: null,
  texts: null,
  category: 'Places',
  sort_order: 114,
  has_img_apple: true,
  has_img_google: true,
  has_img_twitter: true,
  has_img_emojione: true,
};

export default class EmojiForm extends React.PureComponent {
  constructor(props) {
    super(props);

    const DEFAULT_TEXT = this.props.params.UserText || 'break the system'; // eslint-disable-line react/prop-types
    // const BG_EMOJI = this.props.params.UserBg || '🍧';
    // const TEXT_BG_EMOJI = this.props.params.UserTextBg || '🕋';

    this.state = {
      text: DEFAULT_TEXT,
      textLength: 9,
      bgEmoji: DEAULT_BG_EMOJI,
      textEmoji: DEFAULT_TEXT_EMOJI,
      fontSize: 15,
    };
  }

  handleChangeParams(obj) {
    this.setState(obj);
  }

  render() {
    return template.call(this);
  }
}
