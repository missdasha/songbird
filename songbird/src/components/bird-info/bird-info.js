import React, {Component} from 'react';
import './bird-info.scss';

export default class BirdInfo extends Component {
  render() {
    return (
      <div className="bird-info card">
        <div className="bird-info__overview"> 
          <img className="bird-info__image" src="bird.jpg" alt="bird"/>
          <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h4>Чайка</h4>
              </li>
              <li className="list-group-item">Caprimulgus europaeus</li>
              <li className="list-group-item"></li>
          </ul>
        </div>
        <p className="bird-info__description">Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.</p>
      </div>
    );
  }
}