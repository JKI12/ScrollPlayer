import React from 'react';
import ReactDOM from 'react-dom';
import ScrollPlayer from './components/ScrollPlayer';

// By requiring the stylesheet here like this,
// webpack will append the contents inside a
// style tag in the document HEAD.

require('../styles/components/ScrollPlayer.scss');

ReactDOM.render(<ScrollPlayer />, window.container);
