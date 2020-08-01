import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

export default class Player extends Component { 
  render() {
    return (
      <AudioPlayer
        src="correct.mp3"
        customAdditionalControls={[]}
        onPlay={e => console.log("onPlay")}
      />
    )
  }
}
