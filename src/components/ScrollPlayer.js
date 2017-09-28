import React from 'react';
import loremIpsum from 'lorem-ipsum';

import VideoPlayer from './VideoPlayer';

class ScrollPlayer extends React.Component {

  render() {
    const text = [];

    const output = loremIpsum({
      count: Math.floor(Math.random() * 15) + 6,
      units: 'paragraphs',
      paragraphLowerBound: 10,
      paragraphUpperBound: 30
    });

    output.split(/\r?\n/).forEach((paragraph, index) => {
      if (paragraph != '') {
        text.push(<p key={index}>{paragraph}</p>);
      }
    }, this);

    return (
      <div className="c-scroll-player">
        <div className="content">
          <h1>Video Player Example</h1>
          <VideoPlayer />
          { text }
        </div>
      </div>
    );
  }
}

export default ScrollPlayer;
