import React, {Component} from 'react';
import './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className="header d-flex">
          <div className="top-header d-flex">
            <h1>Songbird</h1>
            <p className="score"> Score: 
              <span>10</span>
            </p>
          </div>
          <ul className="categories d-flex">
            <li className="categories__item active">Разминка</li>
            <li className="categories__item">Воробьиные</li>
            <li className="categories__item">Лесные птицы</li>
            <li className="categories__item">Певчие птицы</li>
            <li className="categories__item">Хищные птицы</li>
            <li className="categories__item">Морские птицы</li>
          </ul>
      </header>
    );
  }
}