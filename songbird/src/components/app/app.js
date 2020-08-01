import React, {Component} from 'react';
import './app.scss';
import Header from '../header';
import CurrentQuestion from '../current-question'
import AnswerOptions from '../answer-options';
import BirdInfo from '../bird-info';
import Button from '../button';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <CurrentQuestion />
        <div className="row mb2">
          <div className="col-md-6">
            <AnswerOptions />
          </div>
          <div className="col-md-6">
            <BirdInfo />
          </div>
        </div>
        <Button />
      </div>
    );
  }
}