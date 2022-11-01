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
      energy: [1],
      src: '',
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
  async onGenerate(text: string) {
    const response = await fetch(
      'http://localhost:5000/get_audio',
      {
        method: 'POST',
        body: JSON.stringify(
          {
            energy: this.state.energy[0],
            pitch: this.state.pitch[0],
            duration: 2 - this.state.speed[0],
            text: text
          }
        )
      }
    );
    this.setState({
      src: URL.createObjectURL(await response.blob())
    });
  }
  render(){
    return (
      <div>
        <br></br>
        <TextInput handleReset={this.onReset.bind(this)} onGenerate={this.onGenerate.bind(this)} />
        <br></br>
        <br></br>
        <Audio audioName="Audio" onClick={() => {}} src={this.state.src}></Audio>
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
