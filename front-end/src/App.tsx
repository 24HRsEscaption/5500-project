import React, {useState} from 'react'
import './App.css';

import TextInput from "./components/TextInput"

import Audio from './components/Audio';

import Slider from './components/Slider';
import { Bar } from 'react-chartjs-2';
// load the options file externally for better readability of the component.
// In the chartOptions object, make sure to add "dragData: true" etc.
import 'chartjs-plugin-dragdata'
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
Chart.register(ChartDataLabels);


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

  labels = ['Duration'];
  data = {
  labels: this.labels,
  datasets: [
    {
      label: 't',
      data: [20],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'e',
      data: [30],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
    {
      label: 's',
      data: [15],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 212, 285, 0.5)',
    },
    {
      label: 't',
      data: [35],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 262, 335, 0.5)',
    },
  ],
};

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
        <br />
        <div style={{height: '200px', width: '800px'}}>
        <Bar data={this.data} options={{
          indexAxis: 'y' as const,
          maintainAspectRatio: false,
          scales: {
            x: {
              stacked: true,
              max: 100,
              min: 0
            },
            y: {
              stacked: true,
              max: 100,
              min: 0
            }
          },
          plugins: {
            // @ts-ignore
            dragData: {
              round: 1,
              showTooltip: true,
              onDragStart: function(e: any) {
                // console.log(e)
              },
              onDrag: function(e: any, datasetIndex: any, index: any, value: number) {              
                e.target.style.cursor = 'grabbing'
                if (value < 0) return false
                // console.log(e, datasetIndex, index, value)
              },
              onDragEnd: function(e: any, datasetIndex: any, index: any, value: any) {
                e.target.style.cursor = 'default' 
              },
            },
            datalabels: {
              font: function(context) {
                var w = context.chart.width;
                return {
                  size: w < 512 ? 12 : 14,
                  weight: 'bold',
                };
              },
              formatter: function(value, context) {
                // @ts-ignore
                return context.chart.data.datasets[context.datasetIndex].label;
              }
            }
          }
        }}/>
        </div>
      </div>
    );

    
   
  } 
}

export default App;
