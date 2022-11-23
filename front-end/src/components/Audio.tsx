import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';

// @ts-ignore
const Audio = ({audioName,onClick, src}) => {

  const audioStyles = {
    width: "100%",
    maxWidth: "600px",
    display: "block",
    margin: "0 auto"
  };
  const statusStyleOn = {
    verticalAlign: "middle",
    marginLeft:"140px",
    backgroundColor:"skyblue",
  };
    const statusStyleOff = {
      verticalAlign: "middle",
      marginLeft: "140px",
      backgroundColor: "lightgrey",
    };
	const [isPlaying, setIsPlaying] = useState(false);
	return (
    <div>
      <audio
        className="mb-5"
        style={audioStyles}
        src={src || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        preload="metadata"
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        data-testid="audio"
      ></audio>
    </div>
  );
}

export default Audio;