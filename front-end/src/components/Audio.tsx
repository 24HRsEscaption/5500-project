import { render } from '@testing-library/react';
import React, { useState, useEffect, useRef } from 'react';

// @ts-ignore
const Audio = ({audioName,onClick, src}) => {

  const audioStyles = {
    marginLeft: "100px",
    width: "600px",
    fontFamily: "Arial",
    verticalAlign: "middle",
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
      {/* <h3> {audioName} </h3> */}
      <audio
        style={audioStyles}
        src={src || 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'}
        preload="metadata"
        controls
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        data-testid="audio"
      ></audio>
      <span data-testid="status-text" style={isPlaying? statusStyleOn:statusStyleOff}>Status: {isPlaying ? "On" : "Off"}</span>
    </div>
  );
}

export default Audio;