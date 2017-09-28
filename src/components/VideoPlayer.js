import React from 'react';
import ReactPlayer from 'react-player'
import VisibilitySensor from 'react-visibility-sensor';

class VideoPlayer extends React.Component {
  constructor() {
    super();

    this.state = {
      visible: true,
      scrolled: false
    };

    this.visibilityChanged = this.visibilityChanged.bind(this);
  }

  visibilityChanged(visible) {
    this.setState({
      visible
    });
  }

  render() {
    return(
      <VisibilitySensor partialVisibility onChange={this.visibilityChanged}>      
        <div className='c-video-player-wrapper'>
            <div className={`c-video-player ${this.state.visible ? '' : 'c-video-player-scroll'}`}>
                <ReactPlayer url='https://www.youtube.com/watch?v=m0uofbrRPsM' controls />
            </div>
        </div>
      </VisibilitySensor>
    );
  }
}

export default VideoPlayer;
