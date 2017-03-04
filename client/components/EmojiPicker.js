import React, { PureComponent } from 'react';
import template from './EmojiPicker.rt';
import './EmojiPicker.css';

import data from '../data/emojiList.json';

const CATEGORIES = [
  {
    name: 'People',
    caption: 'Smileys & People',
  },
  {
    name: 'Nature',
    caption: 'Animals & Nature',
  },
  {
    name: 'Foods',
    caption: 'Food & Drink',
  },
  {
    name: 'Activity',
    caption: 'Activity',
  },
  {
    name: 'Places',
    caption: 'Travel & Places',
  },
  {
    name: 'Objects',
    caption: 'Objects',
  },
  {
    name: 'Symbols',
    caption: 'Symbols',
  },
  {
    name: 'Flags',
    caption: 'Flags',
  },
  {
    name: 'Skin Tones',
    caption: 'Skin Tones',
  },
];

const SKIN_TONES = [
  {
    value: 0,
    color: '#ffcf11',
  },
  {
    value: 1,
    color: '#fae3c3',
  },
  {
    value: 2,
    color: '#e2cfa1',
  },
  {
    value: 3,
    color: '#dba373',
  },
  {
    value: 4,
    color: '#a88054',
  },
  {
    value: 5,
    color: '#5f4e43',
  },
];

export default class EmojiPicker extends PureComponent {
  static propTypes = {
    onChange: React.PropTypes.func.isRequired,
    selected: React.PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  }

  constructor(props) {
    super(props);

    this.state = {
      categories: CATEGORIES,
      skinTones: SKIN_TONES,
      selectedCategory: CATEGORIES[0],
      selectedTone: SKIN_TONES[0],
      emojiList: data,
      show: false,
    };
  }

  getFilteredEmojis() {
    let arr = this.state.emojiList
      .filter(item => item.category === this.state.selectedCategory.name)
      .sort((a, b) => a.sort_order - b.sort_order);

    if (this.state.selectedCategory.name === 'Skin Tones') {
      let extraArr = this.state.emojiList
        .filter(item => item.skin_variations);

      if (this.state.selectedTone.value > 0) {
        extraArr = extraArr.map((item) => {
          this.generateEmojiWithSkinVaiations(item);

          return this.generateEmojiWithSkinVaiations(item);
        });
      }

      arr = arr.concat(extraArr);
    }

    return arr;
  }

  generateEmojiWithSkinVaiations(emoji) {
    const KEY = Object.keys(emoji.skin_variations)[this.state.selectedTone.value - 1];

    return Object.assign({}, emoji, emoji.skin_variations[KEY]);
  }

  handleSelect(obj) {
    this.setState({ selectedCategory: obj });
  }

  handleSelectSkin(val) {
    this.setState({ selectedTone: val });
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  handleSelectEmoji(emoji) {
    this.props.onChange(emoji);
  }

  render() {
    return template.call(this);
  }
}
