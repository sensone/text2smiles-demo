import React, { PureComponent } from 'react';
import clipboard from 'clipboard-js';
import template from './CopyBtn.rt';
import './CopyBtn.css';

let timeout;

export default class CopyBtn extends PureComponent {
  static propTypes = {
    text: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      copied: false,
    };
  }

  handleCopies() {
    clipboard.copy(this.props.text).then(
      () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => this.setState({ copied: false }), 7000);

        this.setState({ copied: true });
      },
      (err) => {
        console.log('failure', err);
      },
    );
  }

  render() {
    return template.call(this);
  }
}
