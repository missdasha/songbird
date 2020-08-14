import React, {Component} from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
import './player.scss';

export default class Player extends Component { 
  render() {
    const { item } = this.props;

    return (
      <AudioPlayer
        ref={this.props.reference}
        src={`${item.audio}`}
        autoPlayAfterSrcChange={false}
        customAdditionalControls={[]}
        onPlay={e => console.log("onPlay")}
        onPause={e => console.log("onPause")}
      />
    )
  }
}
