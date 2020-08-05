import React, {Component} from 'react';
import './game-end.scss';
import Button from '../button';
import bird from '../../assets/img/popug.jpg';

export default class GameEnd extends Component {
  _maxScore = 30;

  render() {
    const { score, onButtonClicked } = this.props;
    const isWinner = score === this._maxScore;
    const phrase = isWinner ? 
                            <p>Вы набрали максимальное количество баллов</p> : 
                            <p>Вы прошли викторину и набрали {`${score}`} из 30 возможных баллов</p>; 
    return (
      <div className="game-end jumbotron rounded">
        <h2>Поздравляем!</h2>
        {phrase}
        {isWinner && <img src={bird} alt="parrot"/>}
        <hr/>
        <Button onButtonClicked={onButtonClicked}>Сыграть ещё раз!</Button>
      </div>
    );
  }
}