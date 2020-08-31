import React, {Component} from 'react';
import './button.scss';

export default class Button extends Component {
  render() {
    return (
      <button className={`btn next ${this.props.isGuessed ? 'active' : ''}`} onClick={this.props.onButtonClicked}>
        {this.props.children}
      </button>
    );
  }
}

Button.defaultProps = {
  isGuessed: true
};