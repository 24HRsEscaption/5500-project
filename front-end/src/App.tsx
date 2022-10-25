import React, {useState} from 'react'
import './App.css';

import TextInput from "./components/TextInput"
import Tools from './components/Tools';
import Audio from './components/Audio';
import Autoplay from './components/Autoplay';
import Slider from './components/Slider';


class App extends React.Component<any, any>{
  constructor(props: any) {
    super(props);
    this.state = {
      speed: [1],
      pitch: [1],
      energy: [1]
    }
  }
  onReset() {
    console.log(this.state);
    this.setState({
      speed: [1],
      pitch: [1],
      energy: [1]
    });
  }
  render(){
    return (
      <div>
        <br></br>
        <TextInput handleReset={this.onReset.bind(this)} />
        <br></br>
        <br></br>
        <Audio audioName="Audio" onClick={() => {}}></Audio>
        <br></br>
        <br></br>
        <Slider name="Speed" val={this.state.speed} onChange={(val: any) => this.setState({ speed: val }) } />
        <br></br>
        <Slider name="Pitch" val={this.state.pitch} onChange={(val: any) => this.setState({ pitch: val }) } />
        <br></br>
        <Slider name="Energy" val={this.state.energy} onChange={(val: any) => this.setState({ energy: val }) } />
      </div>
    );

    
   
  } 
}

export default App;
