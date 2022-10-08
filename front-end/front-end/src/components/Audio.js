import React, { useState, useEffect, useRef } from 'react';

const Audio = ({audioName,onClick}) => {

	const [isPlaying, setIsPlaying] = useState(false);

	return (
    <div>
      <h3> {audioName} </h3>
      <audio
        src="https://www.google.com/logos/fnbx/animal_sounds/horse.mp3"
        preload="metadata"
        controls
        style={{ background: "white" }}
      ></audio>


    </div>
  );
}

export default Audio;