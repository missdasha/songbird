import React, {Component} from 'react';
import './current-question.scss';
import Player from '../player';

export default class CurrentQuestion extends Component {
  render() {
    return (
      <div className="current-question d-flex jumbotron rounded">
        <img className="current-question__image" src="bird.jpg" alt="bird"/>
        <div className="current-question__info">
          <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h3>Чайка</h3>
              </li>
              <li className="list-group-item">
                <div className="current-question__player">
                  <Player />
                </div>
              </li>
            </ul>
        </div>
      </div>
    );
  }
}