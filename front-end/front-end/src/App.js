import React from 'react'
import './App.css';

import TextInput from "./components/TextInput"
import Tools from './components/Tools';
import Audio from './components/Audio';
import Autoplay from './components/Autoplay';
import Pace from './components/Pace';
// function App() {
//   return (
//     <div className='userInput'>
//       <TextInput />
//     </div>
//   );
// }


class App extends React.Component{
  render(){
    return (
      <div>
        <br></br>
        <TextInput />
        <hr></hr>
        
        <Audio audioName="Tacotron 2"></Audio>
        <hr></hr>
        <Audio audioName="FastPitch"></Audio>

        <Autoplay />
        <Tools />
        <Pace />

      </div>
    );

    
   
  } 
}

export default App;
