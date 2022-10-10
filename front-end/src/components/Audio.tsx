import React, { useState, useEffect, useRef } from 'react';

// @ts-ignore
const Audio = ({audioName,onClick}) => {

	const [isPlaying, setIsPlaying] = useState(false);

	return (
    <div>
      {/* <h3> {audioName} </h3> */}
      <audio
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
        preload="metadata"
        controls
        style={{ background: "white" }}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        data-testid="audio"
      ></audio>
      <span data-testid="status-text">Status: {isPlaying ? 'On' : 'Off'}</span>
    </div>
  );
}

export default Audio;