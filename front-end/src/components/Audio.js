import React, { useState, useEffect, useRef } from 'react';

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
      ></audio>
    </div>
  );
}

export default Audio;