import React, {Component} from 'react';
import './header.scss';
import { categories } from '../../data';
import { Consumer } from '../context';

const Category = () => {
  return (
      <Consumer>
        {
          category => {
            return categories.map((name, ind) => {
              return <li className={`categories__item ${ind === category ? 'active' : ''}`} key={`${name}_${ind}`}>{name}</li>
            });
          }
        }
      </Consumer>
    );
}

export default class Header extends Component {
  render() {
    return (
      <header className="header d-flex">
          <div className="top-header d-flex">
            <h1>Song<span className="bird">bird</span></h1>
            <p className="score">Score: 
              <span> {this.props.score}</span>
            </p>
          </div>
          <ul className="categories d-flex">
            <Category />
          </ul>
      </header>
    );
  }
}