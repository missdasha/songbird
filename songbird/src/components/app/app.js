import React, {Component, Fragment} from 'react';
import './app.scss';
import Header from '../header';
import CurrentQuestion from '../current-question'
import AnswerOptions from '../answer-options';
import BirdInfo from '../bird-info';
import Button from '../button';
import { Provider } from '../context';
import GameEnd from '../game-end';

export default class App extends Component {
  state = {
    score: 0,
    category: 0,
    isGuessed: false,
    randomId: Math.round(Math.random() * 5),
    selectedItem: -1,
    correctIndicators: [],
    wrongIndicators: [],
    attempt: 0,
    gameEnd: false
  };

  onItemSelected = (ind) => {
    this.checkChoice(ind);
    this.setState({ selectedItem: ind });
  }

  checkChoice = (ind) => {
    if (!this.state.isGuessed) {
      if (ind === this.state.randomId) {
        this.setState(state => ({
          correctIndicators: state.correctIndicators.concat([ind]),
          isGuessed: true,
          attempt: state.attempt + 1
        }), () => this.updateScore());
      }
      else {
        this.setState(state => ({
          wrongIndicators: state.wrongIndicators.concat([ind]),
          attempt: state.attempt + 1
        }));
      }
    }
  }

  updateScore = () => {
    this.setState(state => ({
      score: 6 - this.state.attempt + state.score
    }));
  }

  onButtonNextClicked = () => {
    if (this.state.isGuessed) {
      if (this.state.category < 5) {
        this.setState(state => ({
          category: state.category + 1,
          isGuessed: false,
          randomId: Math.round(Math.random() * 5),
          selectedItem: -1,
          correctIndicators: [],
          wrongIndicators: [],
          attempt: 0
        }));
      }
      else {
        this.setState({gameEnd: true});
      }
    }
  }

  onButtonPlayAgainClicked = () => {
    this.setState(state => ({
      score: 0,
      category: 0,
      isGuessed: false,
      randomId: Math.round(Math.random() * 5),
      selectedItem: -1,
      correctIndicators: [],
      wrongIndicators: [],
      attempt: 0,
      gameEnd: false
    }));
  }

  render() {
    const { score, randomId, isGuessed, correctIndicators, wrongIndicators, selectedItem, gameEnd } = this.state;
    return (
      <Provider value={this.state.category}>
        <div className="container">
          <Header score={score}/>
          {
          !gameEnd ? 
          <Fragment>
            <CurrentQuestion randomId={randomId} isGuessed={isGuessed}/>
            <div className="row mb2">
              <div className="col-md-6">
                <AnswerOptions onItemSelected={this.onItemSelected} correctIndicators={correctIndicators} wrongIndicators={wrongIndicators}/>
              </div>
              <div className="col-md-6">
                <BirdInfo selectedItem={selectedItem}/>
              </div>
            </div>
            <Button isGuessed={isGuessed} onButtonClicked={this.onButtonNextClicked}>Следующий уровень</Button>
          </Fragment>
          : 
            <GameEnd score={score} onButtonClicked={this.onButtonPlayAgainClicked}/>
          }

        </div>
      </Provider>
    );
  }
}