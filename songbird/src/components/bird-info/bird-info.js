import React, {Component, Fragment} from 'react';
import Player from '../player';
import './bird-info.scss';
import { birdsData } from '../../data';
import { Consumer } from '../context';

const BirdOverview = ({selectedItem}) => {
  return (
    <Consumer>
        {
          category => {
            const item = birdsData[category][selectedItem];

            return (
              <Fragment>
                <div className="bird-info__overview"> 
                    <img className="bird-info__image" src={`${item.image}`} alt="bird"/>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                          <h4>{item.name}</h4>
                        </li>
                        <li className="list-group-item">{item.species}</li>
                        <li className="list-group-item">
                          <Player item={item}/>
                        </li>
                    </ul>
                </div>
                <p className="bird-info__description">{item.description}</p>
              </Fragment>
            );
          }
        }
    </Consumer>
  );
}

export default class BirdInfo extends Component {
  render() {
    const instruction = (
      <p className="bird-info__instruction">
        Послушайте плеер.<br />Выберите птицу из списка.
      </p>
    );

    return (
      <div className="bird-info card">
        {this.props.selectedItem !== -1 ? <BirdOverview selectedItem={this.props.selectedItem}/> : instruction}
      </div>
    );
  }
}