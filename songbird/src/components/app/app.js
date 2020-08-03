import React, {Component} from 'react';
import './app.scss';
import Header from '../header';
import CurrentQuestion from '../current-question'
import AnswerOptions from '../answer-options';
import BirdInfo from '../bird-info';
import Button from '../button';
import { Provider } from '../context';

export default class App extends Component {
  state = {
    score: 0,
    category: 0,
    isGuessed: false,
    randomId: Math.round(Math.random() * 5),
    selectedItem: -1,
    correctIndicators: [],
    wrongIndicators: []
  };

  onItemSelected = (event, ind) => {
    this.checkChoice(event.target, ind);
    this.setState({ selectedItem: ind });
  }

  checkChoice = (option, ind) => {
    if (!this.state.isGuessed) {
      console.log(this.state.correctIndicators, this.state.wrongIndicators);
      if (ind === this.state.randomId) {
        this.setState(state => ({
          correctIndicators: state.correctIndicators.concat([ind]),
          isGuessed: true
        }),  () => {
          console.log("Form: ", this.state.correctIndicators);
        });
        // option.querySelector('.indicator').style.backgroundColor = '#c0449d';
      }
      else {
        this.setState(state => ({
          wrongIndicators: state.wrongIndicators.concat([ind]) 
        }));
        // option.querySelector('.indicator').style.backgroundColor = 'black';
      }
    }
  }

  render() {
    console.log(this.state.correctIndicators, this.state.wrongIndicators);
    return (
      <Provider value={this.state.category}>
        <div className="container">
          <Header score={this.state.score}/>
          <CurrentQuestion randomId={this.state.randomId}/>
          <div className="row mb2">
            <div className="col-md-6">
              <AnswerOptions onItemSelected={this.onItemSelected} correctIndicators={this.state.correctIndicators} wrongIndicators={this.state.wrongIndicators}/>
            </div>
            <div className="col-md-6">
              <BirdInfo selectedItem={this.state.selectedItem}/>
            </div>
          </div>
          <Button isGuessed={this.state.isGuessed}/>
        </div>
      </Provider>
    );
  }
}