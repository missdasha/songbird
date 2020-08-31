import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

export default class Player extends Component { 
  render() {
    const { item, reference } = this.props;

    return (
      <AudioPlayer
        ref={reference}
        src={item.audio}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        onError={(e) => console.log('error', e)}
      />
    )
  }
}
