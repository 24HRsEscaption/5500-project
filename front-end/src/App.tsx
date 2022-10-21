import React from 'react'
import './App.css';

import TextInput from "./components/TextInput"
import Tools from './components/Tools';
import Audio from './components/Audio';
import Autoplay from './components/Autoplay';
import Slider from './components/Slider';


class App extends React.Component{
  render(){
    return (
      <div>
        <br></br>
        <TextInput />
        <br></br>
        <br></br>
        <Audio audioName="Audio" onClick={() => {}}></Audio>
        <br></br>
        <br></br>
        <Slider name="Speed" />
        <br></br>
        <Slider name="Pitch" />
        <br></br>
        <Slider name="Energy" />
      </div>
    );

    
   
  } 
}

export default App;
