import React, {Component} from 'react';
import './button.scss';

export default class Button extends Component {
  render() {
    return (
      <button className={`btn next-level ${this.props.isGuessed ? 'active' : ''}`}>Следующий уровень</button>
    );
  }
}