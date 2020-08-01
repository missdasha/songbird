import React, {Component} from 'react';
import './answer-options.scss';

export default class AnswerOptions extends Component {
  render() {
    return (
      <ul className="answer-options list-group">
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
        <li className="list-group-item">
          <span className="indicator"></span>
          Чайка
        </li>
      </ul>
    );
  }
}