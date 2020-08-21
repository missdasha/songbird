import React, {PureComponent} from 'react';
import './answer-options.scss';
import { birdsData } from '../../data';
import { Consumer } from '../context';

const AnswerOption = ({onItemSelected, wrongIndicators, correctIndicators}) => {
  return (
      <Consumer>
        {
          category => {
            return birdsData[category].map(({name}, ind) => {
              return  (
                      <li className='list-group-item' onClick={() => onItemSelected(ind)} key={ind}>
                        <span className={`indicator ${wrongIndicators.includes(ind) ? 'wrong' : correctIndicators.includes(ind) ? 'correct' : ''}`}></span>
                        {name}
                      </li>
                      );
          });
        } 
      }
      </Consumer>
      );
}

export default class AnswerOptions extends PureComponent {
  render() {
    const {onItemSelected, correctIndicators, wrongIndicators } = this.props;
    
    return (
      <ul className="answer-options list-group">
        <AnswerOption onItemSelected={onItemSelected} correctIndicators={correctIndicators} wrongIndicators={wrongIndicators}/>
      </ul>
    );
  }
}