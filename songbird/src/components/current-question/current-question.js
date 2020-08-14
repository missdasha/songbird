import React, {Component} from 'react';
import './current-question.scss';
import Player from '../player';
import { birdsData } from '../../data';
import { Consumer } from '../context';
import image from '../../assets/img/bird.jpg';

export default class CurrentQuestion extends Component {
  render() {
    return (
      <Consumer>
        {
          category => {
            const randomItem = birdsData[category][this.props.randomId];
            const { isGuessed } = this.props;
            console.log(birdsData[category][this.props.randomId].name);

            return  (
                      <div className="current-question d-flex jumbotron rounded">
                        <img className="current-question__image" src={`${isGuessed ? randomItem.image : image}`} alt="bird"/>
                        <div className="current-question__info">
                          <ul className="list-group list-group-flush">
                              <li className="list-group-item">
                                <h3>{isGuessed ? randomItem.name : '*****'}</h3>
                              </li>
                              <li className="list-group-item">
                                <Player item={randomItem} reference={this.props.reference}/>
                              </li>
                            </ul>
                        </div>
                      </div>
                    );
          }
        }
      </Consumer>
    );
  }
}